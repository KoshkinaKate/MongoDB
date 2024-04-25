const Musician = require ("../models/musicians");


const fetchAllMusicians = async (req, res) => {
    // 1. Get all Notes from DB
    // 2. Send the notes back as a response
    const musicians = await Musician.find({});
    // --------------------------------(1)
    res.json({ musicians: musicians });
    // --------------------------------(2)
  };
  
  const fetchMusician = async (req, res) => {
    // 1. Get id off the url
    // 2. Find the note assoc. w/ ID
    // 3.Send response with that note as the payload
  
    const musicianId = req.params.id;
    // --------------------------------(1)
    const musician = await Musician.findById(musicianId);
    // --------------------------------(2)
    res.json({ musician: musician });
    // --------------------------------(3)
  };
  
  const createMusician = async (req, res) => {
    // 1. Get data from req.body
    // 2.Create note
    // 3. Respond with new copy of Note
    console.log(`BODY: ${req.body}`);
    const name = req.body.name
    const age = req.body.age
    const type = req.body.type
    // const {title,body} = req.body
    // --------------------------------(1)
    const musician = await Musician.create({
      name: name,
      age: age,
      type: type,
    });
    // --------------------------------(2)
    res.json({ musician: musician });
    // --------------------------------(3)
  };
  
  const updatedMusician = async (req, res) => {
    // 1. Get id off the url
    // 2. Get the data off the id
    // 3. Find and Update Note
    // 4. Retrieve updatedNote and send it as a response
    const musicianId = req.params.id;
    // --------------------------------(1)
    const { name, age, type } = req.body;
    // --------------------------------(2)
    const musician = await Musician.findByIdAndUpdate(musicianId, {
        name: name,
        age: age,
        type: type,
    });
    // --------------------------------(2)
    const updatedMusician = await Musician.findById(musicianId);
    res.json({ musician: updatedMusician });
  };
  
  const deleteMusician = async(req, res) => {
      // 1. Get the id off the url
      // 2. Delete the record
      // 3. Send Response
      const musicianId = req.params.id
    // --------------------------------(1)
    await Musician.findByIdAndDelete(musicianId)
      // --------------------------------(2)
    res.json({success: "Record has been deleted successfully"})
  }
  
  module.exports = {
      fetchAllMusicians,
      fetchMusician,
      createMusician,
      updatedMusician,
      deleteMusician
  };