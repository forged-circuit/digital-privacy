# 🔀 Switch VLAN Setup (Allow + Port Mapping)

This step allows VLAN traffic to flow between your firewall, switch, and devices.

The switch does NOT create VLANs—it only carries them.

---

# 🧭 Overview

You will:

1. Allow VLANs on the uplink port (to firewall)
2. Assign ports to specific VLANs
3. Prepare ports for access points

---

# ⚙️ Before You Start

* VLANs are already created on your firewall
* Switch is accessible (web UI or controller)
* You know which port connects to your firewall

---

# 🧩 Step 1: Configure Uplink Port (to Firewall)

Find the port connected to your Protectli firewall.

Set this port to:

👉 **Tagged / Trunk Mode**

Allow ALL VLANs you created:

Example:

* VLAN 5
* VLAN 7
* VLAN 10
* VLAN 15
* VLAN 20
* VLAN 25
* VLAN 35
* VLAN 55

---

# 🧠 What this does

This allows the switch to pass all VLAN traffic to and from the firewall.

---

# 🧩 Step 2: Configure Device Ports (Access Ports)

For each device port, assign ONE VLAN.

👉 Set port mode to: **Access / Untagged**

---

## 🏠 Example (Home Users)

| Device     | Port VLAN |
| ---------- | --------- |
| Laptop     | 15        |
| Smart TV   | 35        |
| Smart Plug | 25        |

---

## 🏢 Example (Business)

| Device      | Port VLAN |
| ----------- | --------- |
| Employee PC | 15        |
| Printer     | 20        |
| Camera      | 25        |
| Server      | 7         |

---

# 🧠 Rule

👉 One device port = one VLAN

---

# 🧩 Step 3: Configure Access Point Port

For the port connected to your WiFi access point:

Set port mode to:

👉 **Tagged / Trunk Mode**

Allow VLANs used by WiFi:

* VLAN 15 (Main WiFi)
* VLAN 25 (IoT WiFi)
* VLAN 55 (Guest WiFi)

(Optional: include others if needed)

---

# 🧠 What this does

Allows one access point to broadcast multiple WiFi networks mapped to VLANs.

---

# 🧩 Step 4: (Optional) Management VLAN

If using VLAN 05 (Pro/Business):

* Assign switch management IP to VLAN 05
* Restrict access to trusted/admin devices only

---

# ⚠️ Important Notes

* VLAN IDs must match firewall exactly
* Do NOT mix tagged and untagged incorrectly
* If a device gets no internet, check VLAN assignment first

---

# ✅ Verification

Test:

* Device gets correct IP range
* Internet works
* Devices are isolated correctly

---

# 🎉 Setup Complete

Your switch is now correctly passing VLAN traffic and assigning devices to the proper network segments.
