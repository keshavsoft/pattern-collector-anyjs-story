import pullLines from "./pullLines/index.js";
import pullLinesStory from "./pullLinesStory/index.js";
import firstAndLast from "./buildLinesIndexes/firstAndLast.js";
import onlyIndexes from "./buildLinesIndexes/onlyIndexes.js";

import extractRegex from './extractRegex.js';

const startFunc = ({ fileContent, fileType }) => {
    let lines;

    const linesInfo = pullLines({
        fileContent, inExtractRegex: extractRegex,
        fileType
    });

    const story = pullLinesStory({
        inLines: linesInfo?.lines,
        inExtractRegex: extractRegex,
        fileType
    });

    const firstAndLastValues = firstAndLast({ lines: linesInfo?.lines });
    const onlyIndexesValues = onlyIndexes({ lines: linesInfo?.lines });

    return {
        lines: linesInfo.lines,
        regexForPullLines: linesInfo.regexForPullLines,
        linesStory: story.linesStory,
        regexForPullLinesStory: story.regexForPullLinesStory,
        extractRegex,
        variablesConnection: extractRegex?.variablesConnection[fileType],
        reverseTemplates: extractRegex?.reverseTemplates[fileType],
        firstAndLastValues, onlyIndexesValues
    };
};

export default startFunc;