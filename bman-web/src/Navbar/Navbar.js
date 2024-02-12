import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bmanlogo from "../images/bman.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-social-section">
        <img src={bmanlogo} alt="bman-logo" className="logo"></img>
      </div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Multimedia Clips</Link>
        </li>
        <li>
          <Link to="/">Emotes</Link>
        </li>
        <li>
          <Link to="/">Esports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
