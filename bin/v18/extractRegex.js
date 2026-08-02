export default {
    files: [
        "fromAppJs",
        "fromRoutesJs",
        "fromRoutesJsEnd"
    ],
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
        },
        fromRoutesJsEnd: {
            importNpmRegex: /^[ \t]*import\b.*from\s+['"](?!\.{1,2}\/|\/)[^'"]+['"];/gm,
            importRegex: /^[ \t]*import\s*\{\s*router\s+as\s+\w+\s*\}\s*from\s*['"]\.\/[^'"]+\/end-points\.js['"]\s*;?/gm,
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
        }
    },
    variablesConnection: {
        fromRoutesJs: "routerFrom",
        fromAppJs: "routerFrom",
        fromRoutesJsEnd: "routerFrom",
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
        }
    }
};
