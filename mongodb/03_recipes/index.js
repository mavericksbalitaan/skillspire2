const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

const Recipe = require("./RecipeModel");

const PORT = 3000;

const middleware = (req, res, next) => {
  const { name, ingredients } = req.body;
  if (!name || !ingredients ) {
    return res.status(400).json({
      error: "Missing required properties: name or ingredients",
    });
  }

  next();
};

// retrieve a list of recipes
app.get("/recipes", async (req, res) => {
  const recipes = await Recipe.find();

  res.status(200).send(recipes);
});

// retrieve details of a specific recipe by ID
app.get("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  const recipe = await Recipe.find({ _id: new mongoose.Types.ObjectId(id) });

  res.status(200).send(recipe);
});

// add a new recipe to the collection
app.post("/recipes", middleware, async (req, res) => {
  const { name, ingredients } = req.body;
  const newrecipe = await Recipe.create({
    name,
    ingredients,
  });

  res.status(200).send(newrecipe);
});

// update details of a recipe by ID
app.put("/books/:id", middleware, async (req, res) => {
  const { id } = req.params;
  const { name, ingredients } = req.body;
  const updatedrecipe = await Recipe.findByIdAndUpdate(
    { _id: new mongoose.Types.ObjectId(id) },
    {
      name,
      ingredients,
    },
  );

  res.status(200).send(updatedrecipe);
});

// delete a recipe by ID
app.delete("/recipes/:id", async (req, res) => {
  const { id } = req.params;
  const deletedrecipe = await Recipe.findByIdAndDelete({
    _id: new mongoose.Types.ObjectId(id),
  });

  res.status(200).send(deletedrecipe);
});

app.listen(PORT, () => {
  console.log("Server running at PORT 3000");
});

mongoose.connect(process.env.MONGOURL).then(() => {
  console.log("Connected to DB!");
});
