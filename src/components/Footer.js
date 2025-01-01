import React from 'react';

import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
            <img id="logo-img" src="/portfolio/logo.png" alt="Logo"/>
          <p>Invigorating digital realms.</p>
          <div className="social-links d-flex justify-content-center">
            <SocialMediaIcons/>
          </div>
        </div>
      </footer>
    </div>
  )
}
