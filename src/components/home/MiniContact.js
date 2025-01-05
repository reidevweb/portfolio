import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';  

export default function MiniContact() {
  const [isInView, setIsInView] = useState(false);

  const titleRef = useRef(null);  
  const subtitleRef = useRef(null); 
  const paragraphRef = useRef(null);  
  const buttonRef = useRef(null);  
  const contactRef = useRef(null);  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsInView(true);  
          }, 500); 
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      titleRef.current.classList.add('animate-in');
      subtitleRef.current.classList.add('animate-in');
      paragraphRef.current.classList.add('animate-in');
      buttonRef.current.classList.add('animate-in');
    }
  }, [isInView]);

  return (
    <section
      id="home-contact-section"
      className="d-flex justify-content-center align-items-center mt-5"
      style={{
        height: '100vh',
        backgroundImage: 'url("/portfolio/bg-contact.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      ref={contactRef}
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="heading-section text-center ftco-animate">
            <span className="subheading animate" ref={subtitleRef}>
              Get in Touch
            </span>
            <h2 className="mb-4 animate" ref={titleRef}>
              Let’s talk about your next project.
            </h2>
            <p className="animate" ref={paragraphRef}>
              I’m here to help bring your ideas to life, whether you’re starting a new project,
              refining an existing one, or overcoming a unique challenge. Let’s work together to
              create meaningful solutions.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <Link to="/contact">
            <button className="outline-btn intro-btn animate" ref={buttonRef}>Get Started</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
