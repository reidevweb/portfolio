import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const GalleryItem = ({ id, imgSrc, title, description, category, isLightbox = false}) => {
  const className = isLightbox ? 'glightbox' : '';
  const url = isLightbox ? `/${imgSrc}` : '';
  
  useEffect(() => {
    if (isLightbox) {
      const lightbox = GLightbox({
        selector: '.glightbox',
      });
  
      return () => {
        lightbox.destroy(); 
      };
    }
  }, [isLightbox]);
  
  return (
    <div key={`img-${id}`} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${category}`}>
      <Link to={url} data-gallery="portfolio-gallery-app" className={className}>
        <img src={url} className="img-fluid" alt={title} />
      </Link>
    </div>
  );
};

export default GalleryItem;
