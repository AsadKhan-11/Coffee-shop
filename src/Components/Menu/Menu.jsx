import React from "react";
import "./Menu.css";
import coffee from "./Data";

function Menu() {
  return (
    <div className="Menu">
      <h1 className="menu-header">OUR MENU</h1>

      <div className="menu-container">
        {coffee.map((coffees, index) => {
          return (
            <div className="menu-circle" key={index}>
              <p className="menu-name">{coffees.name}</p>
              <img src={coffees.img} className="coffee-img" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
