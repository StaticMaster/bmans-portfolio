import React from 'react';
import './Multimedia.css';
import rlvid from '../videos/rl-montage.mp4';

function Multimedia() {
  return (
    <div className="multimedia-section">
      <div className="editing-section">
        <h1>Editing</h1>
        
          <video autoPlay loop muted>
            <source src={rlvid} type="video/mp4" className='video'></source>
          </video>
          {/* You can add more video elements here if needed */}
      </div>
    </div>
  );
}

export default Multimedia;
