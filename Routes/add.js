import express from 'express';
import isValid from './isValid.js';
import add from "../controllers/add.js"
const router = express.Router();
router.post('/add', isValid, add);

export default router;
