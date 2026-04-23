# 🛠️ Honeypot Installation

This step installs your honeypot system.

You have two options:

* ✅ Option A (Recommended): OpenCanary
* ⚠️ Option B (Advanced): Cowrie (optional)

---

# 🧭 Choose Your Setup

👉 Most users should use **Option A (OpenCanary)**

Only use Cowrie if you:

* understand SSH environments
* want deeper attack simulation
* are comfortable managing logs manually

---

# ✅ Option A — OpenCanary (Recommended)

Lightweight and easy-to-manage honeypot.

---

## 🧩 Step 1: Install Dependencies

```bash
sudo apt update
sudo apt install python3-pip python3-venv -y
```

---

## 🧩 Step 2: Install OpenCanary

```bash
pip3 install opencanary
```

---

## 🧩 Step 3: Generate Config

```bash
opencanaryd --copyconfig
```

This creates:

```text
~/.opencanary.conf
```

---

## 🧩 Step 4: Start OpenCanary

```bash
opencanaryd --start
```

---

## 🧩 Step 5: Verify

Check logs:

```bash
tail -f ~/.opencanary.log
```

---

# 🧠 What This Does

* Creates fake services (SSH, FTP, HTTP, etc.)
* Logs connection attempts
* Runs quietly in the background

---

# ⚠️ Important

* Keep this device inside VLAN 25 (IoT)
* Do NOT expose to the internet
* Do NOT modify ports unless needed

---

# ⚠️ Option B — Cowrie (Advanced)

SSH/Telnet honeypot that simulates real attacker interaction.

👉 This is NOT required for most users

---

## 🧠 When to Use Cowrie

* You want to observe attacker behavior
* You are running a lab environment
* You understand SSH/log analysis

---

## 🧩 Step 1: Install Dependencies

```bash
sudo apt update
sudo apt install git python3-virtualenv libssl-dev libffi-dev build-essential -y
```

---

## 🧩 Step 2: Install Cowrie

```bash
git clone https://github.com/cowrie/cowrie.git
cd cowrie
```

---

## 🧩 Step 3: Setup Environment

```bash
python3 -m venv cowrie-env
source cowrie-env/bin/activate
pip install --upgrade pip
pip install -r requirements.txt
```

---

## 🧩 Step 4: Configure

```bash
cp etc/cowrie.cfg.dist etc/cowrie.cfg
```

Edit config if needed.

---

## 🧩 Step 5: Start Cowrie

```bash
bin/cowrie start
```

---

## 🧩 Step 6: View Logs

```bash
tail -f var/log/cowrie/cowrie.log
```

---

# ⚠️ Important (Cowrie)

* Uses SSH simulation (can generate more noise)
* Requires more monitoring
* Should remain isolated in VLAN 25 or LAB VLAN

---

# 🔐 Security Rules (Both Options)

* Do NOT allow access to other VLANs
* Do NOT expose directly to WAN
* Keep firewall restrictions in place

---

# 🎉 Setup Complete

Your honeypot is now active and monitoring your network.

Logs will be used later in:

👉 dashboards (visibility layer)
