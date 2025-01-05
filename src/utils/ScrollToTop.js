import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ScrollToTopLink = () => {
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isAtTop && (
        <Link to="/projects/featured">
          <button className="scroll-to-link-btn">Go to Featured Projects</button>
        </Link>
      )}
    </div>
  );
};

export default ScrollToTopLink;
