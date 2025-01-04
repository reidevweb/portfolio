import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

const GalleryItem = ({ id, imgSrc, type, title, description, category, isLightbox = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);
  const lightboxRef = useRef(null);
  const lightboxInstance = useRef(null);  // Use ref to store lightbox instance

  const className = isLightbox ? 'glightbox' : '';
  const imgUrl = isLightbox ? `/portfolio/gallery/${imgSrc}` : '';
  const lightboxUrl = isLightbox ? `/gallery/${imgSrc}` : '';

  useEffect(() => {
    if (isLightbox && lightboxInstance.current === null) {
      lightboxInstance.current = GLightbox({
        selector: '.glightbox',
        caption: (el) => el.getAttribute('data-description'),
      });
    }

    return () => {
      if (lightboxInstance.current) {
        lightboxInstance.current.destroy();
        lightboxInstance.current = null;  
      }
    };
  }, [isLightbox]);  

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div key={`img-${id}`} className={`gallery-item col-lg-4 col-md-6 portfolio-item isotope-item ${category}`}>
      <Link 
        to={lightboxUrl} 
        data-gallery="portfolio-gallery-app" 
        className={className} 
        data-description={description}
        ref={lightboxRef}
      >
        <img 
          ref={imgRef}
          src={imgUrl} 
          className={`img-fluid gallery-img ${isVisible ? 'visible' : ''}`} 
          alt={title}
          loading="lazy"
        />
        <div className="gallery-info">
        <p id="gallery-title" className="m-0">{title}</p>   
          <div id="gallery-type" className="m-0">{type}</div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryItem;
