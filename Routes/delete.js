import express from "express";
import isValid from "./isValid.js";
import del from "../controllers/delete.js";
const router = express.Router();

router.delete("/delete/:id", isValid, del);

export default router;
