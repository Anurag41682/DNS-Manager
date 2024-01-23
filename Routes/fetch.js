import express from "express";
import isValid from "./isValid.js";
import fetch from "../controllers/fetch.js";
const router = express.Router();

router.get("/fetch", isValid, fetch);
export default router;
