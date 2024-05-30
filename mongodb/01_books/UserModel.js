const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: String,
  author: String,
  genre: String,
});

const bookModel = model("Book", bookSchema);

module.exports = bookModel;
