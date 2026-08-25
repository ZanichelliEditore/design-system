/**
 * The `/react` output is compiled as ESM (see tsconfig.react.json), but the repo's root
 * package.json has no "type" field (it stays CommonJS by default for the main dist/ output).
 * This nested package.json scopes `"type": "module"` to the react/ directory only, so Node
 * and bundlers treat its .js files as ESM without affecting module resolution elsewhere.
 */

const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname, "..", "..", "react", "package.json"), JSON.stringify({type: "module"}, null, 2) + "\n");
