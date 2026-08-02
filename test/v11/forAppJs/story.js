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
console.log("story : ", JSON.stringify(story.onlyIndexesValues, null, 4));

