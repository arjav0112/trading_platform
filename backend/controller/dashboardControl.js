const Watchlist = require("../models/watchlist")
const Holding = require("../models/holdings")
const Order = require("../models/orders")
const Exorder = require("../models/ExecutedOrder")
const initdata = require("../data/init")
const Position = require("../models/position")
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.watchlist = async (req,res)=>{
    // let newlist;
    // console.log(initdata);
    // for(let val in initdata){

    //     newlist = await new Watchlist({name: initdata[val].name,price: initdata[val].price, percent : initdata[val].percent, isDown: initdata[val].isDown})
    //     newlist.save()
    // }
    let newdata = await Watchlist.find({})
    res.send(newdata)
    // res.send("data saved")
}

module.exports.newOrder = async (req,res) =>{
    // console.log("hello")
    // console.log(req.body)
    const token = req.body.token
    let ownerid = ""
    jwt.verify(token, process.env.TOKEN, async (err, data) => {
      if (err) {
          res.send(true)
      } else {
        ownerid = data.id
      }
    })
    let order = new Order({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode})
    if(ownerid){
        order.owner = ownerid
    }
    order.save()
    if(req.body.mode === "SELL"){
        let checkOrder = await Holding.find({name : req.body.name,qty : {$gte: req.body.qty},owner: ownerid})
        // console.log(checkOrder)
        
        if(checkOrder.length > 0){
            let minindex = 0; 
            for(let i=0; i<checkOrder.length; i++){
                if(checkOrder[i].price < checkOrder[minindex].price){
                    minindex = i
                }
            }
            
            res.send(checkOrder[minindex])

        } else{
            // console.log("HI")
            res.send(false)
        }
    }
    else{
       res.send(true)
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

// module.exports.newholdings = async (req,res)=>{
//     let newlist;
//     // console.log(data);
//     for(let val in data){

//         newlist = new Holding({name: data[val].name,qty: data[val].qty, avg : data[val].avg,price : data[val].price,net : data[val].net , day : data[val].day})
//         await newlist.save()
//     }
//     // console.log("data saved")
//     res.send(true)
// }

module.exports.resolved = async (req,res)=>{
    
    // console.log(req.body)
    const token = req.body.token
    // console.log(token)
    let ownerid = "" 
    jwt.verify(token, process.env.TOKEN, async (err, data) => {
      if (err) {
          
        //   let deleteOrder = await Holding.deleteOne({_id: req.body.id})
        //   console.log("Deleted succesfull")
        console.log(err)
        res.send(true)
      } else {
       ownerid = data.id;
      }
    })
    let completedOrder = new Exorder({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode,status : "completed"})
    completedOrder.owner = ownerid
    await completedOrder.save()
    if(req.body.mode === "BUY"){
        let neworder = new Holding({name : req.body.name , qty : req.body.qty , avg : req.body.price , price : req.body.price ,net : "+10.0%",day : "-10.0%"  })
        neworder.owner = ownerid
        // console.log(neworder)
        await neworder.save()
        res.send(true) 
    } else{
        let deleteOrder = await Holding.deleteOne({_id: req.body.id})
        // console.log(deleteOrder)
        res.send(true)
    }
    
}

module.exports.cancelled = async (req,res)=>{
    let id = req.body._id
    // console.log(req.body)
    const token = req.body.token
    let ownerid = ""
          jwt.verify(token, process.env.TOKEN, async (err, data) => {
            if (err) {   
                console.log(err)
                res.send(false)
            } else {
                ownerid = data.id;
            }
          })
    // console.log(id)
    await Order.deleteOne({_id: id})
    let checkOrder = await Exorder.find({name: req.body.name,qty: req.body.qty, price:  req.body.price ,owner : ownerid})
    
    if(checkOrder.length > 0){
        res.send(true)
    }
    else{
        let cancelledOrder = new Exorder({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode,status: "cancelled"})
        cancelledOrder.owner = ownerid
        await cancelledOrder.save()
        res.send(true)

    }
}

module.exports.rejected = async (req,res)=>{
     const token = req.body.token
    let ownerid = ""
          jwt.verify(token, process.env.TOKEN, async (err, data) => {
            if (err) {   
                res.send(false)
            } else {
                ownerid = data.id;
            }
          })
    let rejectedOrder = new Exorder({name : req.body.name, qty : req.body.qty, price : req.body.price, mode: req.body.mode,status : "rejected"})
    if(ownerid){
        rejectedOrder.owner = ownerid

    }
    await rejectedOrder.save()
    res.send(true)
}

module.exports.orders = async (req,res)=>{
    const token = req.body.token
    let ownerid = ""
          jwt.verify(token, process.env.TOKEN, async (err, data) => {
            if (err) {   
                ownerid = "";
            } else {
                ownerid = data.id;
            }
          })
    let neworders = await Order.find({owner: ownerid})
    res.send(neworders)
}

module.exports.exorders = async (req,res)=>{
    const token = req.body.token
    let ownerid = ""
          jwt.verify(token, process.env.TOKEN, async (err, data) => {
            if (err) {   
                ownerid = ""
            } else {
                ownerid = data.id;
            }
          })
    let newexorders = await Exorder.find({owner : ownerid}).populate("owner")
    res.send(newexorders)
}

module.exports.position = async (req,res)=>{
    const token = req.body.token
    let id = ""
          jwt.verify(token, process.env.TOKEN, async (err, data) => {
            if (err) {   
                res.send(false)
            } else {
             id = data.id;
            }
          })

    let newPosition = await Position.find({owner: id}).populate("owner")
    
    // console.log(newholding)
    res.send(newPosition)

    
}

module.exports.holding = async (req,res)=>{
    // console.log(req.body)
    const token = req.body.token
    let id = ""
          jwt.verify(token, process.env.TOKEN, async (err, data) => {
            if (err) {   
                res.send(false)
            } else {
             id = data.id;
            }
          })

    let newholding = await Holding.find({owner: id}).populate("owner")
    
    // console.log(newholding)
    res.send(newholding)
}

// module.exports.initholding = async (req,res)=>{
//     await Position.deleteMany({});
//     // await List.deleteMany({});
//     initdata.data = initdata.data.map((obj) => ({
//       ...obj,
//       owner: "67922641115fa967c81e8904",
//     }));
//     await Position.insertMany(initdata.data);
//     console.log("data was saved");

// }