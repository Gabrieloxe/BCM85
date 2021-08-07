require('dotenv').config();

module.exports = {
  mongoURI: process.env.MONGOURI,
  jwtSecret: process.env.JWTSECRET,
};
