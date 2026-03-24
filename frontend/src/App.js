import { useState } from "react";
import "./App.css";

const recipesData = [
  // 🍕 ITALIAN (6)
  { name: "Pizza", desc: "Cheesy delight", ingredients: "Flour, Cheese", steps: "Bake", type: "veg", category: "Italian", image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGl6emF8ZW58MHx8MHx8fDA%3D" },
  { name: "Pasta", desc: "Creamy pasta", ingredients: "Pasta, Milk", steps: "Boil", type: "veg", category: "Italian", image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Lasagna", desc: "Layered pasta", ingredients: "Sheets, Cheese", steps: "Bake", type: "veg", category: "Italian", image: "https://images.unsplash.com/photo-1546453570-d2fcacdafbb2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxhc2FnbmF8ZW58MHx8MHx8fDA%3D" },
  { name: "Risotto", desc: "Creamy rice", ingredients: "Rice, Cheese", steps: "Cook slowly", type: "veg", category: "Italian", image: "https://images.unsplash.com/photo-1621341258668-b2bf005a9f97?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Umlzb3R0b3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Bruschetta", desc: "Toasted bread", ingredients: "Bread, Tomato", steps: "Toast", type: "veg", category: "Italian", image: "https://images.unsplash.com/photo-1630230596637-28f416b537ff?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8QnJ1c2NoZXR0YXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Spaghetti", desc: "Classic pasta", ingredients: "Spaghetti, Sauce", steps: "Boil", type: "veg", category: "Italian", image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFNwYWdoZXR0aXxlbnwwfHwwfHx8MA%3D%3D" },

  // 🇮🇳 INDIAN (6)
  { name: "Biryani", desc: "Spicy rice", ingredients: "Rice, Chicken", steps: "Cook", type: "nonveg", category: "Indian", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmlyeWFuaXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Dosa", desc: "Crispy dosa", ingredients: "Rice batter", steps: "Cook", type: "veg", category: "Indian", image: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?q=80&w=1082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://source.unsplash.com/300x200/?dosa" },
  { name: "Idli", desc: "Soft idli", ingredients: "Rice batter", steps: "Steam", type: "veg", category: "Indian", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWRsaXxlbnwwfHwwfHx8MA%3D%3D://source.unsplash.com/300x200/?idli" },
  { name: "Paneer Butter Masala", desc: "Creamy curry", ingredients: "Paneer", steps: "Cook", type: "veg", category: "Indian", image: "https://media.istockphoto.com/id/2221893115/photo/indian-cottage-cheese-curry-in-cream-and-cashew-nuts-gravy-directly-above-photo.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZbQ8VTWrI1tjA59z8h4KOJDe6QNYaJ0XoAwccmtsmos=" },
  { name: "Samosa", desc: "Fried snack", ingredients: "Potato", steps: "Fry", type: "veg", category: "Indian", image: "https://plus.unsplash.com/premium_photo-1695297515191-5870e86dcbe0?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFNhbW9zYXxlbnwwfHwwfHx8MA%3D%3D" },
  { name: "Chicken Curry", desc: "Spicy curry", ingredients: "Chicken", steps: "Cook", type: "nonveg", category: "Indian", image: "https://media.istockphoto.com/id/1501040363/photo/chicken-curry-in-bowl-with-indian-spices.webp?a=1&b=1&s=612x612&w=0&k=20&c=-oQe3mGIl1GMv6eFXmwxFeopf-YeMoVFIFultBbgNdg=" },

  // 🍜 CHINESE (6)
  { name: "Fried Rice", desc: "Quick rice", ingredients: "Rice", steps: "Fry", type: "veg", category: "Chinese", image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RnJpZWQlMjBSaWNlfGVufDB8fDB8fHww" },
  { name: "Noodles", desc: "Street noodles", ingredients: "Noodles", steps: "Cook", type: "veg", category: "Chinese", image: "https://images.unsplash.com/photo-1607328874071-45a9cd600644?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5vb2RsZXN8ZW58MHx8MHx8fDA%3D" },
  { name: "Manchurian", desc: "Spicy balls", ingredients: "Veg balls", steps: "Fry", type: "veg", category: "Chinese", image: "https://media.istockphoto.com/id/1072951288/photo/indian-chilli-chicken-dry-served-in-a-plate-over-moody-background-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=GeqSiSUYGqzSTTUVI3b4iLTgkuD2jDLeVwzm0PvkTt0=" },
  { name: "Spring Rolls", desc: "Crispy rolls", ingredients: "Veggies", steps: "Fry", type: "veg", category: "Chinese", image: "https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3ByaW5nJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D" },
  { name: "Dumplings", desc: "Steamed", ingredients: "Flour", steps: "Steam", type: "nonveg", category: "Chinese", image: "https://images.unsplash.com/photo-1638502521795-89107ac5e246?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RHVtcGxpbmdzfGVufDB8fDB8fHww" },
  { name: "Hot & Sour Soup", desc: "Tangy soup", ingredients: "Veggies", steps: "Boil", type: "veg", category: "Chinese", image: "https://images.unsplash.com/photo-1709697442408-88ff6ba8563e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SG90JTIwJTI2JTIwU291ciUyMFNvdXB8ZW58MHx8MHx8fDA%3D" },

  // 🍔 FAST FOOD (6)
  { name: "Burger", desc: "Juicy burger", ingredients: "Bun, Patty", steps: "Grill", type: "nonveg", category: "Fast Food", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QnVyZ2VyfGVufDB8fDB8fHww" },
  { name: "Fries", desc: "Crispy fries", ingredients: "Potato", steps: "Fry", type: "veg", category: "Fast Food", image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RnJpZXN8ZW58MHx8MHx8fDA%3D" },
  { name: "Sandwich", desc: "Quick snack", ingredients: "Bread", steps: "Assemble", type: "veg", category: "Fast Food", image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2FuZHdpY2h8ZW58MHx8MHx8fDA%3D" },
  { name: "Hot Dog", desc: "Sausage bun", ingredients: "Bun", steps: "Cook", type: "nonveg", category: "Fast Food", image: "https://images.unsplash.com/photo-1613482084286-41f25b486fa2?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG90JTIwRG9nfGVufDB8fDB8fHww" },
  { name: "Taco", desc: "Mexican wrap", ingredients: "Tortilla", steps: "Fill", type: "nonveg", category: "Fast Food", image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFjb3xlbnwwfHwwfHx8MA%3D%3D" },
  { name: "shawarma", desc: "Fusion", ingredients: "Cheese", steps: "Bake", type: "veg", category: "Fast Food", image: "https://images.unsplash.com/photo-1662116765994-1e4200c43589?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhd2FybWF8ZW58MHx8MHx8fDA%3D" }
];

function App() {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [category, setCategory] = useState("");

  const [page, setPage] = useState("login"); // 👈 NEW

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      setPage("home"); // 👈 go to home
    } else {
      alert("Wrong credentials");
    }
  };

  const filteredRecipes = recipesData.filter((r) =>
    r.name.toLowerCase().includes(search.toLowerCase()) &&
    (typeFilter ? r.type === typeFilter : true) &&
    (category ? r.category === category : true)
  );

  // 🔐 LOGIN PAGE
  if (page === "login") {
    return (
      <div className="login">
        <h1>🍽️ Food App Login</h1>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }

  // 🏠 HOME PAGE
  if (page === "home") {
  return (
    <div className="home">
      <div className="home-box">
        <h1>🍽️ Food Recipe App</h1>
        <p>Discover tasty recipes from around the world 😋</p>

        <button onClick={() => setPage("recipes")} className="home-btn">
          Explore Recipes 🍜
        </button>

        <button onClick={() => setPage("login")} className="logout-btn">
          Logout 🔓
        </button>
      </div>
    </div>
  );
}

  // 🍽️ RECIPES PAGE
  if (page === "recipes") {
    return (
      <div>
        <div className="navbar">
          <h2>🍽️ Food Recipe App</h2>
          <div>
            <button onClick={() => setPage("home")}>🏠 Home</button>
            <button onClick={() => setPage("login")}>Logout</button>
          </div>
        </div>

        <div className="banner">
          <h1>Delicious Recipes 😋</h1>
        </div>

        <div className="controls">
          <input placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />

          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Fast Food">Fast Food</option>
          </select>

          <div>
            <button onClick={() => setTypeFilter("veg")}>Veg</button>
            <button onClick={() => setTypeFilter("nonveg")}>Non-Veg</button>
            <button onClick={() => setTypeFilter("")}>All</button>
          </div>
        </div>

        <div className="grid">
          {filteredRecipes.map((r, i) => (
            <div className="card" key={i}>
              <img src={r.image} alt={r.name} />

              <h3>{r.name}</h3>
              <p>{r.desc}</p>

              <p><b>Type:</b> {r.type.toUpperCase()}</p>
              <p><b>Category:</b> {r.category}</p>

              <p><b>Ingredients:</b> {r.ingredients}</p>
              <p><b>Steps:</b> {r.steps}</p>
            </div>
          ))}
        </div>

        <div className="footer">
          © Ardra Prashanth & Moolya Nishmitha
        </div>
      </div>
    );
  }
}

export default App;