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
      <h1 className="nav-header">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.55132 2.68377C4.68743 2.27543 5.06957 2 5.5 2H18.5C18.9304 2 19.3126 2.27543 19.4487 2.68377L20.2208 5H20.5C21.0523 5 21.5 5.44772 21.5 6C21.5 6.55228 21.0523 7 20.5 7H19.5H19.405L17.995 21.0995C17.9439 21.6107 17.5138 22 17 22H7C6.48625 22 6.05608 21.6107 6.00496 21.0995L4.59501 7H4.5H3.5C2.94772 7 2.5 6.55228 2.5 6C2.5 5.44772 2.94772 5 3.5 5H3.77924L4.55132 2.68377ZM6.60499 7L7.90499 20H16.095L17.395 7H6.60499ZM18.1126 5H5.88743L6.22076 4H17.7792L18.1126 5Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
        KAFE
      </h1>

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
      <a href="" className="nav-btn">
        Order Now
      </a>
    </div>
  );
}

export default Nav;
