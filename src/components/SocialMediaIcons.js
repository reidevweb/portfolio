import React from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function CardDetail() {
  return (
    <div className="social-media-icons">
      <Link to="https://www.facebook.com/rmtiburcio/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
      </Link>
      <Link to="https://www.linkedin.com/in/rmtiburcio" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
      </Link>
      <Link to="https://www.github.com/reidevweb" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
      </Link>
  </div>
  )
}
