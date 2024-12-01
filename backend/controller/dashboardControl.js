const Watchlist = require("../models/watchlist")
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

module.exports.position = async (req,res)=>{
    res.send("position")
}

module.exports.holding = async (req,res)=>{
    res.send("holding")
}