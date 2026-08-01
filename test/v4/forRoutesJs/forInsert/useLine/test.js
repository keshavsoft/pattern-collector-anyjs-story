import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../../../../index.js';

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

const folderNameToInsert = "v3";
const foundImportLinesStory = importLinesStory.find(element => {
    return element.part2 === folderNameToInsert;
});

console.log("foundImportLinesStory : ", JSON.stringify(foundImportLinesStory, null, 2));

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

if (!foundImportLinesStory) {
    const template = story.regexForPullLinesStory.importRegex.reverseTemplate;
    const parts = ["routerFrom" + folderNameToInsert, folderNameToInsert];
    const newLine = build(template, parts);

    const lines = fileContent.split(/\r?\n/);
    const lastImportLine = story.lines.importLines[story.lines.importLines.length - 1];
    const insertAtIndex = lastImportLine.lineNumber;
    lines.splice(insertAtIndex, 0, newLine);

    fs.writeFileSync(routesJsPath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));
};

const foundUseLinesStory = story.linesStory.useLines.find(element => {
    return element.part1 === folderNameToInsert;
});

if (!foundUseLinesStory) {
    const template = 'router.use("/{0}", {1});';
    const parts = [folderNameToInsert, "routerFrom" + folderNameToInsert];
    const newLine = build(template, parts);

    const currentFileContent = fs.readFileSync(routesJsPath, 'utf8');
    const lines = currentFileContent.split(/\r?\n/);

    const currentStory = defaultFunc({
        fileContent: currentFileContent,
        fileType
    });

    const lastUseLine = currentStory.lines.useLines[currentStory.lines.useLines.length - 1];
    const insertAtIndex = lastUseLine.lineNumber;
    lines.splice(insertAtIndex, 0, newLine);

    fs.writeFileSync(routesJsPath, lines.join(currentFileContent.includes("\r\n") ? "\r\n" : "\n"));
};