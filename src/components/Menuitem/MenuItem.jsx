import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="menuItem">
    <div className="menuItem__part1">
      <div className="menuItem__part1-1">
        <p>{title}</p>
      </div>
      <div className="menuItem__part1-1-2">
        <div className="menuItem__part1-2">
          <div></div>
        </div>
        <div className="menuItem__part1-3">
          <p>{price}</p>
        </div>
      </div>
    </div>
    <div className="menuItem__part2">
      <p>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
