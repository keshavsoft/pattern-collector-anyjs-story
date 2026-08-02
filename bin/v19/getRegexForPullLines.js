import pullLines from "./pullLines/index.js";
import pullLinesStory from "./pullLinesStory/index.js";

import extractRegex from './extractRegex.js';

const getRegexForPullLines = ({ inExtractRegex, fileType }) => {
    return {
        consumptionSearchRegex: inExtractRegex.searchRules[fileType].consumptionRegex,
        importSearchRegex: inExtractRegex.searchRules[fileType].importRegex,
        exportSearchRegex: inExtractRegex.searchRules[fileType].exportRegex,
        importSearchNpmRegex: inExtractRegex.searchRules[fileType].importNpmRegex,
    };
};

const startFunc = ({ fileContent, fileType }) => {
    const regexForPullLines = getRegexForPullLines({ inExtractRegex: extractRegex, fileType });

    return regexForPullLines;
};

export default startFunc;