const express = require("express")
const app = express()
const dashrouter = require("./router/dashrouter")

app.use(express.urlencoded({extended:true}));

app.use("/dashboard",dashrouter);

app.get("/",(req,res)=>{
    res.send("pokemon")
})

app.listen("8080",()=>{
    console.log("server is listening")
})