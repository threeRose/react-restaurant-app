import React from 'react';
import images from '../../constants/images';
import image from '../../constants/images'
import { FiFacebook, FiTwitter, FiInstagram, FiGithub } from 'react-icons/fi';
import './Footer.css';;

const FooterPart1 = () => (
  <div className="footerPart1-Mother">
    <div className="footerPart1">
      <div className="footerPart1-1">
        <p>Newsletter</p>
        <img src={image.spoon} alt="" />
      </div>
      <div className="footerPart1-2">
        <h1>Subscribe To Our Newsletter</h1>
        <p>And Never Miss Latest Updates!</p>
      </div>
      <div className="footerPart1-3">
        <input type="text" placeholder='Enter Your Email Address' />
        <button className='first-btn'>Subscribe</button>
      </div>
    </div>
  </div>
)


const FooterPart2 = () => (
  <div className="footerPart2">
    <div className="footerPart2__part1">
      <div className="footerPart2__part1-1">
        <h1>Contact Us</h1>
        <p>Aksemsettin, Adnan Menderes Blv. No:54, 34080 Fatih/Istanbul</p>
        <a href="mailto:furkanucgulll@gmail.com">furkanucgulll@gmail.com</a>
        <a href="tel:+905535005315">(+90) 553 500 5315</a>
      </div>
      <div className="footerPart2__part1-2">
        <img src={images.gericht} alt="logo" />
        <p>"The Best Way To Find Yourself Is To Lose Yourself In The Service Of Others."</p>
        <img src={images.spoon} alt="spoon" />
        <div className='footerPart2__part1-2_icons'>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=100008407237987">
          <FiFacebook color='#fff' fontSize={20} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/Furkanucgulll">
          <FiTwitter color='#fff' fontSize={20} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/furkanucgul1/">
          <FiInstagram color='#fff' fontSize={20} />
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/threeRose">
          <FiGithub color='#fff' fontSize={20} />
          </a>
        </div>
      </div>
      <div className="footerPart2__part1-3">
        <h1>Working Hours</h1>
        <p>Monday-Friday:</p>
        <p>08:00 Am - 12:00 Am</p>
        <p>Saturday-Sunday:</p>
        <p>07:00 Am - 11:00 Pm</p>
      </div>
    </div>
    <div className="footerPart2__part2">
      This site cloned by Furkan Ucgul.
    </div>
  </div>
)



const Footer = () => (
  <div className="footer">
    <FooterPart1 />
    <FooterPart2 />
  </div>
);

export default Footer;
