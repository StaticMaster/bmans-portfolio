import React from "react";
import "./Multimedia.css";
import rlvid from "../videos/rl-montage.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sonic from '../images/SF.jpg';
import legend from '../images/legend.jpg';
import popo from '../images/popo.jpg'
import dragonball from '../images/DBFZ.jpg' 

function Multimedia() {
  return (
    <div className="multimedia-section">
      <div className="multimedia">
        <h1 className="multimedia-title">Editing</h1>
        <Carousel showArrows-={true} autoPlay={true} infiniteLoop={true}>
          <video autoPlay loop muted>
            <source src={rlvid} type="video/mp4" className="video"></source>
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
        </div>
      </div>
    </div>
  );
}

export default Multimedia;
