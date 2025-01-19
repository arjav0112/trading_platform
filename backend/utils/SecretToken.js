require("dotenv").config();
const jwt = require("jsonwebtoken")

module.exports.createdSecretToken = (id) => {
    return jwt.sign({ id },process.env.TOKEN, {
        expiresIn: 3 * 24 * 60 * 60,
    })
}