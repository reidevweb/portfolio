import React, { useEffect, useRef } from 'react';

export default function Services() {
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
  
  return (
    <div className="services">
      <h1 className="d-flex justify-content-center align-items-center display-3 mt-3">What I do</h1>
      <div className="text-center">
        <div className="fs-3 fw-light text-muted">Passion and curiosity drives me to strive</div>
      </div>
      
      <div className="container py-5">
        <div className="row g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-xl-3 col-sm-6">
              <div className="skill-box d-flex justify-content-center align-items-center text-center p-4 rounded">
                <div key={index} className="skill-bullet" style={{ backgroundColor: colors[index] }}>
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
