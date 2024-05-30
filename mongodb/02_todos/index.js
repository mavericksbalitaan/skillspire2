
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const Todo = require("./TodoModel");

const PORT = 3000;

const middleware = (req, res, next) => {
  const { title, description, completed } = req.body;
  if (!title || !description || !completed) {
    return res.status(400).json({
      error: "Missing required properties: title, description, or completed",
    });
  }

  next();
};

// retrieve a list of todos
app.get("/todos", async (req, res) => {
  const todos = await Todo.find();

  res.status(200).send(todos);
});

// retrieve details of a specific todo by ID
app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.find({ _id: new mongoose.Types.ObjectId(id) });

  res.status(200).send(todo);
});

// add a new todo to the list
app.post("/todos", middleware, async (req, res) => {
  const { title, description, completed } = req.body;
  const newtodo = await Todo.create({
    title,
    description,
    completed,
  });

  res.status(200).send(newtodo);
});

// update details of a todo by ID
app.put("/todos/:id", middleware, async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const updatedtodo = await Todo.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    {
      title,
      description,
      completed,
    },
  );

  res.status(200).send(updatedtodo);
});

// delete a todo by ID
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const deletedtodo = await Todo.findByIdAndDelete({
    _id: new mongoose.Types.ObjectId(id),
  });

  res.status(200).send(deletedtodo);
});

app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});

mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("Connected to DB!");
});
