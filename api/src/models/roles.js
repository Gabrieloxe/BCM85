const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
    viewAll: Boolean,
    description: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model('Role', roleSchema);
