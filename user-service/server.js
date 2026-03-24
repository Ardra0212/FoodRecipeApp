const express = require("express");
const cors = require("cors");

const app = express();   // ✅ create app FIRST

app.use(cors());         // ✅ then use it
app.use(express.json());

const users = [{ username: "admin", password: "1234" }];

// LOGIN ROUTE
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    res.json({
      msg: "Login success",
      user: {
        username: user.username
      }
    });
  } else {
    res.json({ msg: "Invalid credentials" });
  }
});

// START SERVER
app.listen(5001, "0.0.0.0", () => {
  console.log("User Service running on 5001");
});