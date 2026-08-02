const commonFunc = ({ inLines }) => {
    if (inLines.length > 0) {
        const firstLine = inLines[0];
        const lastLine = inLines[inLines.length - 1];

        return {
            firstLineIndex: firstLine?.lineNumber,
            lastLineIndex: firstLine?.lineNumber
        };
    };
};

const startFunc = ({ lines }) => {

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