# 🔀 Switch — Baseline Setup

This step prepares your switch to carry VLAN traffic across your network.

The switch connects your firewall, devices, and access points together.

---

# 🧭 Overview

You will:

1. Configure uplink port to firewall
2. Assign VLANs to device ports
3. Prepare ports for access points

---

# ⚙️ Requirements

* Managed switch (VLAN capable)
* Access to switch configuration (web UI or controller)
* Firewall VLANs already configured

---

# 🧠 What This Does

The switch:

* passes VLAN traffic from firewall to devices
* assigns devices to correct networks
* enables multiple networks on one physical system

---

# ⚠️ Important

* VLANs are created on the firewall (NOT the switch)
* Switch only carries VLAN traffic
* Incorrect configuration will break connectivity

---

# 🚀 Next Step

Continue to:

👉 2-vlan-setup.md
