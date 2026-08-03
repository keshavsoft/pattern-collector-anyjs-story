const commonFunc = ({ inLines }) => {
    if (inLines.length > 0) {
        const firstLine = inLines[0];
        const lastLine = inLines[inLines.length - 1];

        return {
            firstLineIndex: firstLine?.lineNumber,
            lastLineIndex: lastLine?.lineNumber
        };
    };
};

const startFunc = ({ inImportLines, inImportLinesFromNpm, inUseLines,
    inExportLines, inVariablesDeclareHereLines }) => {

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

const startFunc1 = ({ lines }) => {

    const importLines = commonFunc({ inLines: lines?.importLines });

    const importLinesFromNpm = commonFunc({ inLines: lines?.importLinesFromNpm });

    const useLines = commonFunc({ inLines: lines?.useLines });

    const exportLines = commonFunc({ inLines: lines?.exportLines });

    const variablesDeclareHereLines = commonFunc({ inLines: lines?.variablesDeclareHereLines });

    return {
        importLinesFromNpm,
        importLines,
        useLines,
        exportLines,
        variablesDeclareHereLines
    };
};

export default startFunc;