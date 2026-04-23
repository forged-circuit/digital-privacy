# Forged Circuit DNS Blocklist System

A structured digital privacy system designed to help users protect their home network from ads, trackers, and unwanted connections.

Built for use with:
- Pi-hole
- OPNsense
- AdGuard Home
- Other DNS filtering systems

---

# 🧭 What This Project Is

This system is designed for real-world home users who want:

- Simple setup options
- Scalable protection levels
- Control over what gets blocked
- A way to improve privacy over time

You do NOT need to understand networking to use it.

---

# 🧩 How This System Is Organized

This project is split into two simple parts:

## 1. Protection Plans (What you choose)

Located in:
/protection-plans/

These are beginner-friendly guides that help you decide what level of protection you need:

- Home Users
- Pro Users
- Business Users

Each guide tells you exactly where to start.

---

## 2. Packages (What you install)

Located in:
/packages/

These are the actual installable configurations:

- Starter Shield
- Privacy Plus
- Business Essentials
- Pro Business Guard
- Ultimate Offense

Each package contains setup instructions and DNS lists.

---

# 🔒 Protection Levels (Behind the Scenes)

Each package uses a structured level system:

| Level | Description |
|------|------------|
| Level 1 | Minimal filtering (baseline) |
| Level 2 | Light ad + tracker blocking |
| Level 3 | Balanced protection (recommended) |
| Level 4 | Strong privacy protection |
| Level 5 | Advanced blocking |
| Level 6 | Power-user configuration |
| Level 7 | Maximum protection mode |

> Higher levels provide stronger privacy but may require additional whitelist tuning.

---

# 🧩 Key Features

- 7-level DNS filtering system
- Matching whitelist system to restore broken services
- Dedicated TV / streaming protection lists
- Compatible with major DNS platforms
- Gradual upgrade path from simple → advanced protection

---

# 📺 TV / Streaming Support

Located in:
/tv/

These lists are designed specifically for smart TVs and streaming devices.

They help prevent:
- Streaming service breakage
- App login issues
- Playback interruptions

---

# ⚙️ How to Use

## Step 1: Choose a Protection Plan
Go to:
/protection-plans/

Pick:
- Home User
- Pro User
- Business

---

## Step 2: Select a Package

Choose a package:

- Starter Shield (basic protection)
- Privacy Plus (recommended home setup)
- Business Essentials (small business)
- Pro Business Guard (advanced monitoring)
- Ultimate Offense (full protection suite)

---

## Step 3: Install

Each package contains step-by-step instructions.

---

## Step 4: Add to DNS System

Use with:
- Pi-hole
- OPNsense
- AdGuard Home

---

# 📚 Documentation

- Architecture → `/docs/architecture.md`
- Licensing → `/docs/licensing.md`
- Use Cases → `/USE-CASES.md`

---

# 🤝 Contributing

Contributions are welcome but must follow project structure and maintain usability for non-technical users.

See: `CONTRIBUTING.md`

---

# ⚠️ Disclaimer

This system may block websites, services, or applications depending on the selected protection level.

Use at your own discretion.

See: `DISCLAIMER.md`

---

# 📜 License

This project uses a dual-license model:

- Code → `LICENSE`
- Data (blocklists/whitelists) → `LICENSE-DATA`

---

# 🧠 Final Note

This system is designed to be:

- Easy for beginners
- Scalable for advanced users
- Practical for real home networks

Start simple. Upgrade when needed. Stay in control.
