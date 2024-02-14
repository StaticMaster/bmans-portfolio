import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import bmanlogo from "../images/bman.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-social-section">
        <img src={bmanlogo} alt="bman-logo" className="logo"></img>
        <div className="icons-section">
          <a href="https://twitter.com/Bman_ike" className="link">
            <FaXTwitter className="icon" />
          </a>
          <a
            href="https://www.instagram.com/bman_ike/"
            className="link"
          >
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.twitch.tv/bman_ike" className="link">
            <FaTwitch className="icon" />
          </a>
          <a href="https://www.youtube.com/channel/UCFPUIrBzUWq5CLVmZmc2CHQ?view_as=subscriber" className="link">
            <GrYoutube className="icon" />
          </a>
        </div>
      </div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/multimedia">Multimedia Work</Link>
        </li>
        {/* <li>
          <Link to="/">Emotes</Link>
        </li> */}
        <li>
          <Link to="/clients">Clients</Link>
        </li>
        <li>
          <Link to="/">Esports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
