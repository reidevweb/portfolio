import React, { useEffect, useRef } from 'react';

export default function Services() {
  return (
    <div className="services m-5">
      <h1 className="d-flex justify-content-center align-items-center display-3">What I do</h1>
      <div className="text-center">
        <div className="fs-3 fw-light text-muted">Passion and curiosity drives me to strive</div>
      </div>
      
      <div className="container py-5">
        <div className="row g-4">
          {["Web Development", "UI/UX Design", "Database Management", "Mobile Apps"].map((skill, index) => (
            <div key={index} className="col-md-3 col-sm-6">
              <div className="skill-box text-center p-4 rounded">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
