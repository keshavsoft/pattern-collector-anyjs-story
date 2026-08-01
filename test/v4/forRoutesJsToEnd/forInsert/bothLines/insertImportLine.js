import fs from 'fs';

function build(template, parts) {
    return template.replace(/\{(\d+)\}/g, (_, i) => parts[i]);
};

const startFunc = ({ inStory, fileContent, filePath,
    inFolderNameToInsert, lineType = "importLines", inTemplate, inParts }) => {

    const foundUseLinesStory = inStory.linesStory[lineType].find(element => {
        return element.part1 === inFolderNameToInsert;
    });

    if (!foundUseLinesStory) {
        const newLine = build(inTemplate, inParts);

        const lines = fileContent.split(/\r?\n/);

        const lastLine = inStory.lines[lineType][inStory.lines[lineType].length - 1];
        const insertAtIndex = lastLine.lineNumber;
        lines.splice(insertAtIndex, 0, newLine);

        fs.writeFileSync(filePath, lines.join(fileContent.includes("\r\n") ? "\r\n" : "\n"));
    };
};

export default startFunc;