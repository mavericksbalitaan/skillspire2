const { Schema, model } = require("mongoose");

const playlistSchema = new Schema({
  title: String,
  songs: Object,
});

const playlistModel = model("Playlist", playlistSchema);

module.exports = playlistModel;
