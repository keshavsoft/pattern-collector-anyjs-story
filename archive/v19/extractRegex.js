export default {
    files: [
        "fromAppJs",
        "fromRoutesJs",
        "fromRoutesJsEnd"
    ],
    searchRules: {
        fromAppJs1: {
            importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
            importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,
            consumptionRegex: /^[ \t]*app\.use\b.*?;/gm,
            exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm,
            variableDeclareHere: /setupRoutes\s*\(\s*app\s*\)\s*;[\s\r\n]*const\s*\{\s*port\s*\}\s*=\s*startServer\s*\(\s*app\s*\)\s*;/m
        },
        fromAppJs: {
            // import express from "express";
            importNpmRegex:
                /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"]\s*;?/gm,

            // import { router as routerFromapi } from "./api/routes.js";
            importRegex:
                /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,

            // app.use('/api', routerFromapi);
            consumptionRegex:
                /^[ \t]*app\.use\s*\([\s\S]*?\)\s*;?/gm,

            // export { router };
            exportRegex:
                /^[ \t]*export\s*\{\s*(\w+)\s*\}\s*;?/gm,

            // setupRoutes(app);
            // const { port } = startServer(app);
            variablesDeclareHere1:
                /setupRoutes\s*\(\s*app\s*\)\s*;[\s\S]*?const\s*\{\s*port\s*\}\s*=\s*startServer\s*\(\s*app\s*\)\s*;/gm,
            variablesDeclareHere: /^[ \t]*const\b[\s\S]*?;/gm
        },
        fromRoutesJs: {
            importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
            importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/routes\.js['"]\s*;?/gm,
            consumptionRegex: /^[ \t]*router\.use\b.*?;/gm,
            exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
        },
        fromRoutesJsEnd: {
            importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
            importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/end-points\.js['"]\s*;?/gm,
            consumptionRegex: /^[ \t]*router\.use\b.*?;/gm,
            exportRegex: /export\s*\{\s*(\w+)\s*\}\s*;?/gm
        },
        fromEndPointsJs: {
            importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
            importRegex: /^[ \t]*import\b.*from\s+['"]\.\/[^'"]+\/controller\.js['"]\s*;?/gm,
            consumptionRegex: /^[ \t]*router\.(?:get|post|put|delete|patch)\b.*;?/gm,
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
        },
        fromRoutesJsEnd: {
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
        },
        fromEndPointsJs: {
            importNpmRegex: {
                nParts: 2,
                parseRegex: /^import\s+(\w+)\s+from\s+['"]([^'"]+)['"];?$/,
                template: "import {0} from '{1}';"
            },
            importRegex: {
                nParts: 2,
                parseRegex: /import\s+(\w+)\s+from\s*['"]\.\/([^/]+)\/controller\.js['"]/
            },
            consumptionRegex: {
                nParts: 2,
                parseRegex: /router\.\w+\(\s*['"]\/?([^'"]+)['"][\s\S]*?\b(funcFrom\w+)\s*\(/
            },
            exportRegex: ""
        }
    },
    variablesConnection: {
        fromRoutesJs: "routerFrom",
        fromAppJs: "routerFrom",
        fromRoutesJsEnd: "routerFrom",
        fromEndPointsJs: "funcFrom",
    },
    reverseTemplates: {
        fromRoutesJs: {
            importRegex: `import { router as {0} } from './{1}/routes.js';`,
            consumptionRegex: `router.use("/{0}", {1});`
        },
        fromAppJs: {
            importRegex: `import { router as {0} } from './{1}/routes.js';`,
            consumptionRegex: `app.use("/{0}", {1});`
        },
        fromRoutesJsEnd: {
            importRegex: `import { router as {0} } from './{1}/end-points.js';`,
            consumptionRegex: `router.use("/{0}", {1});`
        },
        fromEndPointsJs: {
            importNpmRegex: "import {0} from '{1}';",
            importRegex: `import {0} from './{1}/controller.js';`,
            consumptionRegex: `router.get('/{0}', (req, res) => {1}({ req, res, inTablePath: tablePath }));`
        }
    },
    toInsertIndex: {
        import: [
            "importLines.firstLineIndex",
            "importLinesFromNpm.lastLineIndex",
            "firstLineIndex"
        ],
        consumption: [
            "useLines.first",
            "variablesDeclareHereLines.lastLineIndex",
            "lastLineIndex"
        ]
    }
};