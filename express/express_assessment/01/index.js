const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

// 1
app.get("/", (req, res) => {
  res.send("Welcome!");
});

let users = [
  { id: 1, username: "user1", firstName: "John", lastName: "Doe" },
  { id: 2, username: "user2", firstName: "Jane", lastName: "Smith" },
  { id: 3, username: "user3", firstName: "Alice", lastName: "Johnson" },
];

// 2
app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});
