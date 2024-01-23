import express from "express";
const route = express.Router();
import isValid from "./isValid.js";
route.get("/auth", isValid, (req, res) => {
  res.status(200).json({
    firstName: req.decodedToken.given_name,
    lastName: req.decodedToken.family_name,
  });
});

export default route;
