const express = require("express");

const app = express();

app.use(express.json());

const todoRouter = require("./todoRouter");
app.use("/todos", todoRouter);


const PORT = 3000;

let todos = [
  {
    id: 1,
    title: "Todo 1",
    description: "Description of Todo 1",
    completed: false,
  },
  {
    id: 2,
    title: "Todo 2",
    description: "Description of Todo 2",
    completed: true,
  },
  {
    id: 3,
    title: "Todo 3",
    description: "Description of Todo 3",
    completed: false,
  },
  {
    id: 4,
    title: "Todo 4",
    description: "Description of Todo 4",
    completed: true,
  },
  {
    id: 5,
    title: "Todo 5",
    description: "Description of Todo 5",
    completed: false,
  },
];

const middleware = (req, res, next) => {
  const { title, description, completed } = req.body;

  if (!title || !description || !completed) {
    return res.status(400).json({
      error: "Missing required properties: title, description, or completed",
    });
  }

  next();
};

// 2 Retrieve details of a specific todo by ID
app.get("/todos/:id", (req, res) => {
  const { id } = req.params;

  const todo = todos.find((todo) => todo.id == id);
  res.send(todo);
});

// 4 Update details of a todo by ID
app.put("/todos/:id", middleware, (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const index = todos.findIndex((todo) => todo.id == id);

  const newtodo = {
    id,
    title,
    description,
    completed
  };

  todos.splice(index, 1, newtodo);

  res.send(todos);
});

// 5 Delete a todo by ID
app.delete("/todos/:id", (req, res) => {
  const { id } = req.params;

  const index = todos.findIndex((todo) => todo.id == id);

  todos.splice(index, 1);

  res.send(todos);
});

app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});
