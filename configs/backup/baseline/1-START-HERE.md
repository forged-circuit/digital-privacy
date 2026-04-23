\# 💾 Backup System — Baseline Setup



This system ensures your privacy network stays online even if your primary Pi-hole fails.



It introduces redundancy for DNS and configuration recovery.



\---



\# 🧭 Overview



You will set up:



\* A secondary Pi-hole (failover DNS)

\* Backup of configuration files

\* Simple restore process



\---



\# ⚙️ Requirements



\* Second device (Raspberry Pi or small server recommended)

\* Pi-hole installed (secondary instance)

\* Access to your router DNS settings



\---



\# 🧩 Step 1: Install Secondary Pi-hole



Install Pi-hole again on a separate device.



👉 Use standard Pi-hole install process



Do NOT import your primary configuration.



\---



\# 🔄 Step 2: Configure as Backup DNS



Set:



\* Primary DNS → Main Pi-hole

\* Secondary DNS → Backup Pi-hole



On your router or DHCP settings.



\---



\# 📥 Step 3: Sync Blocklists



Run your update script:



```bash id="bk02"

python scripts/update\_blocklists.py

```



This ensures both systems stay aligned.



\---



\# 🧠 Step 4: Backup Strategy



You will maintain:



\* Pi-hole config export (manual backup)

\* Scheduled sync (optional advanced setup later)



\---



\# ⚠️ Important Notes



\* Secondary Pi-hole is NOT a separate system

\* It mirrors filtering behavior, not configuration complexity

\* Keep both systems simple and identical in behavior



\---



\# 🎉 Setup Complete



Your network now has DNS redundancy.



If one Pi-hole fails, traffic automatically fails over.



