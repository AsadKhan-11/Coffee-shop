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
    </div>
  );
}

export default Order;
