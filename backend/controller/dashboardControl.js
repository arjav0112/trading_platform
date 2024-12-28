const Watchlist = require("../models/watchlist")
const Holding = require("../models/holdings")
const data = require("../data/data")

module.exports.watchlist = async (req,res)=>{
    // let newlist;
    // console.log(data);
    // for(let val in data){

    //     newlist = await new Watchlist({name: data[val].name,price: data[val].price, percent : data[val].percent, isDown: data[val].isDown})
    //     newlist.save()
    // }
    let newdata = await Watchlist.find({})
    res.send(newdata)
}

module.exports.addholding = async (req,res)=>{
    console.log("hello_world")
    console.log(req.body)

    res.send(true)
}

module.exports.fetchdata = async (req,res)=>{
    // console.log(req.body)
    // console.log("abc")
    let stock_name = req.body.name
    let basedata = await Watchlist.find({name : stock_name})
    // console.log(basedata) 
    // console.log(basedata[0].price)
    res.send(basedata[0])
}

module.exports.position = async (req,res)=>{
    res.send("position")
}

module.exports.holding = async (req,res)=>{
    res.send("holding")
}