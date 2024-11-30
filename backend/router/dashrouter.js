const express = require("express");
const router = express.Router();
const dashcontroller = require("../controller/dashboardControl")

router.route("/")
.get((req,res)=>{
   res.send("hello world")
})

router.route("/watchlist")
.get(dashcontroller.watchlist)

router.route("/product")
.get(dashcontroller.product)

router.route("/holding")
.get(dashcontroller.holding)

module.exports= router;