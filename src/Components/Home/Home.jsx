import React from "react";
import "./Home.css";
import coffee from "../../../public/Coffee1.png";

function Home() {
  return (
    <>
      {" "}
      <div className="Home">
        <h1 className="home-header">TASTE THE TRADITION</h1>
        <div className="home-img-container">
          <img src={coffee} className="home-img"></img>
        </div>
        <div className="crossing-lines">
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
        </div>
      </div>
    </>
  );
}

export default Home;
