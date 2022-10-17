import React from 'react';
import { data, images } from '../../constants';
import './Laurels.css';

const Awardcard = ({award:{title, imgUrl, subtitle}}) =>(
  <div className="awardCard">
    <div className='awardCard__part1'>
      <img src={imgUrl} alt="" />
    </div>
    <div className='awardCard__part2'>
    <p>{title}</p>
    <p>{subtitle}</p>
    </div>
  </div>
)



const Laurels = () => (
  <div className="laurels">
    <div className="laurels__part1">
      <div className="laurels__part1-1">
        <p>Awards & Recognition</p>
        <img src={images.spoon} alt="spoon" />
      </div>
      <div className="laurels__part1-2">
        <h1>Our Laurels</h1>
      </div>
      <div className="laurels__part1-3">
        {data.awards.map((award) => 
          <Awardcard award={award} key={award.title} 
           />
        )}
      </div>
    </div>
    <div className="laurels__part2">
          <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
