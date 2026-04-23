# 🟢 Starter Shield — Installation Guide

Starter Shield provides basic network-wide protection using Pi-hole.

This setup blocks ads and trackers across all devices on your network.

---

# 🧭 Overview

You will:

1. Install Pi-hole
2. Import a pre-configured setup
3. Update blocklists
4. Connect your network

No manual configuration required.

---

# ⚙️ Requirements

* A device to run Pi-hole (Raspberry Pi or similar)
* Access to your router settings
* A computer or phone for setup

---

# 🧩 Step 1: Install Pi-hole

Install Pi-hole on your device using the official installer.

👉 https://pi-hole.net

Follow the default installation steps.

---

# 📥 Step 2: Import Baseline Configuration

This step applies a ready-to-use setup.

1. Open Pi-hole admin panel
   (example: http://pi.hole/admin)

2. Go to:
   Settings → Teleporter

3. Upload the file:

👉 `/configs/pihole/baseline/pihole-baseline-v1.tar.gz`

4. Click Restore

5. Wait for Pi-hole to restart

---

# 🔄 Step 3: Update Blocklists

1. In Pi-hole, go to:
   Tools → Update Gravity

2. Click:

👉 Update

3. Wait for completion

---

# 🌐 Step 4: Connect Your Network

Set your router to use Pi-hole for DNS.

1. Log into your router
2. Find DNS settings
3. Set DNS server to your Pi-hole IP address
4. Save and restart router

---

# 📱 Step 5: Restart Devices

* Restart phones, computers, and TVs
* Reconnect to Wi-Fi

---

# ✅ Expected Result

After setup:

* Ads are blocked across your network
* Tracking domains are filtered
* No software is required on individual devices

---

# 🧠 Optional Add-On

Starter Shield includes one optional upgrade:

* Home network setup (Tier 2a)
* OR password manager (Tier 2b)

You can add these later at any time.

---

# ⚠️ Important Notes

* Do not change Pi-hole settings unless instructed
* Allow a few minutes for changes to apply
* Some apps may require a restart to reflect filtering

---

# 🧭 Need More Protection?

You can upgrade anytime:

👉 Privacy Plus

Adds identity protection and deeper network security.

---

# 🎉 Setup Complete

Your network is now protected with Starter Shield.
