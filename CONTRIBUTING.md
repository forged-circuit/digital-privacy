# Contributing Guidelines

Thank you for your interest in contributing.

This project is structured and curated to maintain consistency, reliability, and real-world usability across different privacy levels and device types.

## 🏷️ Project Ownership

This project is maintained by **Forged Circuit**.

All contributions must preserve attribution and may not remove or replace ownership references.


## 🧠 Philosophy
- Blocklists should be **effective but not unnecessarily destructive**
- Whitelists should **restore functionality without weakening privacy goals**
- Each level builds intentionally on the previous level

---

## ✅ What You Can Contribute

### 1. Domain Additions
- Tracking domains
- Ad servers
- Malware/phishing domains

### 2. Whitelist Fixes
- Broken services (streaming, banking, smart devices)
- False positives

### 3. Improvements
- Performance optimizations
- Organization and structure
- Documentation enhancements

---

## ❌ What Not to Submit

- Entire third-party lists without review
- Duplicate domains
- Overly aggressive blocking that breaks common services
- Non-domain entries (IPs, regex, etc. unless discussed)

---

## 📂 File Structure Rules

- Keep domains **one per line**
- No comments inside `.txt` lists
- Use lowercase only
- No trailing spaces

---

## 🔢 Level Logic

- Levels are **progressive**
- Higher levels = stricter blocking
- Do NOT add low-impact domains to high levels only

---

## 📺 TV Lists

TV lists are separate and must:
- Preserve streaming functionality
- Avoid breaking ads that are required for playback

---

## 🔍 Submission Process

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a Pull Request with:
   - Clear explanation
   - Reason for addition/removal
   - Any testing performed

---

## ⚖️ Review Policy

All submissions are reviewed before merging.

Maintainer reserves the right to:
- Modify submissions
- Reject changes
- Reassign domains to different levels

---

## 🧾 Attribution

By contributing, you agree that your contributions will be part of this open-source project and may be used commercially under the project license.

---

Thanks for helping improve this project.
