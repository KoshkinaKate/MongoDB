require("dotenv").config() //allows .env - 1st line

const express = require("express")
const app = express()
const PORT = process.env.PORT || 3002

const connectToDb =  require('./config/connectToDb.js') //Mongoose coonection into the application


const Note = require("./models/notes.js"); 
const Music = require("./models/musics.js"); 
const Musician = require("./models/musicians.js"); 
const notesController = require('./controllers/notesController.js');
const musicsController = require('./controllers/musicsController.js');
const musiciansController = require('./controllers/musiciansController.js');

const cors = require('cors'); //receiving req on cross-origins

//middleware
app.use(express.json())

app.use(cors())
// Express doesnt naturally convert our data to json
app.use(express.urlencoded({ extended: true }));

connectToDb() //calling a function above 


app.get("/", (req, res) => {
    res.send("This is a Landing Page");
  });

//   Data base connections
//-----------------------NOTES

app.get("/notes", notesController.fetchAllNotes);
// -----------------> GET all Notes - [Read]
app.get("/notes/:id", notesController.fetchNote);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/notes", notesController.createNote);
// -----------------> Create a Notes - [Create / POST]
app.put("/notes/:id", notesController.updateNote);
// -----------------> Update a Specific Note - [Update]
app.delete("/notes/:id", notesController.deleteNote);
// -----------------> Delete a Specific Note - [Delete]

// //-----------------------MUSIC
app.get("/musics", musicsController.fetchAllMusics);
// -----------------> GET all Notes - [Read]
app.get("/musics/:id", musicsController.fetchMusic);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/musics", musicsController.createMusic);
// -----------------> Create a Notes - [Create / POST]
app.put("/musics/:id", musicsController.updatedMusic);
// -----------------> Update a Specific Note - [Update]
app.delete("/musics/:id", musicsController.deleteMusic);
// -----------------> Delete a Specific Note - [Delete]


//-----------------------MUSICIANS

app.get("/musicians", musiciansController.fetchAllMusicians);
// -----------------> GET all Notes - [Read]
app.get("/musicians/:id", musiciansController.fetchMusician);
// -----------------> GET a Specific Note by ID - [Read]
app.post("/musicians", musiciansController.createMusician);
// -----------------> Create a Notes - [Create / POST]
app.put("/musicians/:id", musiciansController.updatedMusician);
// -----------------> Update a Specific Note - [Update]
app.delete("/musicians/:id", musiciansController.deleteMusician);
// -----------------> Delete a Specific Note - [Delete]








app.listen(PORT,()=>{
    console.log(`Express Server Listening on port num: ${PORT}`)
});

