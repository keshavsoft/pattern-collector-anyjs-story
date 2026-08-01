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
const importLinesStory = story.linesStory.importLines;

console.log("ssssssssss : ", JSON.stringify(importLinesStory, null, 2));

const folderNameToInsert = "v2";
const foundImportLinesStory = importLinesStory.find(element => {
    return element.part2 === folderNameToInsert;
});

console.log("foundImportLinesStory : ", JSON.stringify(foundImportLinesStory, null, 2));

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};
