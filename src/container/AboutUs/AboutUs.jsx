import React from 'react';
import images from '../../constants/images'
import './AboutUs.css';

const AboutUs = () => (
  <div className="aboutUs">
    <div className="letterG">
      <img src={images.G} alt="" />
    </div>

    <div className="aboutUs__part1">
      <div>
        <h1>About Us</h1>
        <img src={images.spoon} alt="" />
      </div>

      <div>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
        </p>
      </div>

      <div>
        <button>Know More</button>
      </div>
    </div>

    <div className="aboutUs__part2">
      <img src={images.knife} alt="" />
    </div>

    <div className="aboutUs__part3">
    <div>
        <h1>Our History</h1>
        <img src={images.spoon} alt="" />
      </div>

      <div>
        <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et.
        </p>
      </div>

      <div>
        <button>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
