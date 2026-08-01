export default {
    files: [
        "fromAppJs"
    ],
    fileStory: {
        fromAppJs: {
            importNpmRegex: {
                searchRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm
            },
            importRegex: {
                parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
                searchRegex: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm
            },
            consumptionRegex: {
                parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
                searchRegex: /^[ \t]*router\.use\b.*?;/gm
            },
            exportRegex: {
                searchRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
            }
        }
    },
    searchRules: {
        fromAppJs: {
            importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
            importRegex1: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm,
            importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,
            consumptionRegex: /^[ \t]*app\.use\b.*?;/gm,
            exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
        },
        fromRoutesJs: {
            importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
            importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,
            consumptionRegex: /^[ \t]*router\.use\b.*?;/gm,
            exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
        }
    },
    parseRules: {
        fromAppJs: {
            importNpmRegex: {
                nParts: 2,
                parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
                template: "import {0} from '{1}';"
            },
            importRegex: {
                nParts: 2,
                parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
                reverseTemplate: `import { router as {0} } from './{1}/routes.js';`
            },
            consumptionRegex: {
                nParts: 2,
                parseRegex: /app\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
                reverseTemplate: `app.use("/{0}", {1});`
            },
            exportRegex: ""
        },
        fromRoutesJs: {
            importNpmRegex: {
                nParts: 2,
                parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
                template: "import {0} from '{1}';"
            },
            importRegex: {
                nParts: 2,
                parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
                reverseTemplate: `import { router as {0} } from './{1}/routes.js';`
            },
            consumptionRegex: {
                nParts: 2,
                parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
                reverseTemplate: `router.use("/{0}", {1});`
            },
            exportRegex: ""
        }
    },
    variablesConnection: {
        fromRoutesJs: "routerFrom",
        fromAppJs: "routerFrom"
    },
    reverseTemplates: {
        fromRoutesJs: {
            importRegex: `import { router as {0} } from './{1}/routes.js';`,
            consumptionRegex: `router.use("/{0}", {1});`
        }
    },
    fromEndPointsJs: {
        importNpmRegex: {
            searchRegex: /^[ \t]*import\b.*from\s+['"](?:(?!\.{1,2}\/|\/)[^'"]+)['"]\s*;?/gm
        },
        importRegex: {
            parseRegex: /import\s+(\w+)\s+from\s*['"]\.\/([^/]+)\/controller\.js['"]/,
            searchRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm
        },
        consumptionRegex: {
            parseRegex1: /router\.(get|post|put|delete|patch)\s*\(\s*['"]([^'"]+)['"].*?\b(\w+)\s*\(/,
            parseRegex: /router\.\w+\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/,
            parseRegex2: /router\.\w+\(\s*['"]([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/,
            parseRegex3: /router\.(get|post|put|delete|patch)\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/,
            searchRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm
        },
        exportRegex: {
            searchRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
        }
    },
    fromRoutesJs: {
        parseRules: {
            importNpmRegex: {
            },
            importRegex: {
                parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
                nParts: 2
            },
            consumptionRegex: {
                parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
                nParts: 2
            },
            exportRegex: {
            }
        },
        searchRules: {
            importNpmRegex: {
                searchRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm
            },
            importRegex: {
                searchRegex: /^[ \t]*import\s*\{[\s\S]*?\brouter\s+as\s+(\w+)[\s\S]*?\}\s*from\s*['"]\.\/([^'"]+)\/routes\.js['"]\s*;/gm
            },
            consumptionRegex: {
                searchRegex: /^[ \t]*router\.use\b.*?;/gm
            },
            exportRegex: {
                searchRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
            }
        }
    },
    fromAppJs: {
        importNpmRegex: {
            searchRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm
        },
        importRegex: {
            parseRegex: /import\s*\{[^}]*router\s+as\s+(\w+)[^}]*\}\s*from\s*['"]\.\/([^/]+)\/.*['"]/,
            searchRegex: /^[ \t]*import\b.*from\s+['"]\.[^'"]*['"];/gm
        },
        consumptionRegex: {
            parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
            searchRegex: /^[ \t]*router\.use\b.*?;/gm
        },
        exportRegex: {
            searchRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
        }
    }
};
