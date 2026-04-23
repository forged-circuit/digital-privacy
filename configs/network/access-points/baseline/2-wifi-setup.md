# 📶 Access Point Setup (WiFi → VLAN Mapping)

This step connects your WiFi networks to your VLANs.

It allows different types of devices to automatically join the correct network.

---

# 🧭 Overview

You will:

1. Create WiFi networks (SSIDs)
2. Assign each WiFi network to a VLAN
3. Apply basic security settings

---

# ⚙️ Before You Start

* VLANs are already created on your firewall
* Switch is passing VLANs to the access point
* Access point is connected to a trunk/tagged port

---

# 🧩 Step 1: Create WiFi Networks (SSIDs)

Create separate WiFi names for each network type.

---

## 🏠 Home Users

| WiFi Name  | VLAN |
| ---------- | ---- |
| Home       | 15   |
| Home-IoT   | 25   |
| Home-TV    | 35   |
| Home-Guest | 55   |

---

## 🧪 Pro Users

| WiFi Name | VLAN |
| --------- | ---- |
| Home      | 15   |
| LAB       | 10   |
| Home-IoT  | 25   |
| Home-TV   | 35   |
| Guest     | 55   |

---

## 🏢 Business

| WiFi Name | VLAN |
| --------- | ---- |
| Office    | 15   |
| Staff-LAB | 10   |
| IoT       | 25   |
| Displays  | 35   |
| Guest     | 55   |

---

# 🧠 Rule

👉 Each WiFi network must map to ONE VLAN

---

# 🧩 Step 2: Assign VLAN IDs

For each WiFi network:

* Set VLAN ID to match your firewall configuration

Example:

* Home WiFi → VLAN 15
* Guest WiFi → VLAN 55

---

# 🧩 Step 3: Security Settings

Apply these settings to ALL WiFi networks:

* Encryption: **WPA2/WPA3**
* Disable WPS
* Use strong passwords

---

## Guest Network (Important)

For Guest WiFi:

* Enable **client isolation** (if available)
* Prevent guest devices from talking to each other

---

# 🧩 Step 4: (Optional) Advanced Settings

If supported:

* Band steering (combine 2.4GHz + 5GHz)
* Fast roaming (for multiple APs)
* Minimum RSSI (for better performance)

---

# ⚠️ Important Notes

* VLAN IDs MUST match firewall exactly
* If WiFi connects but no internet → check switch VLAN trunk
* Do not reuse same SSID across different VLANs incorrectly

---

# ✅ Verification

Test each WiFi:

* Connect to network
* Check IP range
* Confirm internet access
* Confirm isolation (Guest/IoT should not access Trusted)

---

# 🎉 Setup Complete

Your WiFi networks are now segmented and mapped to your VLAN system.
