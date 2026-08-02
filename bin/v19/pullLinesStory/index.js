import patternBase from "pattern-collector-base-regex-n-parts";

import patternCollector from "../patternCollector/index.js";

const pullLinesStory = ({ inLines, importNpmRegex, importRegex,
    consumptionRegex, exportRegex
}) => {
    const importLinesFromNpm = inLines?.importLinesFromNpm.map(element => {
        let fromPatternBase;
        fromPatternBase = patternBase({
            matchLine: element?.match, parseRegex: importNpmRegex?.parseRegex,
            nParts: importNpmRegex?.nParts
        });

        return {
            ...fromPatternBase,
            lineNumber: element?.lineNumber
        };
    });

    // console.log("importLinesFromNpm : ", importLinesFromNpm[0]);

    const importLines = inLines?.importLines.map(element => {
        return patternBase({
            matchLine: element.match, parseRegex: importRegex?.parseRegex,
            nParts: importRegex?.nParts
        });
    });


    const useLines = inLines?.useLines.map(element => {
        return patternBase({
            matchLine: element?.match, parseRegex: consumptionRegex?.parseRegex,
            nParts: consumptionRegex?.nParts
        });
    });

    // console.log("importLines : ", consumptionRegex, useLines);

    const exportLines = inLines?.exportLines.map(element => {
        return patternBase({
            matchLine: element?.match, parseRegex: exportRegex?.parseRegex,
            nParts: exportRegex?.nParts
        });
    });

    return {
        importLinesFromNpm,
        importLines,
        useLines,
        exportLines
    };
};

const getRegexForPullLinesStory = ({ inExtractRegex, fileType }) => {
    return {
        importNpmRegex: inExtractRegex?.parseRules[fileType]?.importNpmRegex,
        importRegex: inExtractRegex?.parseRules[fileType]?.importRegex,
        consumptionRegex: inExtractRegex?.parseRules[fileType]?.consumptionRegex,
        exportRegex: inExtractRegex?.parseRules[fileType]?.exportRegex
    };
};

const startFunc = ({ inLines, fileType, inExtractRegex }) => {
    let linesStory;

    const regexForPullLinesStory = getRegexForPullLinesStory({ inExtractRegex, fileType });

    linesStory = pullLinesStory({
        inLines,
        ...regexForPullLinesStory
    });

    return { linesStory, regexForPullLinesStory };
};

export default startFunc;