const express = require("express");

const app = express();
app.use(express.json());

const PORT = 3000;

const middleware = (req, res, next) => {
  let { name, ingredients } = req.body;
  if (typeof name !== "string") {
    return res.status(400).send("Title must be of type string");
  }
  if (typeof ingredients !== "object") {
    return res.status(400).send("Description must be of type string");
  }
  next();
};

let recipes = [
  {
    id: 1,
    name: "Pumpkin Peanut Butter Chicken Soup",
    ingredients: [
      "1 (15 ounce) can light coconut milk",
      "1/2 cup creamy peanut butter",
      "1/4 cup pumpkin puree",
      "3 cups chicken broth",
      "1 tablespoon soy sauce",
      "1 tablespoon brown sugar",
      "1 tablespoon fresh lime juice",
      "2 cloves garlic, minced",
      "1 teaspoon grated fresh ginger root",
      "1/2 teaspoon red pepper flakes",
      "2 cups shredded cooked chicken",
      "1 red bell pepper, thinly sliced",
      "1/2 cup chopped fresh cilantro",
      "1/4 cup chopped peanuts",
    ],
  },
  {
    id: 2,
    name: "Spaghetti Carbonara",
    ingredients: [
      "8 ounces spaghetti",
      "2 large eggs",
      "1 cup grated Pecorino Romano cheese",
      "4 slices bacon, chopped",
      "2 cloves garlic, minced",
      "Freshly ground black pepper",
      "Chopped fresh parsley, for garnish",
    ],
  },
  {
    id: 3,
    name: "Mango Avocado Salsa",
    ingredients: [
      "2 ripe mangoes, diced",
      "2 ripe avocados, diced",
      "1/2 cup diced red onion",
      "1/4 cup chopped fresh cilantro",
      "1 jalapeno pepper, seeded and minced",
      "3 tablespoons fresh lime juice",
      "Salt to taste",
    ],
  },
];

// 1 Retrieve a list of all recipes
app.get("/recipes", (req, res) => {
  res.json(recipes);
});

// 2 Retrieve details of a specific recipe by ID
app.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const recipe = recipes.filter((recipe) => recipe.id == id);
  res.status(200).send(recipe);
});

// 3 Add a new recipe to the collection
app.post("/recipes", middleware, (req, res) => {
  const id = Math.floor(
    Math.random() * (1000 - recipes.length) + recipes.length,
  );
  const { name, ingredients } = req.body;
  const newrecipe = {
    id,
    name,
    ingredients,
  };
  recipes = [...recipes, newrecipe];
  res.status(201).json({ message: "Recipe added to the collection", recipes });
});

// 4 Update details of a recipe by ID
app.put("/recipes/:id", middleware, (req, res) => {
  const { id } = req.params;
  const { name, ingredients } = req.body;
  const index = recipes.findIndex((recipe) => recipe.id == id);
  if (index !== -1) {
    recipes[index].name = name;
    recipes[index].ingredients = ingredients;
    res.status(200).send(recipes);
  } else {
    res.status(404).send("Recipe not found");
  }
});

// 5 Delete a recipe by ID
app.delete("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const index = recipes.findIndex((recipe) => recipe.id == id);
  if (index !== -1) {
    recipes.splice(index, 1);
    res.status(200).send(recipes);
  } else {
    res.status(404).send("Recipe not found");
  }
});

app.listen(PORT, () => {
  console.log("Server is running at PORT 3000");
});
