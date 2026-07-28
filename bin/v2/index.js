import pullLines from "pattern-collector-anyjs-pull-lines";

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


    return lines;
};

export default startFunc;