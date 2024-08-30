import React from "react";
import "./Order.css";
import coffee from "../../../public/Coffee1.png";

function Order() {
  return (
    <div className="Order">
      <div className="order-info">
        <h1 className="order-header">ORDER NOW </h1>
        <div className="home-img-container">
          <img src={coffee} className="home-img"></img>
        </div>
      </div>
      <div className="ribbon1 ribbon">
        <h3>Order Now</h3>
        <h3>Order Now</h3>
        <h3>Order Now</h3>
      </div>
      <div className="ribbon2 ribbon">
        <h3>Order Now</h3>
        <h3>Order Now</h3>
        <h3>Order Now</h3>
      </div>

      <div className="order-footer-container">
        <h1 className="order-footer">KAFE</h1>

        <div className="order-footer-links">
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
      </div>
    </div>
  );
}

export default Order;
