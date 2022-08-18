const auth = require("express").Router();
const authController = require("../controllers/auth");
const { body } = require("express-validator");

auth.post("/register", authController.register);
auth.post("/login", authController.login);

module.exports = auth;
