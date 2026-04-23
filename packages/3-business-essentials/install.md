# 🟡 Business Essentials – Installation Guide

Business Essentials is a **tier-based package** built from:

* Tier 1 → Pi-hole (core filtering)
* Tier 3 → Home + Password Manager foundation
* Tier 5 → Firewall & VPN
* Tier 6 → Network hardware upgrades (APs / Switch)

This guide installs each tier in order.

---

# 🧭 Before You Begin

You will need:

* Router access
* Admin access to network devices
* 30–60 minutes setup time
* Ability to restart network devices

---

# ⚙️ Step 1: Install Tier 1 – Pi-hole

Set up network-wide ad and tracker blocking.

* Deploy Pi-hole on your system (Raspberry Pi or server)
* Set router DNS to Pi-hole
* Confirm ads are being blocked

✔ This becomes your base network filter

---

# ⚙️ Step 2: Add Tier 3 – Identity Layer

Set up secure credential management:

* Deploy Vaultwarden (password manager)
* Connect household/business users
* Store credentials securely

✔ This protects access to your systems and accounts

---

# ⚙️ Step 3: Add Tier 5 – Firewall & VPN

Secure external access and traffic:

* Enable VPN access (WireGuard recommended)
* Configure firewall rules
* Restrict remote access to secure channels

✔ This secures inbound and outbound traffic

---

# ⚙️ Step 4: Add Tier 6 – Network Infrastructure (Optional Hardware)

Improve network stability and performance:

* Configure access points (APs)
* Set up managed switch if available
* Segment devices if needed (optional)

✔ This improves speed and reliability

---

# 🧠 What You Now Have

A complete small business protection stack:

* Network-wide filtering (Pi-hole)
* Credential security (Vaultwarden)
* Secure remote access (VPN)
* Improved network infrastructure

---

# ⚠️ Important Notes

* You can install tiers one at a time
* Each tier builds on the previous one
* You do NOT need all hardware on day one
* Setup can be paused and resumed

---

# 🧭 Recommendation

If unsure:

👉 Install Tier 1 first
👉 Then add Tier 3
👉 Then expand to Tier 5

---

# 🚀 Result

You now have a secure, managed small business network without enterprise complexity.
