# 🧭 Forged Circuit — Basic Dashboard

This dashboard provides a clean, real-time view of your network health, protection status, and device activity.

Designed for:

* Home Users
* Most Pro Users

---

# 🎯 Purpose

This dashboard answers:

* Is my network working?
* Is anything being blocked?
* Are there unknown devices?
* Is anything wrong?

---

# 🧱 Dashboard Layout

## 🟢 DNS Overview

* Total DNS Queries
* % Blocked
* Top Blocked Domains
* Ads Blocked Over Time

---

## 🟡 Device Activity

* Active Devices
* New Devices (24h)
* Unknown Devices

---

## 🔵 System Health

* Pi-hole Status (all instances)

---

## 🟠 Network Health

* Internet Status

---

## 🟣 Security Signals

* Repeated Failed Queries

---

## ⚪ Protection Status

* Overall system state:

  * ✅ Good
  * ⚠️ Warning
  * 🔴 Critical

---

# 🎨 Design System

### Colors

* Text → Metallic Electric Blue
* Numbers → Silver
* Icons / accents → Gold
* Alerts / failures → Bright Red

---

# ⚠️ Alert Behavior

The following will trigger RED:

* Pi-hole offline
* Internet offline
* High failed query activity

---

# 🔌 Data Sources

This dashboard expects:

* Pi-hole metrics (via API, exporter, or Prometheus)
* Optional: system metrics (if extended later)

---

# 📥 Import Instructions

1. Open Grafana
2. Go to **Dashboards → Import**
3. Upload:

👉 `forged-circuit-basic.json`

4. Select your datasource
5. Save

---

# ⚠️ Important

You may need to adjust metric names depending on your setup.

Common setups:

* Pi-hole exporter
* Prometheus
* Direct API integrations

---

# 🚀 Next Steps

After importing:

* Apply branding (colors, logos)
* Connect real data sources
* Move to advanced dashboards when ready

---
