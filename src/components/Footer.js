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
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              KAIST
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>KAIST © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;