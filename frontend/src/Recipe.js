import { useEffect, useState } from "react";

function Recipes() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      window.location.href = "/"; // go back if not logged in
    } else {
      setUser(storedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div>
      <h2>
        {user ? `Welcome, ${user.username} 👋` : "Welcome"}
      </h2>

      <button onClick={logout}>Logout</button>

      <h3>🍽️ Your Recipes</h3>
    </div>
  );
}

export default Recipes;