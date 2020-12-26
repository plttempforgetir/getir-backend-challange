const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      trim: true
    },
    value: {
      type: String,
      required: true,
      trim: true
    },
    counts: {
      type: Array
    }
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

module.exports = {
  RecordSchema
};
