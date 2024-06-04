import React from 'react';
import './Hero.css';
import arrow from '../assets/arrow_btn.png';
import pause from '../assets/pause_icon.png';
import play from '../assets/play_icon.png';

function Hero({ HeroData, setHeroCount, heroCount, setPlayStatus, playStatus }) {
  return (
    <div className='Hero'>
      <div className="hero-text">
        <p>
          {HeroData.text1}
        </p>
        <p>
          {HeroData.text2}
        </p>
      </div>
      <div className="hero-explore">
        <p>
          Explore the features
        </p>
        <img src={arrow} alt='' />
      </div>
      <div className="all">
      <div className='hero-dot-play'>
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
        <div className="hero-play">
          <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause : play} alt="play-pause"></img>
          <p>See the video</p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Hero;
