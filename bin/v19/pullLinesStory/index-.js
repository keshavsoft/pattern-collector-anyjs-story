import patternBase from "pattern-collector-base-regex-n-parts";

const startFunc = ({ inLines, importNpmRegex, importRegex,
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

export default startFunc;