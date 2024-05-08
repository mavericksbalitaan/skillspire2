const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send(
    "<p>First Name: John</p><p>Last Name: Doe<p>Favorite Food: Pizza</p><p>Favorite Vacation Destination: Japan</p>",
  );
});

app.listen(PORT, () => {
  console.log("Server running at port 3000");
});
