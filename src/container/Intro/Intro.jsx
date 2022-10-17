import React, { useState } from 'react';
import { meal } from '../../constants';
import {BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import './Intro.css';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const vidRef = React.useRef();

  return (
    <div className="intro">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="intro__buttons">
        <div className="intro__buttons-circle" onClick={() => {
          setPlayVideo(!playVideo);
          if (playVideo) {
            vidRef.current.pause();
          } else {
            vidRef.current.play();
          }
          }}>
          
          {playVideo ? (
            <BsPauseFill color='#fff' fontSize={23} />
          ) : (
            <BsFillPlayFill color='#fff' fontSize={23} />
          )}
        </div>
      </div>
    </div>
  )

};

export default Intro;
