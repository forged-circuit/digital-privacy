# 🔐 Vaultwarden — Baseline Setup

Vaultwarden is your self-hosted password manager.

It stores and encrypts your passwords so you fully control your credentials.

---

# 🧭 Overview

You will:

1. Install Vaultwarden using Docker
2. Start the service
3. Create your admin account
4. Secure the system

No complex configuration required.

---

# ⚙️ Requirements

* A server (Raspberry Pi, mini PC, or Protectli recommended)
* Docker installed
* Local network access
* Basic terminal access

---

# 🧩 Step 1: Install Docker (if not installed)

Run:

```bash
curl -fsSL https://get.docker.com | sh
```

Enable Docker on startup:

```bash
sudo systemctl enable docker
```

---

# 📦 Step 2: Create Vaultwarden Container

Create a folder:

```bash
mkdir -p /opt/vaultwarden
cd /opt/vaultwarden
```

Create a `docker-compose.yml` file:

```yaml
version: "3"

services:
  vaultwarden:
    image: vaultwarden/server:latest
    container_name: vaultwarden
    restart: unless-stopped
    ports:
      - "8080:80"
    volumes:
      - ./data:/data
    environment:
      - SIGNUPS_ALLOWED=false
      - WEBSOCKET_ENABLED=true
```

Start the container:

```bash
docker compose up -d
```

---

# 🌐 Step 3: Access Vaultwarden

Open in browser:

👉 http://your-server-ip:8080

---

# 🧠 Step 4: Create Your Admin Account

1. Open Vaultwarden
2. Create your first account
3. Set a strong master password

⚠️ This password cannot be recovered.

---

# 🔐 Step 5: Secure the System

After setup:

* Disable public access (if exposed externally)
* Keep `SIGNUPS_ALLOWED=false`
* Do not expose port 8080 directly to the internet

Recommended:
👉 Access through VPN (WireGuard in higher tiers)

---

# 🔄 Step 6: Verify Operation

Confirm:

* Login works
* Vault saves entries
* Container restarts correctly

---

# ⚠️ Important Notes

* You are fully responsible for password recovery
* No cloud backup is included by default
* Use secure master password only
* Do not enable public signups

---

# 🎉 Setup Complete

Vaultwarden is now active and integrated into your privacy system.

It will later connect to:

* Home Assistant (automation login flows)
* VPN (secure remote access)
* Browser extensions (device integration)
