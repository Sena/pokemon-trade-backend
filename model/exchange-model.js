const mongoose = require("mongoose")

const Schema = mongoose.Schema

exports.ExchangeSchema = new Schema({
    player1: {
        type: Array
    },
    player2: {
        type: Array
    },
    player1Total: {
        type: Number
    },
    player2Total: {
        type: Number
    },
    textExchange: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    },
})