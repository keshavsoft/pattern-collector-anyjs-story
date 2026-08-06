# pattern-collector-anyjs-story 🔍

> **A powerful, configurable tool to scan JavaScript/ESM files, pull structured line matches, trace import/use stories, and resolve line indexes.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-story.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-story)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-story.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-story](https://www.npmjs.com/package/pattern-collector-anyjs-story)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-story](https://github.com/keshavsoft/pattern-collector-anyjs-story)
*   🌐 **Live Documentation**: [keshavsoft.github.io/pattern-collector-anyjs-story](https://keshavsoft.github.io/pattern-collector-anyjs-story/)


---

## 📖 Overview

`pattern-collector-anyjs-story` is a modular ES module that allows you to static-analyze JavaScript or ESM source code. It scans file contents to identify import and route usage patterns, trace variable connections across those patterns to build a coherent dependency story, and generate indexing details (like first/last line indexes) for each matched pattern category.

This library is particularly useful for building automated routing trees, generating bundle maps, or auditing source code pattern flow.

---

## ✨ Features

- **🧩 Modular Design**: Leveraging clean, focused sub-modules for flexible ESM pattern and story extraction.
- **🏷️ Line and Story Tracking**: Identifies exactly which line number each pattern appears on and traces the import-to-consumption flow.
- **📊 Index Resolvers**: Automatically computes `firstAndLastValues` and `onlyIndexesValues` (starting and ending lines) for each category of pattern.
- **📦 ESM Native**: Built for modern ES module environments.

---

## 🔗 Dependency Chain

*   [`pattern-collector-base-files`](https://www.npmjs.com/package/pattern-collector-base-files) - listed in [`package.json`](package.json) as `^1.3.1`.
*   [`pattern-collector-base-regex-n-parts`](https://www.npmjs.com/package/pattern-collector-base-regex-n-parts) - listed in [`package.json`](package.json) as `^1.6.10`.

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-story
```

---

## 💻 Usage Example

Here is a quick example showing how to extract import, variable declaration, route usage, and export patterns using the `fromEndPointsJs` file type:

```javascript
import collectPatternStory from 'pattern-collector-anyjs-story';

const code = `
import express from 'express';
import funcFromshowAll from './showAll/controller.js';
import funcFrommodify from './modify/controller.js';

const tableName = "doctors.json";
const router = express.Router();

router.get('/showAll', (req, res) => funcFromshowAll({ req, res, inTablePath: tablePath }));
router.put('/modify', express.json(), (req, res) => funcFrommodify({ req, res, inTablePath: tablePath, inConfigPath: configPath }));

export { router };
`;

const result = collectPatternStory({
  fileContent: code,
  fileType: 'fromEndPointsJs'
});

console.log(JSON.stringify(result, null, 2));
/*
Output:
{
  "lines": {
    "importLinesFromNpm": [
      {
        "line": "import express from 'express';",
        "lineNumber": 2
      }
    ],
    "importLines": [
      {
        "line": "import funcFromshowAll from './showAll/controller.js';",
        "lineNumber": 3
      },
      {
        "line": "import funcFrommodify from './modify/controller.js';",
        "lineNumber": 4
      }
    ],
    ...
  },
  "linesStory": {
    "useLines": [
      {
        "part1": "get",
        "part2": "/showAll",
        "part3": "funcFromshowAll"
      },
      ...
    ]
  },
  "firstAndLastValues": {
    "importLinesFromNpm": {
      "firstLine": {
        "line": "import express from 'express';",
        "lineNumber": 2
      },
      "lastLine": {
        "line": "import express from 'express';",
        "lineNumber": 2
      }
    },
    ...
  },
  "onlyIndexesValues": {
    "importLinesFromNpm": {
      "firstLineIndex": 2,
      "lastLineIndex": 2
    },
    "importLines": {
      "firstLineIndex": 3,
      "lastLineIndex": 4
    },
    "useLines": {
      "firstLineIndex": 9,
      "lastLineIndex": 10
    },
    ...
  },
  "variablesConnection": "funcFrom",
  ...
}
*/
```

---

## 🛠️ API Reference

### `default(options)`

The default export is a function that parses the provided content and returns matching pattern details, story tracking, and line indexing maps.

#### Parameters

An options object containing:

* **`fileContent`** `(string)`: The raw JavaScript/ESM source code string to analyze.
* **`fileType`** `(string)`: The configuration template to use (e.g., `'fromRoutesJs'`, `'fromAppJs'`, `'fromRoutesJsEnd'`, `'fromEndPointsJs'`, `'tableGetShowAll'`, `'tableGetFind'`).

#### Returns

* **`Object`**:
  - `lines` `(Object)`: The details of all identified match lines grouped by type (import, npm-import, use, export, variable declarations).
  - `linesStory` `(Object)`: The extracted patterns reconstructed with structured story details.
  - `firstAndLastValues` `(Object)`: The first and last matched line objects for each category.
  - `onlyIndexesValues` `(Object)`: The line numbers (1-indexed) representing the boundaries of each matched category.
  - `variablesConnection` `(string)`: The prefix/variable match resolver (e.g., `'funcFrom'`, `'routerFrom'`).
  - `reverseTemplates` `(Object)`: String templating helpers matching the current file type patterns.

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).
