const mongoose = require('mongoose')
const Schema = mongoose.Schema
let Solution = new Schema({
    first_digit: { type: String },
    second_digit: { type: String },
    third_digit: { type: String },
    fourth_digit: { type: String },
    text: { type: String },
})

module.exports = mongoose.model("Solution", Solution)