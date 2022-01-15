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
        <p className='footer-subscription-text'>
          JaeWoo Kim, SeungKu Kim
        </p>
      </section>
      <Link to='/' className='social-logo'>
              KAIST
              <i class='fab fa-typo3' />
      </Link>
    </div>
  );
}

export default Footer;