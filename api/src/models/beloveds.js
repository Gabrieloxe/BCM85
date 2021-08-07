const mongoose = require('mongoose');
const db = require('../api/config/db.js');


const belovedSchema = new mongoose.Schema({
  name: String,
  date: Date,
});

belovedSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Beloved', belovedSchema);
