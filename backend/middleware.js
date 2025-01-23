const User = require("./models/users");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  
  if (!token) {
    return res.json({ status: false })
  }
//   console.log(token)

  jwt.verify(token, process.env.TOKEN, async (err, data) => {
    if (err) {
        console.log(token)
        console.log(err)
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}
