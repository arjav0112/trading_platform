const User = require("../models/users");
const { createdSecretToken } = require("../utils/SecretToken");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username });
    const token = createdSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({ message: "User signed in successfully", success: true,token: token, user });
    
    next();
  } catch (error) {
    console.error(error);
  }
};


module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createdSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });

    //  let token2 = req.headers.cookie
    //  let token3 = token2.split('=')[1]
     res.status(201).json({ message: "User logged in successfully", success: true ,token : token});
    //  console.log(req.headers.cookie)
    //  let token2 = req.headers.cookie
    //  console.log(token2.split('=')[1])
     next()
  } catch (error) {
    console.error(error);
  }
}

module.exports.logout = (req,res,next) => {
  const token = req.body.token
  if(token){
    res.clearCookie("jwt")
    res.json({status : true, message : "Logged out"})
    // console.log("logged out")
    // next()
  }
  else{
    res.json({status : false,message : "Not verified"})
  }

  
}

module.exports.userVerification = (req, res) => {
  // const cookie = req.headers.cookie
  // console.log(req.headers)
  // if (!cookie) {
  //   return res.json({ status: false })
  // }
  // const token = cookie.split('=')[1].split(';')[0]
  // console.log(token)
//   console.log(token)
// console.log(req.body)
const token = req.body.token

  jwt.verify(token, process.env.TOKEN, async (err, data) => {
    if (err) {
        // console.log(token)
        // console.log(err)
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}
