const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

// LOGIN
app.post("/login", async (req, res) => {
  const response = await axios.post("http://localhost:5001/login", req.body);
  res.json(response.data);
});

// RECIPES
app.get("/recipes", async (req, res) => {
  const response = await axios.get("http://localhost:5002/recipes");
  res.json(response.data);
});

app.listen(5000, () => console.log("Gateway running"));