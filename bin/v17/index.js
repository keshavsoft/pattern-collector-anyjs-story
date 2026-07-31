// import pullLines from "pattern-collector-anyjs-pull-lines";
// import pullLinesStory from "pattern-collector-anyjs-pull-lines-story";
import pullLines from "./pullLines/index.js";
import pullLinesStory from "./pullLinesStory/index.js";

import extractRegex from './extractRegex.js';

const getRegexForPullLines=({inExtractRegex,fileType})=>{
    return {
 consumptionSearchRegex: inExtractRegex.searchRules[fileType].consumptionRegex,
        importSearchRegex: inExtractRegex.searchRules[fileType].importRegex,
        exportSearchRegex: inExtractRegex.searchRules[fileType].exportRegex,
        importSearchNpmRegex: inExtractRegex.searchRules[fileType].importNpmRegex,
    };
    };

const getRegexForPullLinesStory=({inExtractRegex,fileType})=>{
    return {
   importNpmRegex: inExtractRegex.parseRules[fileType]?.importNpmRegex,
        importRegex: inExtractRegex.parseRules[fileType].importRegex,
        consumptionRegex: inExtractRegex.parseRules[fileType].consumptionRegex,
        exportRegex: inExtractRegex.parseRules[fileType]?.exportRegex,
    };
    };

const startFunc = ({ fileContent, fileType }) => {
    let lines;
const regexForPullLines= getRegexForPullLines({inExtractRegex:extractRegex,fileType});
const regexForPullLinesStory= getRegexForPullLinesStory({inExtractRegex:extractRegex,fileType});

    lines = pullLines({
        fileContent,
        ...regexForPullLines
        // consumptionSearchRegex: extractRegex.searchRules[fileType].consumptionRegex,
        // importSearchRegex: extractRegex.searchRules[fileType].importRegex,
        // exportSearchRegex: extractRegex.searchRules[fileType].exportRegex,
        // importSearchNpmRegex: extractRegex.searchRules[fileType].importNpmRegex,
    });

    const linesStory = pullLinesStory({
        inLines: lines,
        ...regexForPullLinesStory
     
    });

    return { lines, linesStory, regexForPullLines,
        extractRegex,regexForPullLinesStory
    };
};

export default startFunc;