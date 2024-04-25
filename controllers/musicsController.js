const Music = require ("../models/musics");

const fetchAllMusics = async (req, res) => {
    // 1. Get all Notes from DB
    // 2. Send the notes back as a response
    const musics = await Music.find({});
    // --------------------------------(1)
    res.json({ musics: musics });
    // --------------------------------(2)
  };
  
  const fetchMusic = async (req, res) => {
    // 1. Get id off the url
    // 2. Find the note assoc. w/ ID
    // 3.Send response with that note as the payload
  
    const musicId = req.params.id;
    // --------------------------------(1)
    const music = await Music.findById(musicId);
    // --------------------------------(2)
    res.json({ music: music });
    // --------------------------------(3)
  };
  
  const createMusic = async (req, res) => {
    // 1. Get data from req.body
    // 2.Create note
    // 3. Respond with new copy of Note
    console.log(`BODY: ${req.body}`);
    const name = req.body.name
    const type = req.body.type
    const year = req.body.year
    // const {title,body} = req.body
    // --------------------------------(1)
    const music = await Music.create({
      name: name,
      type: type,
      year: year
    });
    // --------------------------------(2)
    res.json({ music: music });
    // --------------------------------(3)
  };
  
  const updatedMusic = async (req, res) => {
    // 1. Get id off the url
    // 2. Get the data off the id
    // 3. Find and Update Note
    // 4. Retrieve updatedNote and send it as a response
    const musicId = req.params.id;
    // --------------------------------(1)
    const { name, type, year } = req.body;
    // --------------------------------(2)
    const music = await Music.findByIdAndUpdate(musicId, {
        name: name,
        type: type,
        year: year
    });
    // --------------------------------(2)
    const updatedMusic = await Music.findById(musicId);
    res.json({ music: updatedMusic });
  };
  
  const deleteMusic = async(req, res) => {
      // 1. Get the id off the url
      // 2. Delete the record
      // 3. Send Response
      const musicId = req.params.id
    // --------------------------------(1)
    await Music.findByIdAndDelete(musicId)
      // --------------------------------(2)
    res.json({success: "Record has been deleted successfully"})
  }
  
  module.exports = {
      fetchAllMusics,
      fetchMusic,
      createMusic,
      updatedMusic,
      deleteMusic
  };