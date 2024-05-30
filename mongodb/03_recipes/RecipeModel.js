const { Schema, model } = require("mongoose");

const recipeSchema = new Schema({
  name: String,
  ingredients: Object,
});

const recipeModel = model("Recipe", recipeSchema);

module.exports = recipeModel;
