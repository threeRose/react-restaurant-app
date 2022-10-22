import React from 'react';
import images from '../../constants/images';

import './Header.css';

const Header = () => (
  <div>
    <div className="header">
      <div className="header__part1">
        <div>
          <p>Chase The New Flavour</p>
          <img src={images.spoon} alt="" />
        </div>
        <div>
          <h1>THE KEY TO FINE DINING</h1>
        </div>
        <div>
          <p>Sit Tellus Lobortis Sed Senectus Vivamus Molestie. Condimentum Volutpat Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet Tellus</p>
        </div>
        <div>
          <button className='first-btn'>Explore Menu</button>
        </div>
      </div>

      <div className="header__part2">
        <img src={images.welcome} alt="" />
      </div>

    </div>
  </div>
);

export default Header;
