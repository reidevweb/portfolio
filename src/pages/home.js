import React from 'react';
import { Link } from 'react-router-dom'

import CardStack from '../components/home/CardStack';
import SelfIntro from '../components/home/SelfIntro';
import Featured from '../pages/featured';
import Services from '../components/home/Services';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <main id="home" style={{
              backgroundImage: 'url("/portfolio/bg-home.png")',
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat',
            }}>
                <SelfIntro />
                <Services />
                <CardStack />
                {/* <Featured /> */}
                <section
                  id="home-contact-section"
                  className="d-flex justify-content-center align-items-center mt-5" 
                  style={{ height: '100vh',
                    backgroundImage: 'url("/portfolio/bg-contact.png")',
                    backgroundSize: 'cover', 
                    backgroundRepeat: 'no-repeat', }}
                >
                  <div className="container">
                    <div className="row justify-content-center mb-5 pb-3">
                      <div className="heading-section text-center ftco-animate">
                        <span className="subheading">Get in Touch</span>
                        <h2 className="mb-4">Let’s talk about your next project.</h2>
                        <p>I’m here to help bring your ideas to life, whether you’re starting a new project, refining an existing one, or overcoming a unique challenge. Let’s work together to create meaningful solutions.</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to="/contact">
                        <button className="outline-btn intro-btn">Get Started</button>
                      </Link>
                    </div>
                  </div>
                </section>
            </main>
            
            <Footer/>
            
            <Link to="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </Link>
        </>
    );
}
