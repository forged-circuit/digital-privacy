# 🧠 Forged Circuit System Architecture Overview

Digital Privacy is a modular network security and DNS filtering system designed for homes and small businesses.

It operates through three connected layers:

---

# 🧩 1. DNS Intelligence Layer (Core Data System)

This is the foundation of the entire system.

It provides continuously maintained filtering rules used across all deployments.

### 📂 Located in:

* `/filters/blocklist/`
* `/filters/whitelists/`
* `/filters/tv/`

### 🧠 What it does:

* Blocks ads, trackers, and malicious domains
* Maintains allowlists to prevent false positives
* Provides device-specific filtering rules (e.g., smart TVs)
* Continuously updates via automated scripts

### 🔄 Update System:

Automated workflows keep these lists current using scheduled scripts.

This ensures all deployments stay protected without manual updates.

---

# ⚙️ 2. Deployment Layer (Packages System)

This layer turns DNS intelligence into usable systems for real users.

### 📂 Located in:

* `/packages/`

### 🧠 What it does:

Each package is a pre-built combination of **tiers (1–8)** that define system capability.

Instead of manually configuring systems, users select a package and follow an install guide.

---

### 🧱 Tier System Overview:

* Tier 1 → Pi-hole (core DNS filtering)
* Tier 2a → Home network assistance
* Tier 2b → Password manager (Vaultwarden)
* Tier 3 → Combined identity + home system
* Tier 4 → Backup & redundancy
* Tier 5 → Firewall & VPN access
* Tier 6 → Network infrastructure improvements
* Tier 7 → Monitoring dashboards
* Tier 8 → Honeypot intrusion detection

---

### 📦 Packages are built from these tiers:

* Starter Shield → Tier 1 + optional Tier 2
* Privacy Plus → Tier 1 + Tier 3
* Business Essentials → Tier 1 + Tier 3 + Tier 5 + Tier 6
* Pro Business Guard → Business Essentials + Tier 7
* Ultimate Offense → All tiers (1–8)

---

# 🧭 3. User Guidance Layer (Onboarding System)

This layer helps users understand and choose a setup.

### 📂 Located in:

* `/protection-plans/`

### 🧠 What it does:

* Explains available protection levels
* Helps users choose a package
* Provides simplified descriptions for non-technical users
* Separates guidance for Home, Pro, and Business users

---

# 🔄 How the System Works (End-to-End Flow)

The system operates in this sequence:

1. DNS filtering rules are defined in `/filters/`
2. Packages apply those rules through Pi-hole deployments
3. Users select a package from `/protection-plans/`
4. Installation guides configure the system on their network
5. Automated updates keep filtering rules current

---

# 🧠 Key Design Principles

## 1. Modular Design

Each tier represents a reusable capability.

## 2. Separation of Concerns

* Filters = data
* Packages = deployment
* Docs = user understanding

## 3. Scalable Complexity

Users can start simple and expand without rebuilding their system.

## 4. Automation First

DNS filtering updates are handled automatically via workflows.

---

# ⚠️ Important Notes

* This system is designed for home and small business environments
* No manual DNS maintenance is required for normal users
* Advanced users may customize filter rules if desired
* Packages are independent and upgradeable

---

# 🧠 Summary

Digital Privacy is not just a Pi-hole configuration.

It is a layered system consisting of:

* 📡 DNS intelligence (filters)
* ⚙️ Deployment packages (tiers)
* 🧭 User onboarding (guidance docs)

Together, they form a continuously updated network protection ecosystem.

