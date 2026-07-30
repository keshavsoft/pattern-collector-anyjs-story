import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");
const routesJsPath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const k1 = defaultFunc({
    fileContent,
    fileType: "fromAppJs"
});

console.log("ssssssssss : ", k1.linesStory);

