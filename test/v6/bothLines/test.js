import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../../index.js';
import insertUseLine from "./insertUseLine.js";
import insertImportLine from "./insertImportLine.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const routesJsPath = path.join(__dirname, "app.js");

const step1 = ({ inFolderNameToInsert, inFileType }) => {
    const folderNameToInsert = inFolderNameToInsert;
    const fileContent = fs.readFileSync(routesJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType: inFileType
    });

    insertImportLine({
        inStory: story,
        fileContent,
        filePath: routesJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate1: story.regexForPullLinesStory.importRegex.reverseTemplate,
        inTemplate: story.reverseTemplates.importRegex,
        inParts: [`${story.variablesConnection}${folderNameToInsert}`, folderNameToInsert]
    });

};

const step2 = ({ inFolderNameToInsert, inFileType }) => {
    const folderNameToInsert = inFolderNameToInsert;
    const fileContent = fs.readFileSync(routesJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType: inFileType
    });

    insertUseLine({
        inStory: story,
        fileContent,
        filePath: routesJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate1: story.regexForPullLinesStory.consumptionRegex.reverseTemplate,
        inTemplate: story.reverseTemplates.consumptionRegex,
        inParts: [folderNameToInsert, `${story.variablesConnection}${folderNameToInsert}`]
    });
};

const startFunc = ({ inFolderNameToInsert, inFileType }) => {
    step1({ inFolderNameToInsert, inFileType })
    step2({ inFolderNameToInsert, inFileType })
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });