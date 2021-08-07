const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    eventDescription: String,
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    allDay: Boolean,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Event', eventSchema);
