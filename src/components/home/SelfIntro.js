import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom'; 

import SocialMediaIcons from '../SocialMediaIcons'

export default function SelfIntro() {
  const typedElement = useRef(null); 

  useEffect(() => {
    const typedStrings = typedElement.current.getAttribute('data-typed-items').split(',');

    const options = {
      strings: typedStrings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="self-intro" className="py-5">
      <div className="container pb-5">
          <div className="row gx-5 align-items-center">
              <div className="col-xxl-5">
                  <div className="text-center text-xxl-start">
                      <div className="fs-3 fw-light text-muted">I can help your business to</div>
                      
                      <h1 className="display-3 fw-bolder mb-5">Create Solutions. Drive Growth</h1>
                      
                      <Link to="/contact">
                        <button className="outline-btn intro-btn">
                            Get Started
                        </button>
                      </Link>
                      
                      <SocialMediaIcons/>
                  </div>
                </div>
                
                <div className="col-xxl-7">
                    <div className="d-flex justify-content-center mt-5 mt-xxl-0">
                    
                      <div className="self-card text-center border-0 mb-4">
                        <div className="card-cup">
                          <img id="self-img" src="/portfolio/Self.png" alt="Logo" />
                        </div>
      
                        <div className="card-body proavatar">
                          <h1>Reina Mariane</h1>
                          <h4>
                            I'm a <span className="career typed" ref={typedElement} data-typed-items="Designer, Developer">
                            </span>
                            <span className="typed-cursor typed-cursor--blink"></span>
                          </h4>
                        </div>
                      </div>
                      
                    </div>
                </div>
                
          </div>
      </div>
    </div>
  );
}

