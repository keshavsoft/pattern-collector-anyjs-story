import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");
const routesJsPath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const fileType= "fromAppJs";

const k1 = defaultFunc({
    fileContent,
    fileType
});

//console.log("ssssssssss : ", k1.lines);
const commonTemplate=k1.extractRegex.parseRules[fileType].importRegex.reverseTemplate;

const k2=k1.linesStory.importLines[0];
//console.log("k2 : ", k2);

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

const parts = [k2.part1, k2.part2];
const result = build(commonTemplate, parts);

console.log("result : ", result);
