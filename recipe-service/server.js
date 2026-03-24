const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* DB CONNECTION */
connectDB();

/* ROUTES */
app.use("/", recipeRoutes);

/* SERVER */
app.listen(5002, () => console.log("Server running on 5002"));