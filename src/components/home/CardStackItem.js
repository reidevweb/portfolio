import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 

export default function CardStackItem({
  index, middleIndex, hoveredIndex, content, title, onMouseEnter, onMouseLeave, hoverClass
}) {
  const [isVisible, setIsVisible] = useState(false);  
  const sectionRef = useRef(null);
  const formattedTitle = title.trim().replace(/\s+/g, '').toLowerCase();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);  
          }, 500); 
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.4 }
    );
  
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  

  let classCard = '';
  let cardTransform = '';

  if (index > 0) {
    classCard = 'not-first';
  }

  if (index === middleIndex) {
    classCard += ' front';
  } else if (index < middleIndex) {
    classCard += ' left-slanted';
    cardTransform = 'transform: rotate(-8deg)';
  } else {
    classCard += ' right-slanted';
    cardTransform = 'transform: rotate(8deg)';
  }

  if (hoveredIndex !== index && hoveredIndex !== null) {
    cardTransform += ' translateY(10%)';
  }

  return (
    <Link to="/projects/featured">
      <div
        className={`card ${classCard} ${hoverClass}`}
        style={{
          transform: cardTransform,
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={sectionRef}  
      >
        {index === middleIndex && (
          <div className="tooltip-container d-flex justify-content-center" style={{ position: 'relative' }}>
            <span className={`mobile-tooltip up ${isVisible ? 'show' : ''} ${formattedTitle}`}>
              {title}
            </span>
          </div>
        )}
  
        <img src={content} alt={content} />
  
        {index !== middleIndex && (
          <div
            className={`tooltip-container d-flex ${index === 2 ? 'justify-content-end' : 'justify-content-start'}`}
            style={{ position: 'relative' }}
          >
            <span
              className={`mobile-tooltip down ${index === 0 ? 'left' : 'right'} ${isVisible ? 'show' : ''} ${formattedTitle}`}
            >
              {title}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
