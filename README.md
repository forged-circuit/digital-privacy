# Forged Circuit DNS Blocklist System

A structured, multi-level DNS blocklist and whitelist system designed for **scalable privacy, usability, and control** across home networks and devices.

Built for use with Pi-hole, OPNsense, AdGuard Home, and other DNS filtering solutions.

---

## 🏷️ Project Identity

**Project:** DNS Blocklist System  
**Maintainer:** Forged Circuit  
**License:** Dual-license (Code + Data)  

Source: https://github.com/<your-repo-link>

---

## 🧠 Overview

Most blocklists are either:

* Too weak → ads and trackers still get through
* Too aggressive → everything breaks

This project introduces a **progressive level system** that allows you to:

* Start light
* Increase protection gradually
* Maintain functionality using matching whitelists

---

## 🚀 Features

* 🔢 **7-Level Blocklist System** → [`blocklist_levels/`](blocklist_levels/)
* ✅ **Matching Whitelists** → [`whitelists/`](whitelists/)
* 📺 **Dedicated TV / Streaming Lists** → [`tv/`](tv/)
* 🧩 Built for **real-world usability**
* 🔒 Focused on **privacy without unnecessary breakage**

---

## 🔢 Level System

Each level builds on the previous one.

| Level   | Description                                   |
| ------- | --------------------------------------------- |
| Level 1 | Minimal blocking (testing / baseline)         |
| Level 2 | Light ad + tracker blocking                   |
| Level 3 | Balanced default (recommended starting point) |
| Level 4 | Strong privacy with minor breakage            |
| Level 5 | Aggressive tracking + telemetry blocking      |
| Level 6 | Advanced / power-user level                   |
| Level 7 | Maximum / paranoid mode                       |

👉 See real-world setups:
**[`USE-CASES.md`](USE-CASES.md)**

---

## 🧩 How It Works

### Blocklists

Located in: [`blocklist_levels/`](blocklist_levels/)

* Each level increases coverage and strictness
* Higher levels = more aggressive blocking

---

### Whitelists

Located in: [`whitelists/`](whitelists/)

* Restore functionality broken by blocking
* Must be used alongside blocklists
* Follow the same level structure

---

### 📺 TV / Streaming Lists

Located in: [`tv/`](tv/)

* Designed specifically for smart TVs and streaming devices
* Prevents breaking apps like Netflix, Hulu, etc.
* Allows required ad/telemetry endpoints for playback

---

## 🧱 Project Structure

```bash
.github/

blocklist_levels/
  level1.txt
  level2.txt
  level3.txt
  level4.txt
  level5.txt
  level6.txt
  level7.txt

whitelists/
  whitelist-lvl1.txt
  whitelist-lvl2.txt
  whitelist-lvl3.txt
  whitelist-lvl4.txt

tv/
  tv-level1.txt
  tv-level2.txt
  tv-level3.txt

docs/
  architecture.md
  licensing.md

scripts/
  update_blocklists.py

CONTRIBUTING.md
CHANGELOG.md
DISCLAIMER.md
USE-CASES.md
LICENSE
LICENSE-DATA
NOTICE
README.md
```

---

## ⚙️ Usage

### Basic Setup

1. Choose a level from [`blocklist_levels/`](blocklist_levels/)
2. Add the list to your DNS system (Pi-hole, OPNsense, etc.)
3. Add the corresponding whitelist from [`whitelists/`](whitelists/)
4. Test your environment
5. Increase level as needed

---

### Recommended Strategy

* Start at Level 2 or 3
* Monitor logs
* Increase gradually
* Add custom whitelist entries when needed

👉 See examples:
**[`USE-CASES.md`](USE-CASES.md)**

---

## 📚 Documentation

### Core Docs

* 🧠 System Architecture → [`docs/architecture.md`](docs/architecture.md)
* ⚖️ Licensing Details → [`docs/licensing.md`](docs/licensing.md)

### Project Files

* 🤝 Contributing → [`CONTRIBUTING.md`](CONTRIBUTING.md)
* 📜 Changelog → [`CHANGELOG.md`](CHANGELOG.md)
* ⚠️ Disclaimer → [`DISCLAIMER.md`](DISCLAIMER.md)
* 🧩 Use Cases → [`USE-CASES.md`](USE-CASES.md)

---

## 🤝 Contributing

Contributions are welcome, but must follow project structure and quality standards.

👉 Read before submitting:
**[`CONTRIBUTING.md`](CONTRIBUTING.md)**

---

## ⚠️ Disclaimer

This project may break certain websites, apps, or devices depending on the level used.

Use at your own risk.

👉 Full disclaimer:
**[`DISCLAIMER.md`](DISCLAIMER.md)**

---

## 📜 Changelog

Track all updates and changes here:
**[`CHANGELOG.md`](CHANGELOG.md)**

---

## ⚖️ Licensing

This project uses a dual-license approach:

* Code → **[`LICENSE`](LICENSE)**
* Data (blocklists/whitelists) → **[`LICENSE-DATA`](LICENSE-DATA)**

Additional details:
👉 **[`docs/licensing.md`](docs/licensing.md)**

---

## 📄 Notice

See:
**[`NOTICE`](NOTICE)**

---

## 🧠 Final Notes

This project is designed to be:

* Practical for real-world networks
* Flexible across different environments
* Structured for long-term maintainability

Start simple. Increase gradually. Stay in control.
