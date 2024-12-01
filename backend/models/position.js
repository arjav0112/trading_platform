const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const positionSchema  = new Schema({
    product: {
        type: String,
        required: true,
    },
    name : {
        type: String,
        required: true,
    },
    qty : {
        type: Number,
        required: true,
    },
    avg : {
        type: Number,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    net : {
        type: String,
        required: true,
    },
    day : {
        type: Boolean,
        required: true,
    },
    isLoss : {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("Position",positionSchema);
