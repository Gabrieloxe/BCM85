const mongoose = require('mongoose');
const { mongoURI } = require('./default');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    console.log('MongoDB Connection Failed...');
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
