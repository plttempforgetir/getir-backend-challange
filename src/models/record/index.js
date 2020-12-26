const mongoose = require("mongoose");
const { RecordSchema } = require("./model");

mongoose.model("Record", RecordSchema);
module.exports = mongoose.model("Record");
