const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

const middleware = (req, res, next) => {
  let { title, author, genre } = req.body;
  if (typeof title !== "string") {
    return res.status(400).send("Title must be of type string");
  }
  if (typeof author !== "string") {
    return res.status(400).send("Author must be of type string");
  }
  if (typeof genre !== "string") {
    return res.status(400).send("Genre must be of type string");
  }
  next();
};

let books = [
  {
    id: 0,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic",
  },
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
  },
  { id: 2, title: "1984", author: "George Orwell", genre: "Dystopian" },
  {
    id: 3,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    genre: "Literary Fiction",
  },
];

// 1
app.get("/books", (req, res) => {
  res.json(books);
});

// 2
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = books.filter((book) => book.id == id);
  res.status(200).send(book);
});

// 3
app.post("/books", middleware, (req, res) => {
  const id = Math.floor(Math.random() * (1000 - books.length) + books.length);
  const { title, author, genre } = req.body;
  const newbook = {
    id,
    title,
    author,
    genre,
  };
  books = [...books, newbook];
  res.status(200).send(books);
});

// 4
app.put("/books/:id", middleware, (req, res) => {
  const { id } = req.params;
  const { title, author, genre } = req.body;
  const index = books.findIndex((book) => book.id == id);
  if (index !== -1) {
    books[index].title = title;
    books[index].author = author;
    books[index].genre = genre;
    res.send(books);
  } else {
    res.status(404).send("Book not found");
  }
});

// 5
app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = books.findIndex((book) => book.id == id);
  if (index !== -1) {
    books.splice(index, 1);
    res.status(200).send(books);
  } else {
    res.status(404).send("Book not found");
  }
});

app.listen(PORT, () => {
  console.log("Server is running at PORT 3000");
});
