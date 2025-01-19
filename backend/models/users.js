const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const Schema = mongoose.Schema

const userschema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
})

userschema.pre("save",async function () {
    this.password = await bcrypt.hash(this.password, 12)
})

module.exports = mongoose.model("User",userschema)