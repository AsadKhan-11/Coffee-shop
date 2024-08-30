import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu.jsx";
import Banner from "./Components/Banner/Banner";
import Order from "./Components/Order/Order.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overall">
      <Nav />
      <Home />
      <Banner />
      <Menu />
      <Order />
    </div>
  );
}

export default App;
