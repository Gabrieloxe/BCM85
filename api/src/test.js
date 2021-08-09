const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { getSong } = require('genius-lyrics-api');

const options = {
  apiKey: process.env.GENIUS_API_KEY,
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  optimizeQuery: true
};

getSong(options).then((song) => console.log('song', JSON.stringify(song, null, 4)));
