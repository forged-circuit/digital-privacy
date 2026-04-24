# 🧭 Basic Dashboard Layout (Forged Circuit)

This dashboard provides a simple, clean overview of your network health and protection status.

It is designed for:

* Home Users
* Most Pro Users

---

# 🎨 Design System

### Colors

* Text → Metallic Electric Blue
* Numbers → Silver
* Icons / accents → Gold
* Alerts / failures → Bright Red

---

### Branding

* Dashboard Name: **Forged Circuit**
* Top-left icon: Hammer logo
* Bottom-left visual: Circuit graphic

---

# 🧱 Layout Structure

```text
TOP ROW → DNS OVERVIEW

[ Total DNS ] [ % Blocked ] [ Top Domains ] [ Ads Over Time ]

MIDDLE ROW → DEVICE ACTIVITY

[ Active Devices ] [ New Devices ] [ Unknown Devices ]

RIGHT PANEL → SYSTEM HEALTH

[ Pi-hole Status (All Instances) ]

BOTTOM ROW → NETWORK + SECURITY

[ Internet Status ] [ Failed Queries ] [ Protection Status ]
```

---

# 🧩 Widget Definitions

## 🟢 DNS OVERVIEW

### 1. Total DNS Queries

* Timeframe: Last 24 hours
* Type: Stat + sparkline
* Source: Pi-hole

---

### 2. % Blocked

* Timeframe: Last 24 hours
* Type: Stat + sparkline
* Source: Pi-hole

---

### 3. Top Blocked Domains

* Type: List (Top 5)
* Source: Pi-hole

---

### 4. Ads Blocked Over Time

* Type: Line chart
* Timeframe: 24h
* Source: Pi-hole

---

## 🟡 DEVICE / NETWORK

### 5. Active Devices

* Count of currently active clients

---

### 6. New Devices (24h)

* Devices seen for the first time

---

### 7. Unknown Devices

* Devices without labels / classification

---

## 🔵 SYSTEM HEALTH

### 8. Pi-hole Status (All Devices)

Display:

* pihole-primary → Online (green)
* pihole-backup → Online (green)
* pihole-failover → Offline (RED)

---

## 🟠 NETWORK HEALTH

### 9. Internet Status

* Online / Offline indicator
* Must turn RED if offline

---

## 🟣 SECURITY SIGNALS

### 10. Repeated Failed Queries

* Count over 24h
* Bar chart or stat
* Highlight spikes

---

## ⚪ USER STATUS

### 11. Protection Status

States:

* GOOD → all systems working
* WARNING → minor issues
* CRITICAL → failures detected

---

# ⚠️ Alert Rules

These should trigger RED:

* Pi-hole offline
* Internet offline
* High failed query spikes

---

# 🧠 Data Sources

Primary:

* Pi-hole API

Optional:

* Prometheus (for system metrics)
* Node Exporter

---

# 🎯 Goal

This dashboard answers:

* Is my network working?
* Is anything being blocked?
* Are there unknown devices?
* Is anything wrong?

---

# 🚀 Next Step

Import or build dashboard using:

👉 Grafana

Then connect:

* Pi-hole API
* Optional monitoring stack

---
