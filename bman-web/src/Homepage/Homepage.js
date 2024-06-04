/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Homepage.css";
import Typewriter from "typewriter-effect";
import client from "../images/clients.jpg";
import multimedia from "../images/multimedia.png";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="homepage-section">
      <div className="header-section">
        <p className="welcome-title">Welcome</p>
        <Typewriter
          className="custom-typewriter"
          options={{
            strings: ["Editor", "Gamer", "Esports Business Major"],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 100,
          }}
        />{" "}
      </div>
      <div className="card-section">
        <div className="card">
          <Link to="/multimedia">
            <img src={multimedia} alt="rl-image" className="card-image"></img>
          </Link>
        </div>
        <div className="card">
          <Link to="/clients">
            <img src={client} alt="rl-image" className="card-image"></img>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
