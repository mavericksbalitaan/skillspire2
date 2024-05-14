const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

const middleware = (req, res, next) => {
  let { title, songs } = req.body;
  if (typeof title !== "string") {
    return res.status(400).send("Title must be of type string");
  }
  if (typeof songs !== "object") {
    return res.status(400).send("Songs must be of type object");
  }
  next();
};

const middleware2 = (req, res, next) => {
  let { title } = req.body;
  if (typeof title !== "string") {
    return res.status(400).send("Title must be of type string");
  }
  next();
};

const middleware3 = (req, res, next) => {
  let { songId, title, description, creator } = req.body;
  if (typeof songId !== "number") {
    return res.status(400).send("SongId must be of type number");
  }
  if (typeof title !== "string") {
    return res.status(400).send("Title must be of type string");
  }
  if (typeof description !== "string") {
    return res.status(400).send("Description must be of type string");
  }
  if (typeof creator !== "string") {
    return res.status(400).send("Creator must be of type string");
  }
  next();
};

let playlists = [
  {
    id: 1,
    title: "Chill Vibes",
    songs: [
      {
        songId: 1,
        title: "Sunset Boulevard",
        description: "Relaxing instrumental with a smooth melody",
        creator: "Artist A",
      },
      {
        songId: 2,
        title: "Ocean Waves",
        description: "Calming sounds of the ocean waves",
        creator: "Artist B",
      },
    ],
  },
  {
    id: 2,
    title: "Workout Pump",
    songs: [
      {
        songId: 1,
        title: "Power Surge",
        description: "High-energy track to boost your workout",
        creator: "Artist C",
      },
      {
        songId: 2,
        title: "Adrenaline Rush",
        description: "Energetic beats to keep you moving",
        creator: "Artist D",
      },
    ],
  },
  {
    id: 3,
    title: "Acoustic Melodies",
    songs: [
      {
        songId: 1,
        title: "Fireside Serenade",
        description: "Soothing acoustic guitar by a crackling fire",
        creator: "Artist E",
      },
      {
        songId: 2,
        title: "Morning Dew",
        description: "Gentle acoustic tunes for a peaceful morning",
        creator: "Artist F",
      },
    ],
  },
  {
    id: 4,
    title: "Late Night Jazz",
    songs: [
      {
        songId: 1,
        title: "Midnight Groove",
        description: "Smooth jazz to unwind in the late hours",
        creator: "Artist G",
      },
      {
        songId: 2,
        title: "Moonlit Serenade",
        description: "Romantic jazz melodies under the moonlight",
        creator: "Artist H",
      },
    ],
  },
  {
    id: 5,
    title: "Epic Soundtracks",
    songs: [
      {
        songId: 1,
        title: "Adventure Awaits",
        description: "Orchestral piece evoking a sense of grandeur",
        creator: "Composer X",
      },
      {
        songId: 2,
        title: "Hero's Journey",
        description: "Epic soundtrack for triumphant moments",
        creator: "Composer Y",
      },
    ],
  },
  {
    id: 6,
    title: "Feel-Good Pop",
    songs: [
      {
        songId: 1,
        title: "Sunshine Anthem",
        description: "Upbeat pop track to lift your spirits",
        creator: "Artist I",
      },
      {
        songId: 2,
        title: "Radiant Vibes",
        description: "Infectious pop tune for a joyful mood",
        creator: "Artist J",
      },
    ],
  },
];

// 1 Retrieve a list of all playlists
app.get("/playlists", (req, res) => {
  res.json(playlists);
});

// 2 Retrieve details of a specific playlist by ID
app.get("/playlists/:id", (req, res) => {
  const { id } = req.params;

  const playlist = playlists.filter((playlist) => playlist.id == id);
  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }

  res.status(200).send(playlist);
});

// 3 Add a new playlist to the collection
app.post("/playlists", middleware, (req, res) => {
  const id = Math.floor(
    Math.random() * (1000 - playlists.length) + playlists.length,
  );

  const { title, songs } = req.body;
  const newplaylist = {
    id,
    title,
    songs,
  };
  playlists = [...playlists, newplaylist];
  res
    .status(201)
    .json({ message: "Playlist added to the collection", playlists });
});

// 4 Update details of a playlist by ID
app.put("/playlists/:id", middleware2, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const index = playlists.findIndex((playlist) => playlist.id == id);
  if (index !== -1) {
    playlists[index].title = title;
    res.status(200).send(playlists);
  } else {
    res.status(404).send("Playlist not found");
  }
});

// 5 Delete a playlist by ID
app.delete("/playlists/:id", (req, res) => {
  const { id } = req.params;

  const index = playlists.findIndex((playlist) => playlist.id == id);
  if (index !== -1) {
    playlists.splice(index, 1);
    res.status(200).send(playlists);
  } else {
    res.status(404).send("Playlist not found");
  }
});

// 6 Retrieve a list of songs in a specific playlist
app.get("/playlists/:id/songs", (req, res) => {
  const { id } = req.params;

  const playlist = playlists.find((playlist) => playlist.id == id);
  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }

  res.status(200).send(playlist.songs);
});

// 7 Add a new song to a playlist
app.post("/playlists/:id/songs", middleware3, (req, res) => {
  const { id } = req.params;
  const { songId, title, description, creator } = req.body;

  const playlist = playlists.find((playlist) => playlist.id == id);
  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }
  const newsong = { songId, title, description, creator };
  playlist.songs.push(newsong);

  res.status(201).json({ message: "Song added to the playlist", playlist });
});

// 8 Remove a song from a playlist
app.delete("/playlists/:id/songs/:songId", (req, res) => {
  const { id, songId } = req.params;

  const playlist = playlists.find((playlist) => playlist.id == id);
  if (!playlist) {
    return res.status(404).json({ message: "Playlist not found" });
  }
  playlist.songs = playlist.songs.filter((song) => song.songId != songId);

  res.status(200).send(playlist);
});

app.listen(PORT, () => {
  console.log("Server is running at PORT 3000");
});
