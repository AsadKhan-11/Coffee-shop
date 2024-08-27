import React from "react";
import "./Nav.css";
function Nav() {
  return (
    <div className="navbar">
      <h1>KAFE</h1>

      <div className="nav-link-container">
        <a href="" className="nav-links">
          Home
        </a>
        <a href="" className="nav-links">
          Menu
        </a>
        <a href="" className="nav-links">
          About us
        </a>
      </div>
      <a href="" className="nav-links nav-btn">
        Order Now
      </a>
    </div>
  );
}

export default Nav;
