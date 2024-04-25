const mongoose = require("mongoose")

const musicianSchema = new mongoose.Schema({
    name: String,
    age : Number,
    type: String
})
const Musician = mongoose.model("Musician", musicianSchema)

module.exports = Musician