import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

const fileContent = fs.readFileSync(appJsPath, 'utf8');

const fileType = "fromRoutesJs";

const story = defaultFunc({
    fileContent,
    fileType
});

console.log("ssssssssss : ", JSON.stringify(story.linesStory, null, 2));
