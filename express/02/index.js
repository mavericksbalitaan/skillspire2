const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("<h1>INDEX</h1>");
});

app.get("/display-name", (req, res) => {
  res.send("<h1>John Doe</h1>");
});John Doe

app.get("/display-food", (req, res) => {
  res.send("<h1>Pizza</h1>");
});

app.get("/display-vacation", (req, res) => {
  res.send("<h1>Japan</h1>");
});

app.listen(PORT, () => {
  console.log("Server running at port 3000");
});
