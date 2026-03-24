const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
// const connectDB = require("./config/db"); // optional

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());



/* ROUTES */
app.use("/", userRoutes);

/* SERVER */
app.listen(5001, "0.0.0.0", () => {
  console.log("User Service running on 5001");
});