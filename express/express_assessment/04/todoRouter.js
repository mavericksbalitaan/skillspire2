const express = require('express')

const router = express.Router();

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


// 1 Retrieve a list of all todos
router.get("/", (req, res) => {
  res.send(todos);
});

const middleware = (req, res, next) => {
  const { title, description, completed } = req.body;

  if (!title || !description || !completed) {
    return res.status(400).json({
      error: "Missing required properties: title, description, or completed",
    });
  }

  next();
};


// 3 Add a new todo to the list
router.post("/", middleware, (req, res) => {
  const { title, description, completed } = req.body;
  const id = Math.floor(Math.random() * (100 - 0) + 0);
  const newtodo = {
    id,
    title,
    description,
    completed
  };

  todos.push(newtodo);

  res.send(todos);
});


module.exports = router;
