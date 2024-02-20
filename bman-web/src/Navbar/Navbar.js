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
    <div className={`navbar ${isOpen ? 'active' : ''}`}>
      <div className="logo-social-section">
        <img src={bmanlogo} alt="bman-logo" className="logo"></img>
        <div className="icons-section">
          <a href="https://twitter.com/Bman_ike" className="link">
            <FaXTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/bman_ike/" className="link">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.twitch.tv/bman_ike" className="link">
            <FaTwitch className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCFPUIrBzUWq5CLVmZmc2CHQ?view_as=subscriber"
            className="link"
          >
            <GrYoutube className="icon" />
          </a>
        </div>
      </div>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`nav ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li>
          <Link to="/multimedia" onClick={toggleMenu}>Multimedia Work</Link>
        </li>
        <li>
          <Link to="/clients" onClick={toggleMenu}>Clients</Link>
        </li>
        <li>
          <Link to="/esports" onClick={toggleMenu}>Esports</Link>
        </li>
        <li>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
