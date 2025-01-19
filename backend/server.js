const express = require("express")
const app = express()
const dashrouter = require("./router/dashrouter")
const authrouter = require("./router/authrouter")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const mongoose = require('mongoose');
const ExpressError = require("./utils/ExpressError")

app.use(express.urlencoded({extended:true}));
app.use(express.json())

main()
.then(()=>{console.log("connection spoted")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/trade');
}

app.use(
cors({
  origin: ["http://localhost:3001","http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}))

// app.use((req, res, next) => {
//   // res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

app.use("/dashboard",dashrouter);
app.use("/",authrouter)

app.get("/",(req,res)=>{
    res.send("hello")
})

app.use(cookieParser());


// app.all("*",(req,res,next)=>{
//   next(new ExpressError(404,"Page Not Found!"));
// })

// //adding error handing-
// app.use((err,req,res,next)=>{
//   let {statusCode=500,message="Something went wrong"} = err;
//   err.statusCode = statusCode;
//   res.send({err})
//   // res.status(statusCode).send({err});
// });

app.listen("8080",()=>{
    console.log("server is listening")
})