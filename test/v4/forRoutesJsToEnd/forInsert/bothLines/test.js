import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../../../../index.js';
import insertUseLine from "./insertUseLine.js";
import insertImportLine from "./insertImportLine.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "app.js");

const folderNameToInsert = "api1";
const fileType = "fromAppJs";

const step1 = () => {
    const fileContent = fs.readFileSync(appJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType
    });

    insertImportLine({
        inStory: story,
        fileContent,
        filePath: appJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate: story.regexForPullLinesStory.importRegex.reverseTemplate,
        inParts: [`${story.variablesConnection}${folderNameToInsert}`, folderNameToInsert]
    });

};

const step2 = () => {
    const fileContent = fs.readFileSync(appJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType
    });

    insertUseLine({
        inStory: story,
        fileContent,
        filePath: appJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate: story.regexForPullLinesStory.consumptionRegex.reverseTemplate,
        inParts: [folderNameToInsert, `${story.variablesConnection}${folderNameToInsert}`]
    });
};

step1();
step2();