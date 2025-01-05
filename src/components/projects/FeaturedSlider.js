import React, { useState, useEffect } from 'react';

const FeaturedSlider = ({ title, count }) => {
  let images = Array.from({ length: count }, (_, index) => ({
    src: `/portfolio/gallery/${title}-${index + 1}.png`,
    alt: `Image-${index + 1}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const groupSize = isSmallScreen ? 2 : 3;
  const remainder = count % groupSize;
  const blanksNeeded = remainder === 0 ? 0 : groupSize - remainder;

  for (let i = 0; i < blanksNeeded; i++) {
    images.push({
      src: `/portfolio/gallery/blank.png`,
      alt: 'Blank image',
    });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const interval = 3000; 
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length); // Change to 3 images
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + images.length) % images.length // Change to 3 images
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNextSlide, interval);
    return () => clearInterval(autoSlide);
  }, []);

  const openLightbox = (src) => {
    setLightboxImage(src);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div className="image-gallery">
      {isLightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxImage} alt="Lightbox Image" className="lightbox-image" />
        </div>
      )}

      <div className="slider-container">
        <div
          className="gallery"
          style={{
            transform: `translateX(-${
              (currentIndex % (images.length - (isSmallScreen ? 1 : 2))) *
              (100 / (isSmallScreen ? 2 : 3))
            }%)`,
            transition: 'transform 0.5s ease',
            width: `${Math.ceil(images.length / (isSmallScreen ? 2 : 3)) * 100}%`,
            display: 'flex',
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={{
                width: isSmallScreen ? '50%' : '33.33%',
                flexShrink: 0,
                opacity:
                  index < currentIndex ||
                  index >= currentIndex + (isSmallScreen ? 2 : 3)
                    ? 0
                    : 1,
                transition: 'opacity 0.5s ease',
                marginLeft:
                  index === currentIndex
                    ? `${(Math.floor(currentIndex / 3)) * -2.5}rem`
                    : '0%',
              }}
              className={isSmallScreen && index >= count ? 'hidden' : ''}
              onClick={() => openLightbox(image.src)} 
            />
          ))}

          {images.length % (isSmallScreen ? 2 : 3) === 1 && (
            <div
              style={{
                width: isSmallScreen ? '50%' : '33.33%',
                flexShrink: 0,
                backgroundColor: 'transparent',
                visibility: 'visible',
              }}
            />
          )}
        </div>
      </div>
     
      <div className="slider-nav justify-content-between d-flex">
        <span className="prev" onClick={goToPrevSlide}>
          <i className="fas fa-angle-left"></i>
        </span>
        <span className="next" onClick={goToNextSlide}>
          <i className="fas fa-angle-right"></i>
        </span>
      </div>

      <div className="slider-indicators">
        {Array.from({
          length: Math.ceil(images.length / (isSmallScreen ? 2 : 3)),
        }).map((_, index) => (
          <span
            key={index}
            className={`indicator ${
              index === Math.floor(currentIndex / (isSmallScreen ? 2 : 3))
                ? 'active'
                : ''
            }`}
            onClick={() => setCurrentIndex(index * (isSmallScreen ? 2 : 3))}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
