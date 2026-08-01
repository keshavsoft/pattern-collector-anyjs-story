import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routesJsPath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(routesJsPath, 'utf8');

const fileType = "fromRoutesJs";

const story = defaultFunc({
    fileContent,
    fileType
});

console.log("ssssssssss : ", JSON.stringify(story.linesStory, null, 2));

// console.log("ssssssssss : ", k1.lines?.importLines, k1.lines?.useLines);
// const commonTemplate = k1.extractRegex.parseRules[fileType].importRegex.reverseTemplate;

// const k2 = k1.linesStory.importLines[0];
// //console.log("k2 : ", k2);

// function build(template, parts) {
//     return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
// };

// const parts = [k2.part1, k2.part2];
// const result = build(commonTemplate, parts);

//console.log("result : ", result);
