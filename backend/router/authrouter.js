const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/authcontroller");
const { userVerification } = require("../middleware");


router.route("/signup")
.post(authcontroller.Signup)

router.route("/login")
.post(authcontroller.Login)

router.route("/logout")
.post(authcontroller.logout)

router.route("/")
.post(authcontroller.userVerification)

module.exports = router