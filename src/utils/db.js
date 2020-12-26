const mongoose = require("mongoose");
const Promise = require("bluebird");
const config = require("../config");

mongoose.Promise = Promise;

module.exports.connectToDatabase = () => {
  if (mongoose.connection.readyState) {
    return Promise.resolve();
  }

  return mongoose.connect(config.db.mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
};
