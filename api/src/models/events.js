const mongoose = require('mongoose');
const db = require('../api/config/db.js');

console.log('connecting to', url);

db.connnectDB();

const eventSchema = new mongoose.Schema({
  eventName: String,
  eventDescription:String,
  eventDate:Date,
  date: Date,
});

eventSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Event', eventSchema);
