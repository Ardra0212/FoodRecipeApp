// Temporary static users (same as your original)
const users = [{ username: "admin", password: "1234" }];

/* 🔐 LOGIN */
const loginUser = (req, res) => {
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
};

module.exports = { loginUser };