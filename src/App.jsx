import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import coffee from "../public/Coffee1.png";
import badge from "../public/badge.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overall">
      <Nav />
      <Home />
      <div className="home-img-container">
        <div className="home-circle">
          <img src={coffee} className="home-img"></img>
        </div>
        <p className="home-txt2">
          Experience the perfect blend of bold coffee and ice-cold refreshment.
          Try our iced coffee today!{" "}
        </p>
        <img src={badge} alt="badge" className="badge" />
      </div>
      <div className="ribbon1 ribbon">
        <h3>Mocha</h3>
        <h3>Latte</h3>
        <h3>Espresso</h3>
      </div>
      <div className="ribbon2 ribbon">
        <h3>Mocha</h3>
        <h3>Latte</h3>
        <h3>Espresso</h3>
      </div>
      <Menu />
    </div>
  );
}

export default App;
