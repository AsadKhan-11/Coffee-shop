import { useState } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Banner from "./Components/Banner/Banner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="overall">
      <Nav />
      <Home />
      <Banner />
      <Menu />
    </div>
  );
}

export default App;
