/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Homepage.css";
import Typewriter from "typewriter-effect";
import esports from "../images/esports.jpg";
import client from '../images/clients.jpg';
import multimedia from '../images/multimedia.png'

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
          <img src={multimedia} alt="rl-image" className="card-image"></img>
        </div>
        <div className="card">
          <img src={client} alt="rl-image" className="card-image"></img>
        </div>
        <div className="card">
          <img src={esports} alt="rl-image" className="card-image"></img>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
