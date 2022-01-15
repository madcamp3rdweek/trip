import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          All Around Travel WebPage
        </p>
        <div className='footer-subscription-text'>
          JaeWoo Kim, SeungKu Kim
          <br/>
          KAIST
        </div>
      </section>
      
    </div>
  );
}

export default Footer;