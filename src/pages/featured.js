import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

import Footer from "../components/Footer";
import FeaturedItem from "../components/projects/FeaturedItem";

export default function Featured() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("title");
  let inProjects = location.pathname.includes("projects");

  const featuredItems = [
    {
      id: 1,
      title: "Harvesteer",
      count: 6,
      count_v2: 1,
      imgSrc: "featured/harvesteer.png",
      category: ["Mobile App"],
      utils: ["flutter.png", "django.png", "firebase.png", "postgresql.png", "redis.png"],
      description: "A machine learning-based crop management app designed to address the problems encountered by an accredited organic practitioner whose research focuses on organic fertilizer production and its utilization in agriculture. The system helps evaluate their operations with features such as expense and sales tracking, task management, timely harvest guidance through predictions, and report generation for smarter crop planning. It addresses identified user pain points by promoting optimized resource and labor use as well as strategic market planning through data visualizations and push notifications.",
      color: 'rgb(192, 192, 192)',
    },
    
    {
      id: 2,
      title: "Kule",
      count: 5,
      imgSrc: "featured/kule.png",
      category: ["Mobile App"],
      utils: ["flutterflow.png", "firebase.png"],
      description: "A content production and tracking system designed to address challenges from disorganized information flow, including announcements, important events, target deliverables, and various paperwork such as meeting minutes, articles, and multimedia materials, across multiple tools like shared documents and text messages. The system streamlines the organization's processes by automating information forwarding based on a defined hierarchical structure, batch scanning QR codes for efficient attendance tracking, and offering easier and centralized access to all publication data.",
      color: 'rgb(192, 192, 192)',
    },
    // {
    //   id: 3,
    //   title: "CodeHub",
    //   count: 3,
    //   imgSrc: "featured/codehub.png",
    //   category: ["Mobile App"],
    //   utils: ["react.png", "tailwind.png", "nestJS.png"],
    //   description: "A code documentation and learning platform designed to serve as a central library for reusable components, providing faster and centralized access to commonly used functions, modules, and libraries from different frameworks and tools for software development.",
    //   color: 'rgb(192, 192, 192)',
    // },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // state to track the active slide
  const interval = 3000;

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + featuredItems.length) % featuredItems.length
    );
  };

  useEffect(() => {
    const autoSlide = setInterval(goToNextSlide, interval);

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <>
      {!inProjects ? (
        <div className="carousel-container">
          <div className="carousel">
            <div className="carousel-inner">
              {featuredItems.map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                  style={{
                    opacity: index === currentIndex ? 1 : 0,
                    transition: 'opacity 0.5s ease-in-out',
                    flex: '0 0 100%',
                    height: '100%',
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <FeaturedItem
                    id={item.id}
                    imgSrc={item.imgSrc}
                    category={item.category}
                    title={item.title}
                    count={item.count}
                    description={item.description}
                    utils={item.utils}
                    inProjects={inProjects}
                  />
                </div>
              ))}
            </div>

            <div className="carousel-controls">
              <span className="prev" onClick={goToPrevSlide}>
                <i className="fas fa-angle-left"></i>
              </span>
              <span className="next" onClick={goToNextSlide}>
                <i className="fas fa-angle-right"></i>
              </span>
            </div>

            <div className="carousel-indicators">
              {featuredItems.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <main>
            <h2>Featured Projects</h2>
            <div id="goToGalleryBtn" className="d-flex justify-content-end mr-5">
              <Link to="/projects/gallery">
                <button className="outline-btn intro-btn">
                  View Gallery
                </button>
              </Link>
            </div>
            <div className="mb-5"></div>
            {featuredItems.map((item, index) => (
              <FeaturedItem
                key={`feature-${item.id}${index}`}
                id={item.id}
                imgSrc={item.imgSrc}
                category={item.category}
                title={item.title}
                count={item.count}
                count_v2={item.count_v2}
                description={item.description}
                utils={item.utils}
                inProjects={inProjects}
              />
            ))}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
