const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const watchlistSchema  = new Schema({
    name : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    percent : {
        type: String,
        required: true,
    },
    isDown : {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("Watchlist",watchlistSchema);
