import React from 'react';
import { Link } from 'react-router-dom'

import CardStack from '../components/home/CardStack';
import SelfIntro from '../components/home/SelfIntro';
import Footer from '../components/Footer';

export default function About() {
    return (
        <>
            <main>
                <h2>About</h2>
                <div className="about-container">
                    <div id="about" className="box-container">
                        <div className="box">
                            <img src="/portfolio/Self.png" alt="Cat Care"/>
                            <div className="info">
                                <h1>Hi, I'm <span style={{ color: '#79293c' }}>Reina</span>!</h1>
                                <p>
                                As a passionate designer, mobile and web developer, I am constantly learning skills and techniques to solve problems and create solution. I embrace the relentless pursuit of excellence, fueling innovation and propelling progress in the digital realm.
                                I possess knowledge in several programming languages, allowing me to develop innovative and functional solutions for various systems and projects. My dedication to delivering excellence in both design and programming ensures that I am well-equipped to meet the demands of your digital needs.
                                </p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <ul>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+(639) 087 031 065</span></li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Quezon City, Metro Manila, Philippines</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                          <li>
                                            <i className="bi bi-chevron-right"></i> <strong>Email:</strong> 
                                            <span>
                                                <a href="mailto:tiburcio.reina@gmail.com" className="email-link">tiburcio.reinac@gmail.com</a>
                                            </span>
                                          </li>
                                          <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <div className="info">
                                {/* <h1>Skills</h1> */}
                                <div className="row">
                                    <div className="rec col-lg-6">
                                        <h3>Software Skills</h3>
                                        <ul>
                                          <li><strong>Figma</strong></li>
                                          <li><strong>WordPress</strong></li>
                                          <li><strong>Photoshop</strong></li>
                                          <li><strong>Microsoft</strong></li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3>Programming Languages</h3>
                                        <ul>
                                            <li><strong>Dart</strong></li>
                                            <li><strong>Python</strong></li>
                                            <li><strong>PHP</strong></li>
                                            <li><strong>SQL</strong></li>
                                            <li><strong>C#</strong></li>
                                            <li><strong>Java</strong></li>
                                            <li><strong>JS</strong></li>
                                            <li><strong>CSS</strong></li>
                                            <li><strong>HTML</strong></li>
                                        </ul>
                                    </div>
                                    <div className="rec col-lg-6">
                                        <h3>Frameworks</h3>
                                        <ul>
                                            <li><strong>Flutter</strong></li>
                                            <li><strong>Django</strong></li>
                                            <li><strong>Laravel</strong></li>
                                            <li><strong>.NET</strong></li>
                                            <li><strong>NestJS</strong></li>
                                            <li><strong>ReactJS</strong></li>
                                            <li><strong>Tailwind</strong></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
