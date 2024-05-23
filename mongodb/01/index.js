const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const Book = require("./UserModel");

const PORT = 3000;

const middleware = (req, res, next) => {
  const { title, author, genre } = req.body;
  if (!title || !author || !genre) {
    return res.status(400).json({
      error: "Missing required properties: title, author, or genre",
    });
  }

  next();
};

// retrieve a list of books
app.get("/books", async (req, res) => {
  const books = await Book.find();

  res.status(200).send(books);
});

// retrieve details of a specific book by ID
app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.find({ _id: new mongoose.Types.ObjectId(id) });

  res.status(200).send(book);
});

// add a new book to the collection
app.post("/books", middleware, async (req, res) => {
  const { title, author, genre } = req.body;
  const newbook = await Book.create({
    title,
    author,
    genre,
  });

  res.status(200).send(newbook);
});

// update details of a book by ID
app.put("/books/:id", middleware, async (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  const updatedbook = await Book.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    {
      title,
      author,
      genre,
    },
  );

  res.status(200).send(updatedbook);
});

// delete a book by ID
app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;
  const deletedbook = await Book.findByIdAndDelete({
    _id: new mongoose.Types.ObjectId(id),
  });

  res.status(200).send(deletedbook);
});

app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});

mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("Connected to DB!");
});
