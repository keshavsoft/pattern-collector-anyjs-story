import getallLinesWithStory from "pattern-collector-anyjs-pull-lines-all";
import patternCollector from "pattern-collector";

import packageJson from '../../package.json' with {type: 'json'};

const startFunc = ({ fileContent, importSearchRegex, consumptionSearchRegex,
    exportSearchRegex, importSearchNpmRegex
}) => {
    let allLines;

    const importLinesFromNpm = patternCollector({
        fileContent,
        searchString: importSearchNpmRegex
    });

    const importLines = patternCollector({
        fileContent,
        searchString: importSearchRegex
    });

    let useLines = patternCollector({
        fileContent,
        searchString: consumptionSearchRegex
    });

    let exportLines = patternCollector({
        fileContent,
        searchString: exportSearchRegex
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