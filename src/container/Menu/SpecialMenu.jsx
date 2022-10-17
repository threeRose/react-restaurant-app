import React from 'react';
import { MenuItem } from '../../components';
import {data, images} from '../../constants'
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="specialMenu">
    <div className="specialMenu__part1">
      <p>Menu That Fits You Palatte
      </p>
      <img src={images.spoon} alt="spoon" />
    </div>
    <div className="specialMenu__part2">
      <h1>Today's Special</h1>
    </div>
    <div className="specialMenu__part3">
      <div className="specialMenu__part3-part1">
        <div className='part3-part1-header'>
          <p>Hot Drinks</p>
        </div>

        <div>
          {data.hotDrinks.map((drink, index) => (<MenuItem key={drink.title + index} 
          title={drink.title} 
          price={drink.price} 
          tags={drink.tags} />
          ))}
        </div>
      </div>
      <div className="specialMenu__part3-part2">
            <img src={images.orange} alt="" />
      </div>
      <div className="specialMenu__part3-part1">
        <div>
          <p className='part3-part1-header'>Cold Drinks</p>
        </div>

        <div>
          {data.coldDrinks.map((drink, index) => (<MenuItem key={drink.title + index} 
          title={drink.title} 
          price={drink.price} 
          tags={drink.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="specialMenu__part4">
      <button type='button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
