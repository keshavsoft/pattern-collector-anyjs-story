# pattern-collector-anyjs-story 🔍

> **A fast, automated routing and pattern extraction tool to quickly generate and manage server endpoints.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-story.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-story)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-story.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
* 📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-story](https://www.npmjs.com/package/pattern-collector-anyjs-story)
* 💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-story](https://github.com/keshavsoft/pattern-collector-anyjs-story)
* 🌐 **Live Documentation**: [keshavsoft.github.io/pattern-collector-anyjs-story](https://keshavsoft.github.io/pattern-collector-anyjs-story/)

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-story
```
---


## ❓ Why Use This Repository?

This tool allows developers to **create server routing in a short amount of time**. Instead of manually writing boilerplate code for API endpoints, this library scans your JavaScript files, pulls out existing routing structures, and automatically updates or builds route files.

- **Primary Use Case:** API Routing and Route Generation
- **Target Files:** `end-point.js`, `routes.js`, `app.js`

---

## 🚀 How It Works (Step-by-Step)

### 1. Generating Endpoints (`endpoint.js`)

When you run `forEndpoint.js` inside version-controlled subfolders (e.g., under `/V15/`), the tool scans your configuration and updates or builds the `endpoint.js` file automatically.

**What happens when executed:**
1. Open your terminal.
2. Navigate to your project folder under the target version (e.g., `/test/V15/`).
3. Run `node ./test/v15/forEndPoints.js`.
4. The system updates key sections in `endpoint.js` (specifically lines and related blocks), embedding the newly mapped routes.

### 2. Generating Routes (`routes.js`)

When you run `routes.js`, it automatically processes controller functions and constructs the corresponding routing configurations.

**What happens when executed:**
1. Open your terminal.
2. Run `node ./test/v15/forRoutesEnd.js`.
3. The file `routes.js` gets generated or updated automatically, adding the newly created route instances directly into your code structure.

---

## 📖 Features

- **⚡ Fast Routing**: Reduces manual labor when creating and organizing server endpoints.
- **🏷️ Line & Story Tracking**: Tracks exact line numbers where patterns appear and traces import-to-consumption flow.
- **📊 Line Index Resolvers**: Automatically calculates starting (`firstLineIndex`) and ending (`lastLineIndex`) lines for imports, usages, and exports.
- **📦 Native ESM Support**: Built directly for modern JavaScript / ES Modules.

---
## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).

