# Forged Circuit Architecture

This document explains how the DNS Blocklist System is structured and how its components interact.

The goal is to provide a **predictable, scalable, and maintainable** approach to DNS filtering.

---

## 🧠 Design Principles

This system is built around four core principles:

### 1. Progressive Levels

* Each level increases in strictness
* Users can move up or down without rebuilding their setup
* No “all-or-nothing” blocking

---

### 2. Separation of Concerns

* Blocklists handle **restriction**
* Whitelists handle **restoration**
* Device-specific behavior is handled separately (TV system)

---

### 3. Real-World Usability

* Avoid unnecessary breakage
* Preserve essential services
* Allow easy troubleshooting

---

### 4. Modularity

* Each component can be used independently
* Lists can be combined or customized
* System works across multiple DNS platforms

---

## 🔢 Level Architecture

The system is built around **7 progressive levels**:

```
Level 1 → Level 2 → Level 3 → Level 4 → Level 5 → Level 6 → Level 7
```

### Key Behavior

* Each level represents an **increase in coverage and aggressiveness**
* Higher levels may introduce:

  * More tracker blocking
  * More telemetry blocking
  * Increased chance of service breakage

---

## 🧱 Blocklist Structure

Located in: `blocklist_levels/`

Each file:

* Represents a specific level
* Contains domains to be blocked
* Is designed to minimize unnecessary duplication

### Design Intent

* Lower levels → broad, low-risk domains
* Higher levels → more aggressive and niche domains

---

## ✅ Whitelist Architecture

Located in: `whitelists/`

Whitelists are designed to **counterbalance blocklists**.

### Key Concept

> Whitelists restore functionality lost due to blocking.

---

### 🔗 Whitelist Stacking Logic

This system uses a **layered whitelist approach**:

When using a given level:

* You include the whitelist for that level
* You may also include lower-level whitelists

#### Example:

For **Level 3 blocking**, you may use:

* `whitelist-lvl1.txt`
* `whitelist-lvl3.txt`

This allows:

* Base-level functionality (Level 1)
* Targeted fixes for Level 3 breakage

---

### Why This Matters

* Prevents over-whitelisting
* Keeps fixes scoped to their level
* Makes troubleshooting easier

---

## 📺 TV System Architecture

Located in: `tv/`

TVs and streaming devices behave differently than general-purpose devices.

### Key Differences

* Many streaming platforms require:

  * Ad domains
  * Telemetry endpoints
* Blocking these can break playback entirely

---

### Design Approach

The TV system is:

* **Separate from main levels**
* Designed to preserve streaming functionality
* Less aggressive by design

---

### TV Levels

```
TV Level 1 → TV Level 2 → TV Level 3
```

* Level 1 → Minimal interference
* Level 2 → Moderate blocking
* Level 3 → Maximum safe blocking for streaming

---

## 🔄 System Interaction

### Standard Device Flow

```
DNS Request
   ↓
Blocklist (based on level)
   ↓
If blocked → denied
If allowed → continue
   ↓
Whitelist check
   ↓
If whitelisted → allowed
```

---

### Key Behavior

* Blocklists act first
* Whitelists override when necessary
* Logs should be used to identify breakage

---

## 🧩 Integration Model

This system is designed to integrate with:

* Pi-hole
* OPNsense (Unbound DNS)
* AdGuard Home
* Other DNS filtering platforms

---

## 🔧 Customization

Users can:

* Combine levels
* Add personal blocklists
* Create custom whitelist entries
* Modify behavior per device or VLAN

---

## 🧠 Summary

This architecture provides:

* Controlled scaling of privacy levels
* Clear separation between blocking and restoring
* Device-specific handling for complex environments
* A maintainable and extensible structure

---

## 📚 Related Documentation

* Project Overview → `../README.md`
* Use Cases → `../USE-CASES.md`
* Contributing → `../CONTRIBUTING.md`
* Licensing → `licensing.md`
* Maintained by: Forged Circuit
