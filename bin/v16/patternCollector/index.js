const getLine = ({ fileContent, inIndex }) => {
    const start = fileContent.lastIndexOf('\n', inIndex) + 1;

    let end = fileContent.indexOf('\n', inIndex);

    if (end === -1) {
        end = fileContent.length;
    }

    let line = fileContent.substring(start, end);

    if (line.endsWith('\r')) {
        line = line.slice(0, -1);
    }

    return line;
};

const getCurrentLineNumber = ({
    fileContent,
    inCurrentLine,
    inLastPosition,
    inCurrentPosition
}) => {
    let line = inCurrentLine;

    for (let i = inLastPosition; i < inCurrentPosition; i++) {
        if (fileContent[i] === '\n') {
            line++;
        }
    }

    return line;
};

const startFunc = ({ fileContent, searchRegex }) => {
    const matches = [];
    let match;

    let currentLine = 1;
    let lastPosition = 0;

    while ((match = searchRegex.exec(fileContent)) !== null) {
        currentLine = getCurrentLineNumber({
            fileContent,
            inCurrentLine: currentLine,
            inLastPosition: lastPosition,
            inCurrentPosition: match.index
        });

        lastPosition = match.index;

        const line = getLine({
            fileContent,
            inIndex: match.index
        });

        matches.push({
            match: match[0],
            line,
            lineNumber: currentLine
        });
    }

    return matches;
};

export default startFunc;