/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./Homepage.css";
import Typewriter from "typewriter-effect";
import rocket from "../images/rocket-league-1.jpg";
import emote from '../images/bman-emote.jpg';

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
          <h1 className="card-title">Multimedia Work</h1>
          <img src={rocket} alt="rl-image" className="card-image"></img>
        </div>
        <div className="card">
          <h1 className="card-title">Emotes</h1>
          <img src={rocket} alt="rl-image" className="card-image"></img>
        </div>
        <div className="card">
          <h1 className="card-title">Clients</h1>
          <img src={rocket} alt="rl-image" className="card-image"></img>
        </div>
        <div className="card">
          <h1 className="card-title">Esports</h1>
          <img src={rocket} alt="rl-image" className="card-image"></img>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
