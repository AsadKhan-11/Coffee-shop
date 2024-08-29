import React from "react";
import "./Banner.css";
import coffee from "../../../public/Coffee1.png";
import badge from "../../../public/badge.png";

function Banner() {
  return (
    <div className="Banner">
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
    </div>
  );
}

export default Banner;
