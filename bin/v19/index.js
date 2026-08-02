import pullLines from "./pullLines/index.js";
import pullLinesStory from "./pullLinesStory/index.js";

import extractRegex from './extractRegex.js';

const startFunc = ({ fileContent, fileType }) => {
    let lines;

    // const regexForPullLinesStory = getRegexForPullLinesStory({ inExtractRegex: extractRegex, fileType });

    const importLines = pullLines({
        fileContent, inExtractRegex: extractRegex,
        fileType
    });

    const importLinesStory = pullLinesStory({
        fileContent, inExtractRegex: extractRegex,
        fileType
    });

    // const linesStory = pullLinesStory({
    //     inLines: lines,
    //     ...regexForPullLinesStory
    // });

    return {
        lines: importLines.lines,
        regexForPullLines: importLines.regexForPullLines,
        linesStory: importLinesStory.linesStory,
        regexForPullLinesStory: importLinesStory.regexForPullLinesStory,
        extractRegex,
        variablesConnection: extractRegex?.variablesConnection[fileType],
        reverseTemplates: extractRegex?.reverseTemplates[fileType]
    };
};

export default startFunc;