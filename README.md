---

# —͟͟͞͞ **CYBER ☢️\_𖣘 -BOT ⚠️ TEAM\_ ☢️ — by MAHIN**

\`\`

> **Branding:** `CYBER BOT MAHIN`  •  **Owner:** **Mahin**  •  **Phone:** `+8801603792186`  •  **Admin FB ID:** `100045306603611`

---

## 👉 New to bots?

**CLICK **[**HERE**](https://github.com/ridoy99005/CYBER-BOT-MAHIN/issues)** IF YOU ARE NEW TO BOTS**

---

---

## ⚙️ Deploy with GitHub Actions (WORKFLOWS)

```yml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]

    steps:
      - uses: actions/checkout@v4

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: |
          if [ -f package.json ] && jq -e '.scripts.build' package.json > /dev/null; then npm run build; fi

      - name: Start the bot
        env:
          PORT: 8080
        run: npm start
```

---

### 🕋✨ About

`THIS BOT IS CREATED TO DOWNLOAD AND FIND VARIOUS TYPES OF THINGS QUICKLY — EXAMPLE: LOGO, PHOTO, STICKERS, VIDEOS, MOVIES, AND MANY MORE FEATURES.`

**Original Base (Fork Source):** [CYBER-BOT-COMMUNITY (credit retained to upstream authors)](https://github.com/cyber-ullash/CYBER-BOT-COMMUNITY)

> **Note:** All branding replaced with **CYBER BOT MAHIN** per owner request. No “DJ QUEEN” or other names appear anywhere.

---

## ❖ Support / যোগাযোগ

**Need help? Message Mahin on WhatsApp or Facebook.**

**Facebook (Owner/Admin):**

* **Mahin (Profile):** [https://www.facebook.com/100045306603611/](https://www.facebook.com/100045306603611/)
* **Saved Contact Link:** [https://www.facebook.com/100045306603611/posts/1210808423772700/](https://www.facebook.com/100045306603611/posts/1210808423772700/)

> Add your Page/Group links below once ready.

---

## 🔴 Messenger Group & YouTube

* **Messenger Group (Updates):** Join Group
* **YouTube (Tutorials):** Subscribe / Watch

*(Replace with your own links anytime.)*

---

## 🚀 One‑Click Deploy Buttons

### Heroku

> Click to deploy your fork:

---

### Replit

> Open in Replit and run. Edit `config.json` or env vars, set MongoDB key, then run.

---

### Koyeb

> Pre-filled deploy with environment variables. Replace `SESSION_ID` and owner fields.

---

### Railway

---

### Glitch

---

### Codespaces

---

### Render

---

## ▶️ How to Deploy on GitHub Workflows (Free)

* Watch the YouTube video above. The steps are same for **CYBER BOT MAHIN**.
* Push your repo → Actions will install, build and start.

---

## 🙏 Special Thanks

* ✨ CYBER RAJIB
* 💡 SHAON AHMED
* ⚡ NUZRUL
* 🎩 Grandpa EJ
* 🛡️ SAHADAT
* 🧠 SUJON
* 🔧 MAHBUB SHAON
* 🌟 NOMAN

> Credit to upstream authors; full rebrand executed for **Mahin**.

---

## Release Info

* **Release Date:** 15/04/2025 at 08:00 (BST)
* **Brand:** CYBER BOT MAHIN

**Don’t forget to ⭐ star after fork!**

---

## 📦 Quick Start (Local)

```bash
# 1) Clone your rebranded repo
git clone https://github.com/ridoy99005/CYBER-BOT-MAHIN.git
cd CYBER-BOT-MAHIN

# 2) Node & deps
node -v   # should be >= 20
npm ci

# 3) Configure env
cp .env.example .env   # or create .env
# edit .env: MONGODB_URI, SESSION_ID, OWNER_NUMBER="+8801603792186", BOT_NAME="CYBER BOT MAHIN"

# 4) Run
npm start
```

---

## 🔐 Owner / Admin Details (Embedded)

* **Owner Name:** Mahin
* **Owner Phone:** +8801603792186
* **Admin FB ID:** 100045306603611
* **Profile Link:** [https://www.facebook.com/100045306603611/](https://www.facebook.com/100045306603611/)
* **Support WhatsApp:** [https://wa.me/8801603792186](https://wa.me/8801603792186)

> These appear in help/about commands and metadata.

---

## 📣 Notes

* All occurrences of **Ullash** or other branding have been removed.
* Set your **SESSION\_ID** before deployment (use your bot/session generator).
* Works on **mobile (Kiwi/Lemur)** and standard desktops.

— End of README —
