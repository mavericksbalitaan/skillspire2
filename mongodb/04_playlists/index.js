const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const Playlist = require("./PlaylistModel");
const Song = require("./SongModel");

const PORT = 3000;

const middleware = (req, res, next) => {
  const { title, songs } = req.body;
  if (!title || !songs) {
    return res.status(400).json({
      error: "Missing required properties: title or songs",
    });
  }

  next();
};

const middleware2 = (req, res, next) => {
  const { title, description, creator } = req.body;
  if (!title || !description || !creator) {
    return res.status(400).json({
      error: "Missing required properties: title, description or creator",
    });
  }

  next();
};

// retrieve a list of playlists
app.get("/playlists", async (req, res) => {
  const playlists = await Playlist.find();

  res.status(200).send(playlists);
});

// retrieve details of a specific playlist by ID
app.get("/playlists/:id", async (req, res) => {
  const { id } = req.params;
  const playlist = await Playlist.find({
    _id: new mongoose.Types.ObjectId(id),
  });

  res.status(200).send(playlist);
});

// add a new playlist to the collection
app.post("/playlists", middleware, async (req, res) => {
  const { title, songs } = req.body;
  const newplaylist = await Playlist.create({
    title,
    songs,
  });

  res.status(200).send(newplaylist);
});

// update details of a playlist by ID
app.put("/playlists/:id", middleware, async (req, res) => {
  const { id } = req.params;
  const { title, songs } = req.body;
  const updatedplaylist = await Playlist.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    {
      title,
      songs,
    },
  );

  res.status(200).send(updatedplaylist);
});

// delete a playlist by ID
app.delete("/playlists/:id", async (req, res) => {
  const { id } = req.params;
  const deletedplaylist = await Playlist.findByIdAndDelete({
    _id: new mongoose.Types.ObjectId(id),
  });

  res.status(200).send(deletedplaylist);
});

// Retrieve a list of songs in a specific playlist
app.get("/playlists/:id/songs", async (req, res) => {
  const { id } = req.params;

  const playlist = await Playlist.findById({
    _id: new mongoose.Types.ObjectId(id),
  });
  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }

  res.status(200).send(playlist.songs);
});

// Add a new song to a playlist
app.post("/playlists/:id/songs", middleware2, async (req, res) => {
  const { id } = req.params;
  const { songId, title, description, creator } = req.body;
  let newsongs = [];
  newsongs.push({ songId, title, description, creator });

  const updatedplaylist = await Playlist.findById({
    _id: new mongoose.Types.ObjectId(id),
  });

  if (!updatedplaylist) {
    return res.status(404).json({ message: "Playlist not found" });
  }

  newsongs.push(...updatedplaylist.songs);
  updatedplaylist.songs = newsongs;

  res
    .status(201)
    .json({ message: "Song added to the playlist", updatedplaylist });
});

// Remove a song from a playlist
app.delete("/playlists/:id/songs/:songId", async (req, res) => {
  const { id, songId } = req.params;

  const playlist = await Playlist.findById({
    _id: new mongoose.Types.ObjectId(id),
  });

  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }
  playlist.songs = playlist.songs.filter((song) => song.songId != songId);

  res.status(200).send(playlist);
});

app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});

mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("Connected to DB!");
});
