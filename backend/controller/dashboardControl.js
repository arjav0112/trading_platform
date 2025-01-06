const Watchlist = require("../models/watchlist")
const Holding = require("../models/holdings")
const Order = require("../models/orders")
const Exorder = require("../models/ExecutedOrder")
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
module.exports.newOrder = async (req,res) =>{
    // console.log("hello")
    // console.log(req.body)
    
    let order = new Order({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode})
    order.save()
    // console.log(order)
    if(order.mode === "BUY"){
        res.send(true)
    }else{
        res.send(false)
    }

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

module.exports.newholdings = async (req,res)=>{
    let newlist;
    // console.log(data);
    for(let val in data){

        newlist = new Holding({name: data[val].name,qty: data[val].qty, avg : data[val].avg,price : data[val].price,net : data[val].net , day : data[val].day})
        await newlist.save()
    }
    console.log("data saved")
    res.send(true)
}

module.exports.resolved = async (req,res)=>{
    
    // console.log(req.body)
    let completedOrder = new Exorder({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode,status : "completed"})
    await completedOrder.save()
    let neworder = new Holding({name : req.body.name , qty : req.body.qty , avg : req.body.price , price : req.body.price ,net : "+10.0%",day : "-10.0%"  })
    await neworder.save()
    res.send(true) 
    
}

module.exports.cancelled = async (req,res)=>{
    let cancelledOrder = new Exorder({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode})
    await cancelledOrder.save()
    res.send(true)
}

module.exports.rejected = async (req,res)=>{
    let rejectedOrder = new Exorder({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode})
    await rejectedOrder.save()
    res.send(true)
}

module.exports.orders = async (req,res)=>{
    let neworders = await Order.find({})
    res.send(neworders)
}

module.exports.exorders = async (req,res)=>{
    let newexorders = await Exorder.find({})
    res.send(newexorders)
}

module.exports.position = async (req,res)=>{
    res.send("position")
}

module.exports.holding = async (req,res)=>{
    let newholding = await Holding.find({})
    res.send(newholding)
}