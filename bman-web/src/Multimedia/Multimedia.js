import React from "react";
import "./Multimedia.css";
import rlvid from "../videos/rl-montage.mp4";
import text from '../videos/Texttest.mp4';
import starting from '../videos/starting-soon.mp4';
import dbfz from '../videos/modded-dbfz.mp4';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sonic from '../images/SF.jpg';
import legend from '../images/legend.jpg';
import popo from '../images/popo.jpg'
import dragonball from '../images/DBFZ.jpg';
import banner1 from '../images/banner1.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import banner4 from '../images/banner4.jpg';
import banner5 from '../images/banner5.jpg';
import banner6 from '../images/banner6.jpg';
import bman from '../images/bmanLurk.gif';
import kirby from '../images/KirbyStop.gif';
import korok from '../images/Korok.gif';
import panda from '../images/PandaEmote.gif'
import kirbyspeed from '../images/Spedup.gif';
import tibun from '../images/TiBunBun.gif';

function Multimedia() {
  return (
    <div className="multimedia-section">
      <div className="multimedia">
        <h1 className="multimedia-title">Editing</h1>
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
          <video autoPlay loop muted>
            <source src={rlvid} type="video/mp4"></source>
          </video>
          <video autoPlay loop muted>
            <source src={text} type="video/mp4"></source>
          </video>
          <video autoPlay loop muted>
            <source src={starting} type="video/mp4" ></source>
          </video>
          <video autoPlay loop muted>
            <source src={dbfz} type="video/mp4"></source>
          </video>
        </Carousel>
      </div>
      <div className="multimedia">
        <h1 className="multimedia-title">Thumbnails</h1>
        <div className="image-section">
          <img src={sonic} className="thumbnail-image" alt="sonic-thumbnail"></img>
          <img src={legend} className="thumbnail-image" alt="legendofti-thumbnail"></img>
          <img src={popo} className="thumbnail-image" alt="popo-thumbnail"></img>
          <img src={dragonball} className="thumbnail-image" alt="dragonball-thumbnail"></img>
        </div>
      </div>
      <div className="multimedia">
        <h1 className="multimedia-title">Banners</h1>
        <div className="banner-section">
          <img src={banner1} alt="banner" className="banner-image"></img>
          <img src={banner2} alt="banner" className="banner-image"></img>
          <img src={banner3} alt="banner" className="banner-image"></img>
          <img src={banner4} alt="banner" className="banner-image"></img>
          <img src={banner5} alt="banner" className="banner-image"></img>
          <img src={banner6} alt="banner" className="banner-image"></img>
        </div>
      </div>
      <div className="multimedia">
        <h1 className="multimedia-title">Emotes</h1>
        <div className="emotes-section">
          <img src={bman} alt="bman-gif" className="emote"></img>
          <img src={kirby} alt="bman-gif" className="emote"></img>
          <img src={korok} alt="bman-gif" className="emote"></img>
          <img src={panda} alt="bman-gif" className="emote"></img>
          <img src={kirbyspeed} alt="bman-gif" className="emote"></img>
          <img src={tibun} alt="bman-gif" className="emote"></img>
        </div>
      </div>
    </div>
  );
}

export default Multimedia;
