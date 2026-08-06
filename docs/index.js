function copyCode(btn) {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        setTimeout(() => {
            btn.innerText = originalText;
        }, 1500);
    });
}

function switchResultTab(tabName) {
    const isVisual = tabName === 'visual';
    document.getElementById('tab-visual').classList.toggle('active', isVisual);
    document.getElementById('tab-json').classList.toggle('active', !isVisual);
    document.getElementById('result-visual-content').style.display = isVisual ? 'grid' : 'none';
    document.getElementById('result-json-content').style.display = isVisual ? 'none' : 'block';
}

// Recreated Core Javascript Parsing logic for Browser
function getLineContent(content, index) {
    const start = content.lastIndexOf('\n', index) + 1;
    let end = content.indexOf('\n', index);
    if (end === -1) end = content.length;
    let line = content.substring(start, end);
    if (line.endsWith('\r')) line = line.slice(0, -1);
    return line;
}

function getLineNumber(content, currentLine, lastIndex, currentIndex) {
    let line = currentLine;
    for (let i = lastIndex; i < currentIndex; i++) {
        if (content[i] === '\n') {
            line++;
        }
    }
    return line;
}

function performExtraction(fileContent, searchPatternStr, parsePatternStr) {
    const results = [];

    try {
        const searchRegex = new RegExp(searchPatternStr, 'gm');
        const parseRegex = new RegExp(parsePatternStr);

        let match;
        let currentLine = 1;
        let lastPosition = 0;

        while ((match = searchRegex.exec(fileContent)) !== null) {
            currentLine = getLineNumber(fileContent, currentLine, lastPosition, match.index);
            lastPosition = match.index;

            const line = getLineContent(fileContent, match.index);
            const parsed = parseRegex.exec(line);

            if (parsed) {
                results.push({
                    variable: parsed[1] || "",
                    folderName: parsed[2] || "",
                    line: line,
                    lineNumber: currentLine
                });
            }

            if (match.index === searchRegex.lastIndex) {
                searchRegex.lastIndex++;
            }
        }
    } catch (e) {
        console.error("Regex Parsing Error", e);
    }

    return results;
}

function runInteractiveExtractor() {
    const code = document.getElementById('code-input').value;

    const importSearch = document.getElementById('import-search').value;
    const importParse = document.getElementById('import-parse').value;

    const consumptionSearch = document.getElementById('consumption-search').value;
    const consumptionParse = document.getElementById('consumption-parse').value;

    const importLines = performExtraction(code, importSearch, importParse);
    const useLines = performExtraction(code, consumptionSearch, consumptionParse);

    const resultObject = {
        importLines,
        useLines
    };

    // Render raw JSON
    document.getElementById('raw-json-box').innerText = JSON.stringify(resultObject, null, 2);

    // Render Visual List for Imports
    const importListDiv = document.getElementById('import-lines-list');
    document.getElementById('import-count').innerText = `${importLines.length} match${importLines.length === 1 ? '' : 'es'}`;
    importListDiv.innerHTML = '';
    if (importLines.length === 0) {
        importListDiv.innerHTML = '<div class="no-matches-placeholder">No imports matched.</div>';
    } else {
        importLines.forEach(item => {
            importListDiv.innerHTML += `
                  <div class="match-item-card">
                     <div class="match-header">
                        <span class="match-variable" title="Variable Name">${item.variable || '<i>none</i>'}</span>
                        <span class="match-folder" title="Folder/Module Path">${item.folderName || '<i>none</i>'}</span>
                     </div>
                     <div class="match-line" title="${item.line}">${escapeHtml(item.line)}</div>
                     <div class="match-num">Line ${item.lineNumber}</div>
                  </div>
               `;
        });
    }

    // Render Visual List for Consumption
    const consumptionListDiv = document.getElementById('consumption-lines-list');
    document.getElementById('consumption-count').innerText = `${useLines.length} match${useLines.length === 1 ? '' : 'es'}`;
    consumptionListDiv.innerHTML = '';
    if (useLines.length === 0) {
        consumptionListDiv.innerHTML = '<div class="no-matches-placeholder">No routing routes matched.</div>';
    } else {
        useLines.forEach(item => {
            consumptionListDiv.innerHTML += `
                  <div class="match-item-card">
                     <div class="match-header">
                        <span class="match-variable" style="color: var(--accent-secondary)" title="Variable">${item.variable || '<i>none</i>'}</span>
                        <span class="match-folder" style="color: var(--accent)" title="Endpoint">${item.folderName || '<i>none</i>'}</span>
                     </div>
                     <div class="match-line" title="${item.line}">${escapeHtml(item.line)}</div>
                     <div class="match-num">Line ${item.lineNumber}</div>
                  </div>
               `;
        });
    }
}

function escapeHtml(text) {
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Initial run on window load
window.onload = () => {
    runInteractiveExtractor();
};