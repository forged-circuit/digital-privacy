# ⚙️ Configuration System (Core Setup)

This folder contains the full system setup for your privacy network.

Everything here works together to build a complete, segmented, and secure environment.

---

# 🧭 How This Works

Each folder represents a core part of your system.

You do NOT need to understand everything—just follow the setup order.

---

# 🚀 Setup Order (Follow This Exactly)

Install systems in this order:

---

## 1️⃣ DNS Filtering (Required)

👉 `/configs/pihole/`

* Blocks ads, trackers, and unwanted traffic
* Applies to every device on your network

---

## 2️⃣ Network Foundation

### 🔥 Firewall (Required)

👉 `/configs/network/firewall-protectli/`

* Controls all traffic
* Creates VLANs (network segments)

---

### 🔀 Switch (Required for VLANs)

👉 `/configs/network/switch/`

* Passes VLAN traffic
* Assigns devices to networks

---

### 📶 Access Points (WiFi)

👉 `/configs/network/access-points/`

* Connects WiFi to VLANs
* Separates devices automatically

---

### 🔐 VPN (Optional but Recommended)

👉 `/configs/network/vpn/`

* Secure remote access to your network
* Choose:

  * Router VPN (simple)
  * Protectli VPN (advanced)

---

## 3️⃣ Core Services

### 🏠 Home Assistant

👉 `/configs/home-assistant/`

* Device monitoring and automation
* Network awareness

---

### 🔑 Vaultwarden

👉 `/configs/vaultwarden/`

* Secure password manager
* Centralized credential control

---

## 4️⃣ Resilience (Optional)

👉 `/configs/backup/`

* Backup Pi-hole
* Failover protection
* Keeps network running if primary fails

---

## 5️⃣ Detection (Advanced)

👉 `/configs/honeypot/`

* Detects suspicious activity
* Logs potential threats

---

## ⏳ 6️⃣ Dashboards (Coming Last)

👉 `/configs/dashboards/`

* Visibility into your network
* Metrics, alerts, and monitoring

---

# 🧠 How Everything Connects

Your system works as a layered stack:

```text
Internet
   ↓
Firewall (Protectli)
   ↓
Switch (VLAN control)
   ↓
Access Points (WiFi mapping)
   ↓
Devices
   ↓
Pi-hole (DNS filtering)
   ↓
Services (Home Assistant, Vaultwarden)
   ↓
Detection (Honeypot)
```

---

# ⚠️ Important Notes

* Follow the setup order exactly
* Do NOT skip firewall or Pi-hole
* VLANs are created on the firewall, not the switch
* Switch and access points only pass VLAN traffic

---

# 🧭 If You're Not Sure Where to Start

Start here:

👉 `/configs/pihole/`

Then follow the order above.

---

# 🎯 Goal

By completing this folder, you will have:

* Network-wide ad blocking
* Segmented device groups (VLANs)
* Secure remote access
* Device and password management
* Threat detection capability

---

# 🚀 Next Step

Once configs are complete:

👉 Move to `/packages/`

This will combine everything into full install bundles.
