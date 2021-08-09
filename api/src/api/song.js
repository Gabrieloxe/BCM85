const router = require('express').Router();
const Song = require('../models/songs');
const { route } = require('./beloved');

router.get('/', async (req, res) => {
  try {
    const songs = await Song.find({});
    res.send({ status: true, songs });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.post('/', async (req, res) => {
  try {
    if (!req.body) throw new Error('Body cannot be empty!');
    const {
      title, url, artist, lyrics, albumArt
    } = req.body;
    const song = new Song({
      title,
      url,
      artist,
      lyrics,
      albumArt,
    });
    await song.save();
    res.send({ status: true, song });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

route.get('/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id);
    res.send({ status: true, song });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.status(204).send({ status: true, message: 'Event has been deleted' });
  } catch (e) {
    console.log(`Error in ${req.method} route ${req.baseUrl}: ${e.message}`);
    res.status(400).send({ message: e.message, status: false });
  }
});

router.delete('/');

module.exports = router;
