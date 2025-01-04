import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

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
      imgSrc: "featured/web-feature.png",
      category: ["Mobile App"],
      utils: ["flutter.png", "django.png", "firebase.png", "postgresql.png", "redis.png"],
      description: "A machine learning-based",
      color: 'rgb(192, 192, 192)',
    },
    {
      id: 2,
      title: "CodeHub",
      count: 3,
      imgSrc: "featured/web-feature.png",
      category: ["Mobile App"],
      utils: ["react.png", "tailwind.png", "nestJS.png"],
      description: "A machine learning-based",
      color: 'rgb(192, 192, 192)',
    }
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
            <h2>Recent Projects</h2>
            {featuredItems.map((item, index) => (
              <FeaturedItem
                key={`feature-${item.id}${index}`}
                id={item.id}
                imgSrc={item.imgSrc}
                category={item.category}
                title={item.title}
                count={item.count}
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
