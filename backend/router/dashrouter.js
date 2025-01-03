const express = require("express");
const router = express.Router();
const dashcontroller = require("../controller/dashboardControl")

router.route("/")
.get((req,res)=>{
   res.send("hello world")
})

router.route("/watchlist")
.get(dashcontroller.watchlist)

router.route("/position")
.get(dashcontroller.position)

router.route("/holding")
.get(dashcontroller.holding)

router.route("/holding/buy")
.post(dashcontroller.addholding)

router.route("/fetchdata")
.post(dashcontroller.fetchdata)

module.exports= router;