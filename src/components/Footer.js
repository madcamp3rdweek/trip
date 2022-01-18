import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          TAKE : Take your own time.
        </p>
        <div className='footer-subscription-text'>
          MadCamp 3rd Week
          <br/>
          KAIST
        </div>
      </section>
      
    </div>
  );
}

export default Footer;