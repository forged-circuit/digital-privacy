# 🔵 Privacy Plus – Installation Guide

Privacy Plus is a tier-based protection package built from:

* **Tier 1 → Pi-hole (network-wide ad & tracker blocking)**
* **Tier 3 → Combined Home + Password Manager (identity protection layer)**

This guide installs both tiers in order.

---

# 🧭 Before You Begin

You will need:

* Access to your router settings
* One device for setup (computer or laptop recommended)
* 20–40 minutes of setup time
* Ability to restart your network

---

# ⚙️ Step 1: Install Tier 1 – Pi-hole

This is your core network protection layer.

### What you will do:

* Install Pi-hole on a Raspberry Pi or small server
* Configure your router to use Pi-hole as DNS
* Apply network-wide filtering

### Result:

✔ Ads and trackers are blocked across all devices on your network

---

# ⚙️ Step 2: Verify Tier 1 is Working

Before moving forward, confirm:

* Websites load normally
* Ads are reduced or removed
* Devices are connected to the network

If everything looks good, continue.

---

# ⚙️ Step 3: Install Tier 3 – Identity Protection Layer

Now you will add secure password and identity management.

### What you will do:

* Install Vaultwarden (self-hosted password manager)
* Create your secure vault
* Add your accounts and credentials

### Result:

✔ All passwords are stored securely in your own system
✔ No more password reuse across services

---

# ⚙️ Step 4: Connect Both Layers

Privacy Plus works by combining:

* Network protection (Pi-hole)
* Identity protection (Vaultwarden)

At this stage:

* Your devices are protected from tracking
* Your accounts are secured with strong password management

---

# 🧠 What You Just Built

Privacy Plus gives you:

* Full network-wide ad and tracker blocking
* Secure self-hosted password vault
* Protection across all home devices
* A foundation for advanced upgrades later

---

# ⚠️ Important Notes

* Pi-hole handles network filtering (Tier 1)
* Vaultwarden handles credentials (Tier 3)
* These systems are independent but work together
* You can upgrade or expand later without reinstalling

---

# 🧭 When to Use Privacy Plus

Choose this if you want:

* Strong home privacy protection
* Secure password management
* A balanced, long-term setup

---

# 🚀 Next Step Options

After installation, you can:

* Keep this as your full setup (most users do)
* Upgrade to Business Essentials (adds VPN + infrastructure layers)
* Or expand into advanced tiers later

👉 View all packages in `/packages/`

---

# 🧠 Summary

Privacy Plus combines:

* Tier 1 → Network protection (Pi-hole)
* Tier 3 → Identity protection (Vaultwarden)

Together they form a complete home privacy system.
