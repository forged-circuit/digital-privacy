# 🛡️ Forged Circuit Digital Privacy System

A modular network protection and DNS filtering system for homes and small businesses.

This system blocks ads, trackers, and malicious traffic at the network level using continuously updated DNS intelligence.

---

# 🧭 What This System Includes

Digital Privacy is built from two core components:

## 1. 🛡️ Protection System (User Installations)

* Pi-hole network protection (Tier 1)
* Password & identity security (Tier 3)
* VPN & firewall protection (Tier 5)
* Monitoring dashboards (Tier 7)
* Backup & redundancy (Tier 4)
* Honeypot detection (Tier 8)

These are installed as packages.

---

## 2. 📡 DNS Filtering Intelligence Layer (Core Engine)

This repository also includes a continuously maintained filtering system:

* `/filters/blocklist/` → domain blocking rules
* `/filters/whitelists/` → allowed exceptions
* `/filters/tv/` → smart TV-specific filtering rules
* Automated update scripts for continuous maintenance

This layer powers all Pi-hole deployments in the system.

---

# 🔄 Continuous Updates

DNS filtering data is automatically updated through GitHub workflows.

This ensures:

* Blocklists stay current
* New threats are added over time
* False positives can be corrected via whitelists
* TV and device-specific rules remain optimized

---

# 📦 Choose Your Protection Level

## 🟢 Starter Shield

Basic network protection using Tier 1 filtering system.

## 🔵 Privacy Plus

Full home protection system with identity security.

## 🟡 Business Essentials

Small business network protection stack.

## 🟠 Pro Business Guard

Adds monitoring and visibility dashboards.

## 🔴 Ultimate Offense

Full system including backup, monitoring, and honeypot detection.

👉 Full install guides: `/packages/`

---

# 🧠 How It Works

1. DNS filtering rules are maintained in this repository
2. Pi-hole applies those rules at the network level
3. Packages install and configure the system per tier
4. Automated updates keep filtering intelligence current

---

# ⚙️ What You Will Need

* Router access
* One setup device (computer recommended)
* Ability to follow step-by-step instructions

---

# ⚠️ Important Notes

* DNS filtering rules are continuously updated
* Packages use these rules automatically
* You can deploy without modifying any filter files
* Advanced users may customize whitelists or blocklists

---

# 🧠 Key Concept

This system is both:

> 🛡️ a network protection platform
> 📡 and a live DNS intelligence dataset

---

# 🚀 Start Here

👉 Choose your path:

* `/protection-plans/`
* `/packages/`
