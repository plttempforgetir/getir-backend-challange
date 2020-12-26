require("dotenv").config();

const config = {
  port: process.env.PORT,
  db: {
    mongo_url: process.env.MONGODB_URI
  }
};

module.exports = config;
