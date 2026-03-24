const Recipe = require("../models/recipeModel");

/* 📥 ADD RECIPE */
const addRecipe = async (req, res) => {
  try {
    const newRecipe = new Recipe(req.body);
    await newRecipe.save();
    res.send("Recipe added");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

/* 📤 GET RECIPES */
const getRecipes = async (req, res) => {
  try {
    const data = await Recipe.find();
    res.json(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { addRecipe, getRecipes };