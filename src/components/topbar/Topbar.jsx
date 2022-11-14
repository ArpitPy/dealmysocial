import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./topbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="logo" src={Logo} alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">About Us</a>
        <a href="/about">Community</a>
        <a href="/service">Log In</a>
        <a href="/contact">Sign Up</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;