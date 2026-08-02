import path from 'path';

import { fileURLToPath } from "url";

import bothLines from './bothLines/test.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

const folderNameToInsert = "Fold2";
const fileType = "fromRoutesJsEnd";

bothLines({
    inFolderNameToInsert: folderNameToInsert,
    inFileType: fileType, inJsPath: appJsPath
});