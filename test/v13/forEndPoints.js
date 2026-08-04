import path from 'path';

import { fileURLToPath } from "url";

import bothLines from './bothLines/test.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jsPath = path.join(__dirname, "end-points.js");

const folderNameToInsert = "showAll";
const fileType = "fromEndPointsJs";

bothLines({
    inFolderNameToInsert: folderNameToInsert,
    inFileType: fileType, inJsPath: jsPath
});