📄 Forged Circuit Blueprint v1
🧠 Unified Product + Technical Design
1. 🧭 CORE PRODUCT IDEA

Forged Circuit is a local network protection system that provides:

visibility into DNS/network activity
threat detection via DNS behavior
device awareness
layered protection controls (by tier)

It is NOT cloud-dependent. It is:

🟢 Local-first, privacy-driven, installable security system

2. 🧱 SYSTEM ARCHITECTURE (GLOBAL)

All tiers share the same core engine:

CORE ENGINE
- Pi-hole metrics (DNS queries, blocks, domains)
- Network device tracking
- Blocklist system (levels 1–7)
- Alert engine (events + thresholds)
- Visualization layer (charts + tables)

UI LAYER
- Web dashboard (your HTML/CSS/JS system)
- Grafana optional visualization layer (future / advanced users)

DATA LAYER
- Local metrics (Prometheus-style or Pi-hole API later)
- Mock data (current phase)
- Future: real-time ingestion from Protectli / router / Pi-hole
3. 🟢 BASIC (HOME USER)
🎯 Purpose

“I want to see what’s happening on my network”

👤 User Experience
No login
Open dashboard → see stats instantly
No configuration required
Works offline/local only
📊 Features (UI)
Total DNS queries
Threats blocked %
Active devices
Internet status
Live charts (traffic + blocked)
Top blocked domains table
Most active devices table
Simple alert banner (informational only)
⚙️ Technical Scope
Read-only data layer
No auth system
No persistence required
No user config engine
No role system
🚫 NOT INCLUDED
no login
no settings panel
no historical deep analytics
no per-device controls
4. 🟡 PRO (POWER USER)
🎯 Purpose

“I want control and deeper security insight”

👤 User Experience
Login required (single user)
Dashboard becomes interactive
User can tune protection
📊 Features (UI + Functional)
Everything in Basic PLUS:
🚨 Alert System (REAL)
Threat spikes
New suspicious domains
Device anomalies
DNS failure detection
⚙️ Control Panel
Toggle protection levels (1–7 system)
Adjust block sensitivity:
Low
Medium
High
📈 Advanced Analytics
7–30 day history views
Domain recurrence tracking
Device behavior trends
🧠 Insight Layer
“Most aggressive device”
“Top tracker categories”
“Peak threat hours”
⚙️ Technical Scope
Authentication (single user login)
Feature flag system enabled
Alert engine fully active
Historical data storage (local JSON or DB later)
🚫 NOT INCLUDED
multi-user system
role-based access control
audit logs
5. 🔵 BUSINESS (MULTI-TENANT / MANAGED)
🎯 Purpose

“I manage a network and need structured control over users and devices”

👤 User Experience
Multi-user login system
Role-based dashboard views
Admin controls network-wide policy
👥 Roles
🛠 Admin
full system control
manage users
change policies
view all data
👁 Viewer
read-only access
dashboards only
⚙️ Operator (optional)
manage devices
adjust block policies
no user management
📊 Features (UI + SYSTEM)
Everything in Pro PLUS:
👥 User Management
create / remove users
assign roles
access control per user
🧾 Audit Logging
who changed what
when block rules changed
login history
🧠 Policy Engine
per-device group rules:
Staff
IoT
Guest
different block levels per group
📊 Advanced Analytics
30–90 day retention views
network-wide trend analysis
risk scoring per device
⚙️ Technical Scope
full authentication system (multi-user)
RBAC (role-based access control)
configuration persistence layer
audit log database (local or file-based)
policy engine layer
6. 🧠 FEATURE MATRIX (IMPLEMENTATION VIEW)
Feature	Basic	Pro	Business
Dashboard	✔	✔	✔
Charts	✔	✔	✔
Alerts	Visual only	Active	Role-based
Login	❌	✔	✔
Multi-user	❌	❌	✔
Device control	❌	✔	✔
History (30+ days)	❌	✔	✔
Audit logs	❌	❌	✔
Policy engine	❌	Partial	Full
Block level control	❌	✔	✔
7. 🧩 FEATURE FLAG MODEL (HOW WE WILL IMPLEMENT LATER)

Instead of separate dashboards:

const TIER = "basic"; // basic | pro | business

Then:

UI panels render conditionally
charts load differently per tier
alerts engine scales up

Example:

if (TIER !== "basic") showAlertSystem();
if (TIER === "business") showUserManagement();
8. 🏗️ KEY DESIGN PRINCIPLE

One product. Three capability layers. One codebase.

NOT:

3 dashboards
3 systems
3 architectures
9. 🚀 WHAT THIS ENABLES NEXT

Now that this is locked, we can safely move into:

Next build options:
🧠 Feature flag system (UI tier switching)
🚨 Real alert engine (based on thresholds)
📊 Connect Pi-hole real data (when ready)
📦 Installer packaging (your monetization layer)
🔐 Pro auth system design
