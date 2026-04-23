# 🕵️ Honeypot — Baseline Setup

This system detects suspicious or unauthorized activity on your network.

It does NOT block traffic—it observes and logs behavior for visibility.

---

# 🧭 Overview

You will:

1. Deploy a honeypot service
2. Place it inside a specific VLAN
3. Allow it to monitor activity
4. Review logs later (dashboards in future tiers)

---

# 🧠 What This Does

* Detects unusual device behavior
* Logs connection attempts
* Helps identify compromised devices
* Provides visibility into network activity

---

# 🌐 Where It Lives (IMPORTANT)

The honeypot must be placed in the correct VLAN.

---

## 🏠 Home Users

👉 Place in:

VLAN 25 (IoT)

---

## 🧪 Pro Users

👉 Place in:

* VLAN 25 (primary)
* VLAN 10 (optional for testing)

---

## 🏢 Business

👉 Place in:

* VLAN 25 (primary)
* VLAN 10 (optional internal monitoring)

---

# ❌ Do NOT place honeypot in:

* VLAN 15 (Trusted)
* VLAN 05 (Management)
* VLAN 07 (Servers)
* VLAN 55 (Guest)

---

# 🔐 Isolation Rules

The honeypot must:

* NOT access other VLANs
* NOT initiate outbound traffic
* ONLY listen and log activity

---

# 🧠 Why This Matters

Most attacks or compromises originate from:

👉 IoT or untrusted devices

Placing the honeypot in VLAN 25 gives the best visibility with the least risk.

---

# ⚠️ Important Notes

* This system is passive (monitoring only)
* It does not replace firewall protection
* Logs will be used in dashboard systems later

---

# 🚀 Next Step

Continue to:

👉 2-install.md

This will walk through installing the honeypot software.
