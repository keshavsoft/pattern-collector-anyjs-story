// import pullLines from "pattern-collector-anyjs-pull-lines";
// import pullLinesStory from "pattern-collector-anyjs-pull-lines-story";
import pullLines from "./pullLines/index.js";
import pullLinesStory from "./pullLinesStory/index.js";

import extractRegex from './extractRegex.js';

const startFunc = ({ fileContent, fileType }) => {
    let lines;

    lines = pullLines({
        fileContent,
        consumptionSearchRegex: extractRegex.searchRules[fileType].consumptionRegex,
        importSearchRegex: extractRegex.searchRules[fileType].importRegex,
        exportSearchRegex: extractRegex.searchRules[fileType].exportRegex,
        importSearchNpmRegex: extractRegex.searchRules[fileType].importNpmRegex,
    });

    const linesStory = pullLinesStory({
        inLines: lines,
        importNpmRegex: extractRegex.parseRules[fileType]?.importNpmRegex,
        importRegex: extractRegex.parseRules[fileType].importRegex,
        consumptionRegex: extractRegex.parseRules[fileType].consumptionRegex,
        exportRegex: extractRegex.parseRules[fileType]?.exportRegex,
    });

    return { lines, linesStory };
};

export default startFunc;