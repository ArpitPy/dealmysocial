import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import "./topbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <Link className={"logo"} to="/"><img src={Logo} alt="" /></Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/">About Us</a>
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