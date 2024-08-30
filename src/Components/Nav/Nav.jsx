import React, { useEffect, useState } from "react";
import "./Nav.css";
function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <h1 className="nav-header">KAFE</h1>

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
