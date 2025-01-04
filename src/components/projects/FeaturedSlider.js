import React, { useState, useEffect } from 'react';

const FeaturedSlider = ({ title, count }) => {
  let images = Array.from({ length: count }, (_, index) => ({
    src: `/portfolio/gallery/${title}-${index + 1}.png`,
    alt: `Image-${index + 1}`,
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  
  if (count % (isSmallScreen ? 2 : 3) !== 0) {
    images.push({
      src: `/portfolio/gallery/blank.png`,
    });
  }

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint (768px) as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex + (isSmallScreen ? 2 : 3)) % images.length);
  };

  const prevImages = () => {
    setCurrentIndex((prevIndex) => (prevIndex - (isSmallScreen ? 2 : 3) + images.length) % images.length);
  };

  return (
    <div className="image-gallery">
      <div className="slider-container">
        <div
          className="gallery"
          style={{
            transform: `translateX(-${(currentIndex % (images.length - (isSmallScreen ? 1 : 2))) * (100 / (isSmallScreen ? 2 : 3))}%)`, // Adjust based on screen size
            transition: 'transform 0.5s ease',
            width: `${Math.ceil(images.length / (isSmallScreen ? 2 : 3)) * 100}%`, // Adjust container width based on image count
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
                opacity: index < currentIndex || index >= currentIndex + (isSmallScreen ? 2 : 3) ? 0 : 1, // Hide images not in view
                transition: 'opacity 0.5s ease',
                marginLeft: index === currentIndex
                  ? `${(Math.floor(currentIndex / (isSmallScreen ? 2 : 3)) * -2.5)}rem`
                  : '0%', 
              }}
              className={isSmallScreen && index >= count ? 'hidden' : ''}
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

      <div className="slider-indicators">
        {Array.from({ length: Math.ceil(images.length / (isSmallScreen ? 2 : 3)) }).map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === Math.floor(currentIndex / (isSmallScreen ? 2 : 3)) ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index * (isSmallScreen ? 2 : 3))} // Directly jump to the corresponding set
          ></span>
        ))}
      </div>
    </div>
  );
};

export default FeaturedSlider;
