import React from 'react';
import images from '../../constants/images';
import './findus.css';


const FindUs = () => (
  <div className="findUs">
    <div className="findUs__part1">
      <div className="findUs__part1-1">
        <p>Contact</p>
        <img src={images.spoon} alt="" />
      </div>
      <div className="findUs__part1-2">
        <h1>Find Us</h1>
      </div>
      <div className="findUs__part1-3">
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <p className="p-2">
          Openning Hours
        </p>
        <p>Mon - Fri: 10:00 Am - 02:00 Am
        </p>
        <p>Sat - Sun: 10:00 Am - 03:00 Am
        </p>
      </div>
      <div className="findUs__part1-4">
        <button className='first-btn'>Visit Us</button>
      </div>
    </div>
    <div className="findUs__part2">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
