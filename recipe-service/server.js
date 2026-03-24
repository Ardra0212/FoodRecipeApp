const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

/* 🔗 CONNECT TO MONGODB */
mongoose.connect("mongodb://127.0.0.1:27017/foodapp")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

/* 📦 SCHEMA */
const recipeSchema = new mongoose.Schema({
  name: String,
  desc: String,
  ingredients: String,
  steps: String,
  type: String,
  category: String,
  image: String
});

const Recipe = mongoose.model("Recipe", recipeSchema);

/* 📥 ADD RECIPE */
app.post("/add", async (req, res) => {
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.send("Recipe added");
});

/* 📤 GET RECIPES */
app.get("/recipes", async (req, res) => {
  const data = await Recipe.find();
  res.json(data);
});

app.listen(5002, () => console.log("Server running on 5002"));