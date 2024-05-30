const { Schema, model } = require("mongoose");

const songSchema = new Schema({
  title: String,
  description: String,
  creator: String
});

const songModel = model("Song", songSchema);

module.exports = songModel;
