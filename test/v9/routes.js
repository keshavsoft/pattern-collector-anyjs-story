import express from 'express';

import { router as routerFromFold1 } from './Fold1/end-points.js';
import { router as routerFromFold2 } from './Fold2/end-points.js';

const router = express.Router();

router.use('/table1', routerFromFold1);
router.use("/Fold2", routerFromFold2);

export { router };
