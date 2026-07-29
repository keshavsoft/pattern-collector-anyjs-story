import pullLines from "pattern-collector-anyjs-pull-lines";
import pullLinesStory from "pattern-collector-anyjs-pull-lines-story";

const startFunc = ({ fileContent, searchRules, parseRules
}) => {
    let allLines;

    const lines = pullLines({
        fileContent,
        consumptionSearchRegex: searchRules?.consumptionRegex?.searchRegex,
        importSearchRegex: searchRules?.importRegex?.searchRegex,
        exportSearchRegex: searchRules?.exportRegex?.searchRegex,
        importSearchNpmRegex: searchRules?.importNpmRegex?.searchRegex
    });

    const linesStory = pullLinesStory({
        inLines: lines,
        importNpmRegex: parseRules?.parseRules?.importNpmRegex,
        importRegex: parseRules?.parseRules?.importRegex,
        consumptionRegex: parseRules?.parseRules?.consumptionRegex,
        exportRegex: parseRules?.parseRules?.exportRegex,
    });

    return { lines, linesStory };
};

export default startFunc;