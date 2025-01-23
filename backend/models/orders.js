const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema  = new Schema({
    name : {
        type: String,
        required: true,
    },
    qty : {
        type: Number,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    mode : {
        type: String,
        required: true,
    },
    owner : {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Order",orderSchema);
