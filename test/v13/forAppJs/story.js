import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

const fileType = "fromAppJs";

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const story = defaultFunc({
    fileContent,
    fileType
});
// firstAndLastValues, onlyIndexesValues
console.log("1 : ", JSON.stringify(story.lines.importLines[0], null, 4));
console.log("2 : ", JSON.stringify(story.linesStory.importLines[0], null, 4));
console.log("3 : ", JSON.stringify(story.lines.useLines[0], null, 4));
console.log("4 : ", JSON.stringify(story.linesStory.useLines[0], null, 4));

