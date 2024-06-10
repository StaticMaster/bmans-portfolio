import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bmanlogo from "../images/bman.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      <div className="logo-social-section">
        <Link to="/">
          <img src={bmanlogo} alt="bman-logo" className="logo"></img>
        </Link>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>
      <ul className={`nav ${isOpen ? "active" : ""}`}>
        <span className="close-btn" onClick={toggleMenu}>&times;</span>
        <li className="nav-link">
          <Link to="/multimedia" onClick={toggleMenu}>
            Multimedia Work
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/clients" onClick={toggleMenu}>
            Clients
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/about" onClick={toggleMenu}>
            About Me
          </Link>
        </li>
        <li className="nav-link">
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </li>
        <div className="navbar-icons-section">
          <a href="https://twitter.com/Bman_ike" className="link">
            <FaXTwitter className="navbar-icon" />
          </a>
          <a href="https://www.instagram.com/bman_ike/" className="link">
            <FaInstagram className="navbar-icon" />
          </a>
          <a href="https://www.twitch.tv/bman_ike" className="link">
            <FaTwitch className="navbar-icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFPUIrBzUWq5CLVmZmc2CHQ?view_as=subscriber"
            className="link"
          >
            <GrYoutube className="navbar-icon" />
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
