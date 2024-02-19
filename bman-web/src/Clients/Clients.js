import React from "react";
import "./Clients.css";
import tilogo from "../images/ti-logo.png";
import tividsample from "../videos/tiwz-clip.mp4";
import ticlaymore from "../videos/claymore.mp4";
import tiunboxing from "../videos/cod-unboxing.mp4";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";
import { GrYoutube } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa";

function Clients() {
  return (
    <div className="client-section">
      <h1 className="client-title">Clients</h1>
      <div className="testimonials-section">
        <div className="testimonial">
          <img src={tilogo} alt="ti-logo" className="testimonial-image"></img>
          <div className="creator-social-section">
            <a href="https://twitter.com/LegendofTi" className="link">
              <FaXTwitter className="client-icon" />
            </a>
            <a href="https://www.tiktok.com/@legendof_ti" className="link">
              <FaTiktok className="client-icon" />
            </a>
            <a href="https://www.twitch.tv/legendof_ti" className="link">
              <FaTwitch className="client-icon" />
            </a>
            <a href="https://www.instagram.com/legendof_ti/" className="link">
              <FaInstagram className="client-icon" />
            </a>

            <a href="https://www.youtube.com/c/legendof_ti" className="link">
              <GrYoutube className="client-icon" />
            </a>
          </div>
          <h3 className="creator-name">Legend Of Ti</h3>
          <p className="testimonial-sentence">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed
            libero vitae quam faucibus laoreet.
          </p>
          <div className="video-section">
            <video autoPlay loop muted className="creator-vid">
              <source src={tividsample} type="video/mp4"></source>
            </video>
            <div className="shortform-content">
              <video autoPlay loop muted className="shortform-video">
                <source src={ticlaymore} type="video/mp4"></source>
              </video>
              <video autoPlay loop muted className="shortform-video">
                <source src={tiunboxing} type="video/mp4"></source>
              </video>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Clients;
