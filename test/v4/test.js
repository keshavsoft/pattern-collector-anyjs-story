import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

import extractRegex from './extractRegex.js';

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const k1 = defaultFunc({
    fileContent,
    fileType: "fromAppJs",
    parseRules: extractRegex?.fromRoutesJs?.parseRules,
    searchRules: extractRegex?.fromRoutesJs?.searchRules,
    showLog: {
        keysOnly: false,
        withValues: false
    },
    showLogStep1: {
        keysOnly: false,
        withValues: false
    }
});

console.log("ssssssssss : ", k1);

