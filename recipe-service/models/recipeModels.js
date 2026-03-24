const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  name: String,
  desc: String,
  ingredients: String,
  steps: String,
  type: String,
  category: String,
  image: String
});

module.exports = mongoose.model("Recipe", recipeSchema);