const mongoose = require('mongoose');

const belovedSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Beloved', belovedSchema);
