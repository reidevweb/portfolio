import React, { useState, useEffect, useRef } from 'react';

export default function Services() {
  const [isInView, setIsInView] = useState(false);

  const skills = [
    'Mobile Application',
    'Web Development',
    'Database Management',
    'UI/UX Design'
  ];

  const colors = [
    '#d8b345',
    '#319fb1',
    '#792973',
    '#3e6abf'
  ];

  const servicesRef = useRef(null); 
  const titleRef = useRef(null);  
  const subtitleRef = useRef(null);  

  const skillRefs = useRef(skills.map(() => React.createRef()));

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

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isInView) {
      titleRef.current.classList.add('animate-in');
      subtitleRef.current.classList.add('animate-in');
    }
  }, [isInView]);

  useEffect(() => {
    const skillObservers = skillRefs.current.map((ref, index) => {
      const skillObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            ref.current.classList.add('animate-in');
          } else {
            ref.current.classList.remove('animate-in'); 
          }
        },
        { threshold: 0.5 }
      );
      if (ref.current) {
        skillObserver.observe(ref.current);
      }

      return skillObserver;
    });

    return () => {
      skillObservers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div className="services" ref={servicesRef}>
      <h1 className="d-flex justify-content-center align-items-center display-3 mt-3" ref={titleRef}>
        What I do
      </h1>
      <div className="text-center">
        <div className="fs-3 fw-light text-muted subtitle" ref={subtitleRef}>
          Passion and curiosity drives me to strive
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="col-xl-3 col-sm-6"
              ref={skillRefs.current[index]}
            >
              <div className="skill-box d-flex justify-content-center align-items-center text-center p-4 rounded">
                <div
                  key={index}
                  className="skill-bullet"
                  style={{ backgroundColor: colors[index] }}
                >
                </div>
                <div className="skill-text ml-3">
                  {skill}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
