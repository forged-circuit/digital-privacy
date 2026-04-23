\# 🔥 Protectli Firewall — Baseline Setup



This guide configures a dedicated Protectli device as your main firewall and network security gateway.



It controls all traffic entering and leaving your network.



\---



\# 🧭 Overview



You will:



\* Install firewall OS on Protectli

\* Configure WAN/LAN interfaces

\* Enable basic security rules

\* Prepare VPN integration



\---



\# ⚙️ Requirements



\* Protectli device (Vault series recommended)

\* USB drive for OS installation

\* Monitor + keyboard (initial setup)



Recommended OS:

👉 OPNsense or pfSense



\---



\# 🧩 Step 1: Install Firewall OS



1\. Download OPNsense or pfSense ISO

2\. Flash to USB

3\. Boot Protectli from USB

4\. Install OS to internal drive



\---



\# 🌐 Step 2: Configure Interfaces



Assign:



\* WAN → Internet modem

\* LAN → Internal switch/network



Confirm:



\* WAN receives ISP IP

\* LAN serves internal network



\---



\# 🔐 Step 3: Enable Basic Firewall Rules



Default behavior:



\* Block all inbound traffic (default deny)

\* Allow outbound traffic

\* Allow LAN → WAN traffic



Do NOT modify advanced rules yet.



\---



\# 🔄 Step 4: Prepare for VPN Integration



Reserve configuration space for:



\* WireGuard setup

\* Remote access rules

\* Secure admin access



(This will be configured in VPN baseline later)



\---



\# ⚠️ Important Notes



\* Do not expose firewall admin interface to WAN

\* Keep configuration simple at this stage

\* VPN will be added in a separate module



\---



\# 🎉 Setup Complete



Your Protectli firewall is now active and controlling network traffic.



