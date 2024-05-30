const { Schema, model } = require("mongoose");

const todoSchema = new Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todoModel = model("Todo", todoSchema);

module.exports = todoModel;
