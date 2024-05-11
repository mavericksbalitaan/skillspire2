const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

const middleware = (req, res, next) => {
  let { title, description, completed } = req.body;
  if (typeof title !== "string") {
    return res.status(400).send("Title must be of type string");
  }
  if (typeof description !== "string") {
    return res.status(400).send("Description must be of type string");
  }
  if (typeof completed !== "boolean") {
    return res.status(400).send("Completed must be of type string");
  }
  next();
};

let todos = [
  {
    id: 1,
    title: "Complete project proposal",
    description:
      "Prepare a detailed proposal outlining the project scope, objectives, and deliverables.",
    completed: false,
  },
  {
    id: 2,
    title: "Prepare presentation slides",
    description:
      "Create visually engaging slides to effectively communicate key project details and findings.",
    completed: false,
  },
  {
    id: 3,
    title: "Schedule meeting with stakeholders",
    description:
      "Coordinate a meeting with project stakeholders to gather feedback and ensure alignment.",
    completed: false,
  },
  {
    id: 4,
    title: "Review and finalize budget plan",
    description:
      "Thoroughly review the budget plan and make necessary adjustments based on project requirements.",
    completed: false,
  },
  {
    id: 5,
    title: "Submit progress report",
    description:
      "Compile a comprehensive report detailing the current status and progress of the project.",
    completed: false,
  },
];

// 1
app.get("/todos", (req, res) => {
  res.json(todos);
});

// 2
app.get("/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.filter((todo) => todo.id == id);
  res.status(200).send(todo);
});

// 3
app.post("/todos", middleware, (req, res) => {
  const id = Math.floor(Math.random() * (1000 - todos.length) + todos.length);
  const { title, description, completed } = req.body;
  const newtodo = {
    id,
    title,
    description,
    completed,
  };
  todos = [...todos, newtodo];
  res.status(200).send(todos);
});

// 4
app.put("/todos/:id", middleware, (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;
  const index = todos.findIndex((todo) => todo.id == id);
  if (index !== -1) {
    todos[index].title = title;
    todos[index].description = description;
    todos[index].completed = completed;
    res.status(200).send(todos);
  } else {
    res.status(404).send("Todo not found");
  }
});

// 5
app.delete("/todos/:id", (req, res) => {
  let { id } = req.params;
  let index = todos.findIndex((todo) => todo.id == id);
  if (index !== -1) {
    todos.splice(index, 1);
    res.status(200).send(todos);
  } else {
    res.status(404).send("Todo not found");
  }
});

app.listen(PORT, () => {
  console.log("Server is running at PORT 3000");
});
