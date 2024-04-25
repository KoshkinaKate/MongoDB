const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({ 
    title: String,
    body: String
})

const Note = mongoose.model("Note", noteSchema) //note itself and what should follow -directions above

module.exports = Note 
