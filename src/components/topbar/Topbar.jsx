import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./topbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
        <img className="logo" src={Logo} alt="" />
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">Home</a>
        <a href="/about">Community</a>
        <a href="/loginer">Log In</a>
        <a href="/signer">Sign Up</a>
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