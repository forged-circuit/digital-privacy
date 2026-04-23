# 🛠️ Troubleshooting Guide

This guide helps you fix common issues across the Digital Privacy system.

If something is not working, start here before making changes.

---

# 🧭 General First Steps (Always Try This First)

If anything breaks or seems wrong:

1. Restart your router
2. Restart your devices (phones, computers, TVs)
3. Wait 2–5 minutes for network changes to apply

Most issues resolve here.

---

# 🌐 Internet Not Working After Setup

## ❗ Symptoms

* No internet access
* Websites do not load
* Devices show “connected but no internet”

## 🧠 Likely Cause

DNS settings are incorrect or Pi-hole is not reachable

## 🛠️ Fix

* Check router DNS settings
* Ensure DNS points to Pi-hole device
* Restart router
* Confirm Pi-hole device is powered on

---

# 🚫 Ads Still Showing

## ❗ Symptoms

* Ads still appear on websites
* Tracking content is visible

## 🧠 Likely Cause

Device is bypassing DNS filtering or cache is active

## 🛠️ Fix

* Restart device
* Clear browser cache
* Confirm device is using network DNS (not custom DNS like 8.8.8.8)
* Reconnect to Wi-Fi

---

# 🔐 Vaultwarden Not Working

## ❗ Symptoms

* Cannot log in
* Vault does not load
* Password sync not working

## 🧠 Likely Cause

Service not running or incorrect connection URL

## 🛠️ Fix

* Check Vaultwarden service is running
* Confirm correct access URL
* Restart container or service
* Try from another device

---

# 🔥 VPN (WireGuard) Not Connecting

## ❗ Symptoms

* Cannot connect remotely
* VPN shows “failed handshake”

## 🧠 Likely Cause

Firewall or configuration mismatch

## 🛠️ Fix

* Restart VPN service
* Confirm correct configuration file
* Check firewall allows VPN port
* Re-import configuration on device

---

# 📡 Devices Not Appearing in Network / Dashboard

## ❗ Symptoms

* Missing devices
* No activity shown in dashboard

## 🧠 Likely Cause

Device not using filtered network or not reporting data

## 🛠️ Fix

* Ensure device is connected to correct Wi-Fi
* Restart device
* Confirm DNS routing is active
* Wait 5–10 minutes for data sync

---

# 📊 Dashboard Not Loading

## ❗ Symptoms

* Blank dashboard
* No metrics showing

## 🧠 Likely Cause

Service not started or network access blocked

## 🛠️ Fix

* Refresh page
* Restart dashboard service
* Check network connectivity
* Confirm dashboard device IP is correct

---

# 🔄 Changes Not Applying

## ❗ Symptoms

* Settings updated but no effect

## 🧠 Likely Cause

Caching or delayed propagation

## 🛠️ Fix

* Restart router
* Restart affected devices
* Wait up to 10 minutes
* Flush DNS cache if needed

---

# 🧠 System Recovery Rule

If unsure:

👉 Restart router + devices first

This fixes most issues across all tiers.

---

# ⚠️ Important Notes

* Do not randomly change DNS settings unless instructed
* Always verify router DNS after changes
* Some updates take time to fully apply
* Multiple restarts are normal during setup

---

# 🧭 When to Use This Guide

Use this when:

* something stops working after setup
* behavior changes unexpectedly
* devices are not showing expected protection

---

# 🚀 Still Stuck?

If issues persist after following this guide:

* re-check your package install steps
* ensure correct tier order was followed
* verify DNS routing is correct

Most issues come from skipped or reordered steps.
