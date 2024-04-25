const mongoose = require("mongoose")

const musicSchema = new mongoose.Schema({
    name: String,
    type: String,
    year: Number
})

const Music = mongoose.model("Music", musicSchema)

module.exports = Music