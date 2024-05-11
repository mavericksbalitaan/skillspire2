const express = require("express");

const app = express();

const PORT = 3000;
app.use(express.json());

const urlMap = {};

app.post("/shorten", (req, res) => {
  const { longUrl } = req.body;
  const shortCode = generateShortCode(8);
  urlMap[shortCode] = longUrl;

  res.status(200).json({ shortCode: shortCode });
});

app.get("/:shortenCode", (req, res) => {
  const { shortenCode } = req.params;

  const longUrl = urlMap[shortenCode];

  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(400).json({ error: "URL not found" });
  }
});

app.listen(PORT, () => {
  console.log("Server is running at PORT 3000");
});

function generateShortCode(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
