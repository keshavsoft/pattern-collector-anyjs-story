const commonFunc = ({ inLines }) => {
    if (inLines.length > 0) {
        return {
            firstLine: inLines[0],
            lastLine: inLines[inLines.length - 1]
        };
    };

    return {
        firstLine: {},
        lastLine: {}
    }
};

const startFunc = ({ inImportLines, inImportLinesFromNpm, inUseLines,
    inExportLines, inVariablesDeclareHereLines
}) => {

    const importLines = commonFunc({ inLines: inImportLines ? inImportLines : [] });

    const importLinesFromNpm = commonFunc({ inLines: inImportLinesFromNpm ? inImportLinesFromNpm : [] });

    const useLines = commonFunc({ inLines: inUseLines ? inUseLines : [] });

    const exportLines = commonFunc({ inLines: inExportLines ? inExportLines : [] });

    const variablesDeclareHereLines = commonFunc({
        inLines: inVariablesDeclareHereLines ? inVariablesDeclareHereLines : []
    });

    return {
        importLinesFromNpm,
        importLines,
        useLines,
        exportLines,
        variablesDeclareHereLines
    };
};

export default startFunc;