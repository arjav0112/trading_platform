const express = require("express");
const router = express.Router();
const dashcontroller = require("../controller/dashboardControl")
const wrapAsync = require("../utils/wrapAsync.js")

router.route("/")
.get((req,res)=>{
   res.send("hello world")
})

router.route("/watchlist")
.get(wrapAsync(dashcontroller.watchlist))

router.route("/position")
.post(wrapAsync(dashcontroller.position))

router.route("/holding")
.post(wrapAsync(dashcontroller.holding))

router.route("/newOrder")
.post(wrapAsync(dashcontroller.newOrder))

router.route("/holding/buy")
.post(wrapAsync(dashcontroller.addholding))

router.route("/fetchdata")
.post(wrapAsync(dashcontroller.fetchdata))

router.route("/orders")
.post(wrapAsync(dashcontroller.orders))

router.route("/resolved")
.post(wrapAsync(dashcontroller.resolved))

router.route("/cancelled")
.post(wrapAsync(dashcontroller.cancelled))

router.route("/rejected")
.post(wrapAsync(dashcontroller.rejected))

router.route("/exorders")
.post(wrapAsync(dashcontroller.exorders))

//  router.route("/initdata")
//  .post(wrapAsync(dashcontroller.initholding))

module.exports= router;