#!/usr/bin/env python3

"""
Fetches multiple external blocklists, normalizes them, and writes level files.

UPGRADE:
- Tracks failed sources
- Prints failure report at end
- Optional: can fail CI if sources break
- Keeps your folder structure unchanged
"""

import os
import re
import sys
import time
import shutil
import datetime
import requests
from typing import List, Dict, Set

# ---------------- CONFIG ---------------- #

BLOCKLIST_SOURCES: Dict[str, List[str]] = {
    "level1.txt": [
        "https://phishing.army/download/phishing_army_blocklist_extended.txt",
        "https://urlhaus.abuse.ch/downloads/hostfile/",
    ],
    "level2.txt": [
        "https://adguardteam.github.io/AdGuardSDNSFilter/Filters/filter.txt",
    ],
    "level3.txt": [
        "https://big.oisd.nl/basic/",
        "https://v.firebog.net/hosts/Easyprivacy.txt",
    ],
    "level4.txt": [
        "https://v.firebog.net/hosts/Easylist.txt",
        "https://adaway.org/hosts.txt",
    ],
    "level5.txt": [
        "https://raw.githubusercontent.com/PolishFiltersTeam/KADhosts/master/KADhosts.txt",
        "https://v.firebog.net/hosts/static/w3kbl.txt",
        "https://raw.githubusercontent.com/crazy-max/WindowsSpyBlocker/master/data/hosts/spy.txt",
        "https://v.firebog.net/hosts/Prigent-Ads.txt",
    ],
    "level6.txt": [
        "https://big.oisd.nl/",
        "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/domains/normal.txt",
    ],
    "level7.txt": [
        "https://block.energized.pro/bluGo/formats/extended.txt",
        "https://v.firebog.net/hosts/Prigent-Malware.txt",
    ],
    "tv-level1.txt": [
        "https://big.oisd.nl/basic/",
    ],
    "tv-level2.txt": [
        "https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/SmartTV.txt",
        "https://raw.githubusercontent.com/Perflyst/PiHoleBlocklist/master/AmazonFireTV.txt",
        "https://raw.githubusercontent.com/hkamran80/blocklists/main/smart-tv.txt",
    ],
    "tv-level3.txt": [
        "https://raw.githubusercontent.com/mboutolleau/block-samsung-tv-telemetry/refs/heads/master/samsung_tv_telemetry_urls.txt",
    ],
}

# ---------------- REGEX ---------------- #

DOMAIN_RE = re.compile(
    r"^(?=.{1,255}$)([a-z0-9](?:[a-z0-9\-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$"
)

HOSTS_PREFIX_RE = re.compile(
    r"^\s*(?:0\.0\.0\.0|127\.0\.0\.1|\:\:1)\s+(.+)$"
)

COMMENT_RE = re.compile(r"^\s*(#|//)")

# ---------------- FETCH ---------------- #

def fetch_text(url: str, timeout: int = 45, retries: int = 2) -> str:
    headers = {"User-Agent": "forged-circuit-updater/1.0"}

    for attempt in range(retries + 1):
        try:
            r = requests.get(url, timeout=timeout, headers=headers)
            r.raise_for_status()
            return r.text

        except Exception as e:
            if attempt == retries:
                print(f"[FAILED] {url}: {e}", file=sys.stderr)
                return ""
            time.sleep(2)

    return ""

# ---------------- NORMALIZATION ---------------- #

def normalize_line(line: str) -> str:
    line = line.strip().replace("\ufeff", "")

    if not line:
        return ""
    if COMMENT_RE.match(line):
        return ""

    m = HOSTS_PREFIX_RE.match(line)
    if m:
        line = m.group(1).strip()

    if "#" in line:
        line = line.split("#", 1)[0].strip()

    if "//" in line and line.startswith("http"):
        try:
            line = line.split("://", 1)[1].split("/", 1)[0]
        except Exception:
            pass

    for prefix in ("||", "|", ".", "*.", "[::]"):
        if line.startswith(prefix):
            line = line[len(prefix):]

    line = line.strip().lower().lstrip(".").rstrip(".")

    if line.startswith("*."):
        line = line[2:]

    if " " in line:
        line = line.split()[0].strip()

    if re.match(r"^\d{1,3}(\.\d{1,3}){3}$", line):
        return ""

    if "://" in line:
        try:
            line = line.split("://", 1)[1].split("/", 1)[0]
        except Exception:
            pass

    if DOMAIN_RE.match(line):
        return line

    return ""

# ---------------- PROCESS ---------------- #

def process_sources(urls: List[str], failed_sources: list) -> List[str]:
    entries: Set[str] = set()

    for url in urls:
        text = fetch_text(url)

        if not text:
            failed_sources.append(url)
            continue

        for raw in text.splitlines():
            norm = normalize_line(raw)
            if norm:
                entries.add(norm)

    return sorted(entries)

# ---------------- PATH ---------------- #

def get_output_path(filename: str) -> str:
    if filename.startswith("tv-"):
        return os.path.join("blocklist_levels", "tv", filename)
    else:
        return os.path.join("blocklist_levels", "main", filename)

# ---------------- BACKUP ---------------- #

def backup_current():
    if os.path.exists("blocklist_levels"):
        stamp = datetime.datetime.now().strftime("%Y%m%d-%H%M%S")
        backup_path = f"backup/blocklist_levels-{stamp}"
        shutil.copytree("blocklist_levels", backup_path)
        print(f"[BACKUP] created at {backup_path}")

# ---------------- MAIN ---------------- #

def main():
    backup_current()

    failed_sources = []

    print("\n=== Updating Blocklists ===\n")

    for outfile, urls in BLOCKLIST_SOURCES.items():
        entries = process_sources(urls, failed_sources)

        out_path = get_output_path(outfile)
        os.makedirs(os.path.dirname(out_path), exist_ok=True)

        new_content = "\n".join(entries) + ("\n" if entries else "")

        if os.path.exists(out_path):
            with open(out_path, "r", encoding="utf-8") as f:
                old_content = f.read()
        else:
            old_content = ""

        if new_content != old_content:
            with open(out_path, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"[UPDATED] {out_path}: {len(entries)} entries")
        else:
            print(f"[SKIP] {out_path}: no changes")

    # ---------------- FAILURE REPORT ---------------- #

    print("\n=== FAILURE REPORT ===")

    if failed_sources:
        print("The following sources failed:\n")
        for src in failed_sources:
            print(f" - {src}")

        print("\nWARNING: Some blocklist sources could not be fetched.")

        # OPTIONAL STRONG MODE (uncomment if you want CI to fail)
        # sys.exit(1)

    else:
        print("All sources successfully fetched.")

# ---------------- RUN ---------------- #

if __name__ == "__main__":
    main()
