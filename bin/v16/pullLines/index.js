import patternCollector from "../patternCollector/index.js";

const startFunc = ({ fileContent, importSearchRegex, consumptionSearchRegex,
    exportSearchRegex, importSearchNpmRegex
}) => {
    let allLines;

    const importLinesFromNpm = patternCollector({
        fileContent,
        searchRegex: importSearchNpmRegex
    });

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

    return {
        allLines,
        importLinesFromNpm,
        importLines,
        useLines,
        exportLines
    };
};

export default startFunc;