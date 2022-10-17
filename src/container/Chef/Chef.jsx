import React from 'react';
import images from '../../constants/images'
import './Chef.css';

const Chef = () => (
  <div className="chef">
    <div className="chef__part1">
      <img src={images.chef} alt="" />
    </div>

    <div className="chef__part2">
      <div className="chef__part2-1">
        <p>Chef's Word</p>
        <img src={images.spoon} alt="spoon" />
      </div>
      <div className="chef__part2-2">
        <h1>What We Believe In</h1>
      </div>
      <div className="chef__part2-3">
        <div className='chef__part2-3_quote'>
          <img src={images.quote} alt="quote" />
          <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit .</p>
        </div>
        <div>
          <p>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
        </div>
      </div>
      <div className="chef__part2-4">
        <p>Kevin Luo</p>
        <p>Chef $ Founder</p>
          <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
