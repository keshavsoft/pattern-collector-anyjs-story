import fs from 'fs';

import defaultFunc from '../../../index.js';
import insertUseLine from "./insertUseLine.js";
import insertImportLine from "./insertImportLine.js";

const step1 = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    const folderNameToInsert = inFolderNameToInsert;
    const localJsPath = inJsPath;

    const fileContent = fs.readFileSync(localJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType: inFileType
    });

    insertImportLine({
        inStory: story,
        fileContent,
        filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate1: story.regexForPullLinesStory.importRegex.reverseTemplate,
        inTemplate: story.reverseTemplates.importRegex,
        inParts: [`${story.variablesConnection}${folderNameToInsert}`, folderNameToInsert]
    });

};

const step2 = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    const folderNameToInsert = inFolderNameToInsert;
    const localJsPath = inJsPath;

    const fileContent = fs.readFileSync(localJsPath, 'utf8');

    const story = defaultFunc({
        fileContent,
        fileType: inFileType
    });

    insertUseLine({
        inStory: story,
        fileContent,
        filePath: localJsPath, inFolderNameToInsert: folderNameToInsert,
        inTemplate1: story.regexForPullLinesStory.consumptionRegex.reverseTemplate,
        inTemplate: story.reverseTemplates.consumptionRegex,
        inParts: [folderNameToInsert, `${story.variablesConnection}${folderNameToInsert}`]
    });
};

const startFunc = ({ inFolderNameToInsert, inFileType, inJsPath }) => {
    step1({ inFolderNameToInsert, inFileType, inJsPath })
    step2({ inFolderNameToInsert, inFileType, inJsPath })
};

export default startFunc;

// startFunc({ folderNameToInsert, fileType });