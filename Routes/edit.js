import express from "express";
import isValid from "./isValid.js";
import edit from "../controllers/edit.js";
const route = express.Router();

route.patch("/edit", isValid, edit);

export default route;
