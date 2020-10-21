import React from 'react';
import { Button } from '../layout/Button';
import { Link } from 'react-router-dom'
import '../styles/HeroSection.css';
import '../styles/Game.css';
import video from '../../videos/video5.mp4'

import {Coordonees} from './Coordonees'

function HeroSection() {

  return (
    <div className='hero-container'>
      <video className='mainvideo' src ={video} autoPlay loop muted />
      <h1>Fatiha Boudyaf </h1>
      <h3>Developeuse Web Full Stack </h3>
      <div className='thegame'>
        <div className= 'girl-forward'></div>
      </div>
      <div className='tech'>
        <p className='p1'> HTML/CSS |</p>
        <p className='p2'> JavaScript |</p>
        <p className='p3'> React |</p>
        <p className='p4'> NodeJS |</p>
        <p className='p5'> Express|</p>
        <p className='p6'> Bootstrap |</p>
        <p className='p7'> PHP |</p>
        <p className='p8'> SQL  |</p>
        <p className='p9'> Photoshop</p>
      </div>

      <div className='hero-btns'>
        <Link to='/contact' className='btn2'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'
          >Contactez moi!</Button>
        </Link>
        <Link to='/Profile' className='btn2'>
          <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'
          >Accédez à mon profil <i className='far fa-play-circle' /></Button>
        </Link>
      </div>
      <Coordonees/>
      <br/>
    </div>
  );
}

export default HeroSection;
