const mongoose = require('mongoose');

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    lyrics: {
      type: String,
      required: true,
    },
    albumArt: String
  },
  { timestamps: true },
);

module.exports = mongoose.model('Song', songSchema);
