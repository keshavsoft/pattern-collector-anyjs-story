import patternCollector from "../patternCollector/index.js";

const pullLines = ({ fileContent, importSearchRegex, consumptionSearchRegex,
    exportSearchRegex, importSearchNpmRegex, variablesDeclareHereSearchRegex
}) => {

    let allLines;
    let variablesDeclareHereLines;

    const importLinesFromNpm = patternCollector({
        fileContent,
        searchRegex: importSearchNpmRegex
    });

    //  console.log("importLinesFromNpm : ", importLinesFromNpm);

    const importLines = patternCollector({
        fileContent,
        searchRegex: importSearchRegex
    });

    // console.log("importLines : ", importLines);

    let useLines = patternCollector({
        fileContent,
        searchRegex: consumptionSearchRegex
    });

    // console.log("------------ : ", useLines);

    let exportLines = patternCollector({
        fileContent,
        searchRegex: exportSearchRegex
    });

    if (variablesDeclareHereSearchRegex) {
        variablesDeclareHereLines = patternCollector({
            fileContent,
            searchRegex: variablesDeclareHereSearchRegex
        });
    };

    return {
        allLines,
        importLinesFromNpm,
        importLines,
        useLines,
        exportLines,
        variablesDeclareHereLines
    };
};

const getRegexForPullLines = ({ inExtractRegex, fileType }) => {
    return {
        consumptionSearchRegex: inExtractRegex.searchRules[fileType].consumptionRegex,
        importSearchRegex: inExtractRegex.searchRules[fileType].importRegex,
        exportSearchRegex: inExtractRegex.searchRules[fileType].exportRegex,
        importSearchNpmRegex: inExtractRegex.searchRules[fileType].importNpmRegex,
        variablesDeclareHereSearchRegex: inExtractRegex.searchRules[fileType].variablesDeclareHere
    };
};

const startFunc = ({ fileContent, fileType, inExtractRegex }) => {
    let lines;

    const regexForPullLines = getRegexForPullLines({ inExtractRegex, fileType });

    lines = pullLines({
        fileContent,
        ...regexForPullLines
    });

    return { lines, regexForPullLines };
};

export default startFunc;