const express = require("express");
const validateToken = require("../middleware/validateToken");
const router =  express.Router();

const {
    registerUser,
    loginUser,
    CurrentUser
} = require("../controllers/userController");

router.post("/register", registerUser);

router.post("/login", loginUser)

router.get("/current", validateToken,CurrentUser)

module.exports = router;