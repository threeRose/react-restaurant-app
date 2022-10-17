import React, { useState } from 'react';
import images from '../../constants/images'
import './Navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)


  return (


    <nav className='nav'>
      <div className='nav__logo'>
        <img src={images.gericht} alt="" />
      </div>

      <div className="nav__links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Menu</a>
        <a href="#awards">Awards</a>
        <a href="#contact">Contact</a>
      </div>



      <div className="nav__login">
        <a href="/#">Log In / Register</a>
        <div />
        <a href="/#">Book Table</a>
      </div>

      
      <div className='nav__menu'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => (
          setToggleMenu(true)
        )} />

        {toggleMenu &&
          <div className="nav__menu-mobile slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="MdOutIcon" onClick={() => setToggleMenu(false)} />
            <div className="nav__menu-mobile-content">
              <ul className='nav__menu-mobile_ul'>
                <li>
                  <a href="#home" onClick={() => setToggleMenu(false)}>Home</a>
                </li>
                <li>
                  <a href="#about" onClick={() => setToggleMenu(false)}>About</a>
                </li>
                <li>
                  <a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a>
                </li>
                <li>
                  <a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a>
                </li>
                <li>
                  <a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        }
      </div>

    </nav>
  )
};

export default Navbar;
