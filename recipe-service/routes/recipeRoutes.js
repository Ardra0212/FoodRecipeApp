const express = require("express");
const router = express.Router();
const { addRecipe, getRecipes } = require("../controller/recipeController");

router.post("/add", addRecipe);
router.get("/recipes", getRecipes);

module.exports = router;