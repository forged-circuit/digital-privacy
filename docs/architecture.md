# Forged Circuit Architecture

This document explains how the Forged Circuit Digital Privacy System is structured and how its components interact.

The goal is to provide a simple, scalable, and predictable system for home and business network protection.

---

# 🧠 System Design Overview

The system is built around two core layers:

## 1. Protection Plans (User-Facing Layer)
Located in:/protection-plans/

This is what users interact with first.

It answers:
> “What type of protection do I want?”

Examples:
- Home Users
- Pro Users
- Business Users

Each plan guides users toward a recommended package.

---

## 2. Packages (Implementation Layer)
Located in:/packages/

This is the actual system configuration layer.

Packages include:
- Starter Shield
- Privacy Plus
- Business Essentials
- Pro Business Guard
- Ultimate Offense

Each package defines:
- Which filters are used
- Which rules are applied
- Which devices are affected

---

# 🧠 Design Principles

This system is built around four core principles:

## 1. Simplicity First
Users should never need to understand DNS or filtering logic.

They only choose a protection plan or package.

---

## 2. Separation of Concerns
- Protection Plans → user selection layer
- Packages → system configuration layer
- Filters → actual enforcement logic

Each layer has a single responsibility.

---

## 3. Real-World Usability
The system is designed to:
- Avoid breaking essential services
- Preserve streaming, banking, and critical apps
- Reduce false positives

---

## 4. Modularity
All components can be used independently:
- Packages can be upgraded or downgraded
- Filters can be customized
- Plans can point to different package combinations

---

# 🔢 Package Architecture (Internal System Logic)

Packages are built using a **progressive protection model**:

Starter Shield → Privacy Plus → Business Essentials → Pro Business Guard → Ultimate Offense

Each package increases:
- Tracking protection
- Ad blocking coverage
- Network strictness

Higher packages may increase:
- Risk of service disruption
- Need for whitelisting adjustments

---

# 🧱 Filter Structure (Implementation Layer)

Located in:/filters/

Filters are split into:

## Blocklists
- Define what is blocked at the DNS level
- Organized by main and TV categories

## Whitelists
- Restore required services
- Override block rules when necessary

---

# 🔗 Whitelist Behavior

Whitelists operate as a safety override system.

If a domain is:
1. Blocked by a filter
2. Allowed by a whitelist

➡ It is permitted

This ensures:
- Essential services remain functional
- Breakage can be corrected without reducing protection level

---

# 📺 TV Device System

Located in:/filters/blocklist/tv/

TV and streaming devices are treated differently because:

- Streaming platforms rely on advertising domains
- Aggressive blocking can break playback

## TV Protection Levels
TV Level 1 → TV Level 2 → TV Level 3

- Level 1: Minimal interference
- Level 2: Balanced blocking
- Level 3: Maximum safe filtering for streaming devices

---

# 🔄 System Flow

## Standard Request Flow

DNS Request
   ↓
Applied Package Filter
   ↓
Blocklist evaluation
   ↓
If blocked → request denied
If not blocked → continue
   ↓
Whitelist override check
   ↓
If whitelisted → allowed

---

# 🧩 Integration Model

This system integrates with:

- Pi-hole
- OPNsense (Unbound DNS)
- AdGuard Home
- Other DNS filtering systems

All packages are designed to be platform-agnostic.

---

# 🔧 Customization Model

Users can:
- Choose a protection plan
- Select a package
- Add personal whitelist entries
- Combine or adjust filter levels (advanced users only)

---

# 🧠 Key Insight

This system is NOT built around “levels”.

Instead:

> Levels are internal mechanics used to build packages.

Users interact with:
- Protection Plans
- Packages

Not technical levels.

---

# 📚 Related Documentation

- Project Overview → ../README.md
- Use Cases → ../USE-CASES.md
- Contributing → ../CONTRIBUTING.md
- Licensing → licensing.md

---

Maintained by: Forged Circuit
