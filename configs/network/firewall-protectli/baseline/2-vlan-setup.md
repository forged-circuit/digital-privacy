# 🌐 VLAN Setup (Protectli Firewall)

This step creates your network segments (VLANs) on the firewall.

All VLANs are defined and controlled here.

---

# 🧭 Overview

You will:

1. Create VLAN interfaces
2. Assign IP subnets
3. Enable DHCP per VLAN
4. Apply basic firewall rules

---

# ⚙️ Before You Start

* Firewall is installed and accessible
* LAN interface is working
* You are logged into the firewall UI

---

# 🧩 Step 1: Create VLAN Interfaces

Navigate to:

👉 Interfaces → Other Types → VLAN

Create VLANs using your LAN interface.

---

## 🏠 Home Users VLANs

| VLAN | Name    |
| ---- | ------- |
| 15   | Trusted |
| 25   | IoT     |
| 35   | TV      |
| 55   | Guest   |

---

## 🧪 Pro Users VLANs

| VLAN | Name       |
| ---- | ---------- |
| 05   | Management |
| 10   | LAB        |
| 15   | Trusted    |
| 25   | IoT        |
| 35   | TV         |
| 55   | Guest      |

---

## 🏢 Business VLANs

| VLAN | Name       |
| ---- | ---------- |
| 05   | Management |
| 07   | Servers    |
| 10   | LAB        |
| 15   | Trusted    |
| 20   | Printers   |
| 25   | IoT        |
| 35   | TV         |
| 55   | Guest      |

---

# 🧩 Step 2: Assign Interfaces

Navigate to:

👉 Interfaces → Assignments

Add each VLAN as a new interface.

Rename them clearly:

* VLAN15 → TRUSTED
* VLAN25 → IOT
* etc.

---

# 🧩 Step 3: Set IP Subnets

Assign each VLAN an IP range:

---

## 🏠 Home Users

| VLAN | Subnet          |
| ---- | --------------- |
| 15   | 192.168.15.1/24 |
| 25   | 192.168.25.1/24 |
| 35   | 192.168.35.1/24 |
| 55   | 192.168.55.1/24 |

---

## 🧪 Pro Users

| VLAN | Subnet          |
| ---- | --------------- |
| 05   | 192.168.5.1/24  |
| 10   | 192.168.10.1/24 |
| 15   | 192.168.15.1/24 |
| 25   | 192.168.25.1/24 |
| 35   | 192.168.35.1/24 |
| 55   | 192.168.55.1/24 |

---

## 🏢 Business

| VLAN | Subnet          |
| ---- | --------------- |
| 05   | 192.168.5.1/24  |
| 07   | 192.168.7.1/24  |
| 10   | 192.168.10.1/24 |
| 15   | 192.168.15.1/24 |
| 20   | 192.168.20.1/24 |
| 25   | 192.168.25.1/24 |
| 35   | 192.168.35.1/24 |
| 55   | 192.168.55.1/24 |

---

# 🧩 Step 4: Enable DHCP per VLAN

Navigate to:

👉 Services → DHCP Server

Enable DHCP for each VLAN interface.

Recommended range:

* Start: .100
* End: .199

Example:

192.168.15.100 → 192.168.15.199

---

# 🧩 Step 5: Set DNS (Pi-hole)

Set DNS for each VLAN:

👉 Use your Pi-hole IP

Example:

192.168.15.2

Apply this to all VLANs.

---

# 🧩 Step 6: Basic Firewall Rules

Navigate to:

👉 Firewall → Rules

---

## Minimum Required Rules

For EACH VLAN:

✔ Allow VLAN → WAN (internet access)

---

## Recommended Restrictions

### IoT VLAN (25)

* ❌ Block access to Trusted VLAN
* ✔ Allow internet only

### Guest VLAN (55)

* ❌ Block access to all internal VLANs
* ✔ Allow internet only

### Management VLAN (05)

* ✔ Allow access to firewall UI
* ❌ Block all other inbound access

---

# 🧠 Important Notes

* VLANs are created ONLY on the firewall
* Switches must allow VLAN traffic (configured separately)
* Access Points will map WiFi → VLAN

---

# ✅ Verification

Test:

* Device receives correct IP per VLAN
* Internet works
* VLAN restrictions are enforced

---

# 🎉 Setup Complete

Your network is now segmented and controlled by your firewall.
