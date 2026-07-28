# pattern-collector-anyjs-pull-lines 🔍

> **A powerful, configurable tool to scan JavaScript/ESM files and pull structured line matches using custom regular expressions.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-pull-lines.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-pull-lines.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-pull-lines](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-pull-lines](https://github.com/keshavsoft/pattern-collector-anyjs-pull-lines)
*   🌐 **Live Documentation**: [keshavsoft.github.io/pattern-collector-anyjs-pull-lines](https://keshavsoft.github.io/pattern-collector-anyjs-pull-lines/)


---

## 📖 Overview

`pattern-collector-anyjs-pull-lines` is a modular ES module that allows you to static-analyze JavaScript or ESM source code. It scans file contents to identify specific patterns (such as `import` statements or routing configurations) and extracts line details, line numbers, variable names, and directory paths.

This library is particularly useful for building automated routing trees, generating bundle maps, or auditing source code patterns.

---

## ✨ Features

- **🧩 Modular Design**: Leveraging clean, focused sub-modules for flexible ESM pattern extraction.
- **🏷️ Line Tracking**: Identifies exactly which line number each pattern appears on.
- **🧩 Custom Extraction Regex**: Extracts variables, directories, and paths using flexible capturing groups in your regular expressions.
- **📦 ESM Native**: Built for modern ES module environments.

---

## 🔗 Dependency Chain

*   [`pattern-collector-anyjs-pull-lines-all`](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-all) - listed in [`package.json`](package.json) as `^1.3.3`.
*   [`pattern-collector-anyjs-pull-lines-consumption`](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-consumption) - listed in [`package.json`](package.json) as `^1.2.1`.
*   [`pattern-collector-anyjs-pull-lines-export`](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-export) - listed in [`package.json`](package.json) as `^1.2.2`.
*   [`pattern-collector-anyjs-pull-lines-import`](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-import) - listed in [`package.json`](package.json) as `^1.9.3`.
*   [`pattern-collector-anyjs-pull-lines-import-npm`](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-import-npm) - listed in [`package.json`](package.json) as `^1.2.1`.

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-pull-lines
```

---

## 💻 Usage Example

Here is a quick example showing how to extract import and route usage patterns:

```javascript
import pullLines from 'pattern-collector-anyjs-pull-lines';

const code = `
import express from 'express';
import { router as routerFromv1 } from "./v1/routes.js";
import { router as routerFromv2 } from "./v2/routes.js";

const router = express.Router();
router.use("/v1", routerFromv1);
`;

const result = pullLines({
  fileContent: code,
  importRegex: {
    // Captures the router variable alias and the module folder name
    parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
    // Search regex to identify import lines
    searchString: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm
  },
  consumptionRegex: {
    // Captures routing paths and the associated router variable names
    parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
    // Search regex to identify route usage lines
    searchString: /^[ \t]*router\.use\b.*?;/gm
  }
});

console.log(result);
/*
Output:
{
  importLines: [
    {
      variable: 'routerFromv1',
      folderName: 'v1',
      line: 'import { router as routerFromv1 } from "./v1/routes.js";',
      lineNumber: 3
    },
    {
      variable: 'routerFromv2',
      folderName: 'v2',
      line: 'import { router as routerFromv2 } from "./v2/routes.js";',
      lineNumber: 4
    }
  ],
  useLines: [
    {
      variable: 'v1',
      folderName: 'routerFromv1',
      line: 'router.use("/v1", routerFromv1);',
      lineNumber: 7
    }
  ]
}
*/
```

---

## 🛠️ API Reference

### `default(options)`

The default export is a function that parses the provided content and returns matching pattern details.

#### Parameters

An options object containing:

* **`fileContent`** `(string)`: The raw javascript source code string to analyze.
* **`importRegex`** `(object)`: Config for parsing import statements:
  - `searchRegex` / `searchString` `(RegExp)`: Regular expression with `g` flag to search for import statements in the code.
  - `parseRegex` `(RegExp)`: Regular expression with capture groups to extract specific variables (`variable`) and folder names (`folderName`).
* **`consumptionRegex`** `(object)`: Config for parsing route consumption statements:
  - `searchRegex` / `searchString` `(RegExp)`: Regular expression with `g` flag to search for route usage patterns.
  - `parseRegex` `(RegExp)`: Regular expression with capture groups to extract paths and variables.
* **`showLog`** `(boolean)` *(optional)*: When set to `true`, outputs intermediate matching arrays to the console.
* **`showLogStep1`** `(boolean)` *(optional)*: When set to `true`, outputs step-by-step extraction details.

#### Returns

* **`Object`**:
  - `importLines` `(Array<Object>)`: Extracted import matching objects.
  - `useLines` `(Array<Object>)`: Extracted usage matching objects.

Each item in the lists has the following shape:
```typescript
{
  variable: string;    // Captured variable name from parseRegex
  folderName: string;  // Captured directory or value from parseRegex
  line: string;        // Full original line matching the search regex
  lineNumber: number;  // 1-indexed line number in the source file
}
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).
