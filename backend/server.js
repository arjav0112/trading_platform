const express = require("express")
const app = express()
const dashrouter = require("./router/dashrouter")
const mongoose = require('mongoose');

app.use(express.urlencoded({extended:true}));


main()
.then(()=>{console.log("connection spoted")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/trade');
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/dashboard",dashrouter);

app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen("8080",()=>{
    console.log("server is listening")
})