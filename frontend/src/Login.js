import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:5000/login", data);

    if (res.data.user) {
      // 💾 SAVE USER
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // 🔁 GO TO RECIPES PAGE
      navigate("/recipes");
    } else {
      alert(res.data.msg);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" onChange={handleChange} />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;