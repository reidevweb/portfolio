import React, { useState, useEffect } from 'react';

const FeaturedSlider = ({ title, count, count_v2 }) => {
  let images = Array.from({ length: count }, (_, index) => ({
    src: `/portfolio/gallery/${title}-${index + 1}.png`,
    alt: `Image-${index + 1}`,
  }));
  
  let additionalImages = Array.from({ length: count_v2 }, (_, index) => ({
    src: `/portfolio/gallery/${title} Web-${index + 1}.png`,
    alt: `Image-${index + 1}`,
  }));
  
  let combinedImages = [...images, ...additionalImages];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

  const groupSize = isSmallScreen ? 2 : 3;
  const remainder = combinedImages.length % groupSize;
  const blanksNeeded = remainder === 0 ? 0 : groupSize - remainder;

  for (let i = 0; i < blanksNeeded; i++) {
    combinedImages.push({
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
    setCurrentIndex((prevIndex) => (prevIndex + groupSize) % combinedImages.length); 
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - groupSize + combinedImages.length) % combinedImages.length
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
              (currentIndex % (combinedImages.length - (isSmallScreen ? 1 : 2))) *
              (100 / groupSize)
            }%)`,
            transition: 'transform 0.5s ease',
            width: `${Math.ceil(combinedImages.length / groupSize) * 100}%`,
            display: 'flex',
          }}
        >
          {combinedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              style={{
                width: isSmallScreen ? '50%' : '33.33%',
                flexShrink: 0,
                opacity:
                  index < currentIndex ||
                  index >= currentIndex + groupSize
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

          {combinedImages.length % groupSize === 1 && (
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
          length: Math.ceil(combinedImages.length / groupSize),
        }).map((_, index) => (
          <span
            key={index}
            className={`indicator ${
              index === Math.floor(currentIndex / groupSize)
                ? 'active'
                : ''
            }`}
            onClick={() => setCurrentIndex(index * groupSize)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
