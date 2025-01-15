import React from 'react';
import SocialMediaIcons from './SocialMediaIcons';

export default function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container mt-3">
          <div className="row d-flex justify-content-between align-items-center">
            
            {/* Contact Section */}
            <div className="col-lg-4 d-flex flex-column align-items-start custom-block">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p><i className="fas fa-home mr-3"></i> Nueva Ecija, Philippines </p>
              <p><i className="fas fa-envelope mr-3"></i> <span><a href="mailto:re@example.com" className="email-link">tiburcio.reinac@example.com</a></span> </p>
            </div>

            {/* Center Section: Logo and Quote */}
            <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center">
              <img id="logo-img" src="/portfolio/logo.png" alt="Logo" />
              <p className="quote text-center">Invigorating digital realms.</p>
            </div>

            {/* Social Media Section */}
            <div className="social-links col-lg-4 d-flex justify-content-end custom-block">
              <SocialMediaIcons />
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}
