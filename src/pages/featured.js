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
      imgSrc: "a.png",
      category: ["Mobile App"],
      utils: ["flutter.png", "django.png"],
      description: "A machine learning-based",
    },
    {
      id: 2,
      title: "Kule",
      imgSrc: "web-feature.png",
      category: ["Mobile App"],
      utils: ["flutter.png", "django.png"],
      description: "A machine learning-based",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!inProjects) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % featuredItems.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Cleanup interval on unmount
    }
  }, [featuredItems.length, inProjects]);

  const goToSlide = (index) => setActiveIndex(index);

  return (
    <>
      {!inProjects ? (
        <div id="carouselExampleIndicators" className="carousel slide">
          <ol className="carousel-indicators">
            {featuredItems.map((_, index) => (
              <li
                key={`indicator-${index}`}
                className={index === activeIndex ? "active" : ""}
                onClick={() => goToSlide(index)}
              ></li>
            ))}
          </ol>
          <div className="carousel-inner">
            {featuredItems.map((item, index) => (
              <div
                key={`feature-${item.id}${index}`}
                className={`carousel-item ${index === activeIndex ? "active" : ""}`}
              >
                <FeaturedItem
                  id={item.id}
                  imgSrc={item.imgSrc}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  utils={item.utils}
                  inProjects={inProjects}
                />
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            role="button"
            onClick={() =>
              setActiveIndex((prevIndex) =>
                prevIndex === 0 ? featuredItems.length - 1 : prevIndex - 1
              )
            }
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            role="button"
            onClick={() =>
              setActiveIndex((prevIndex) => (prevIndex + 1) % featuredItems.length)
            }
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      ) : (
        <main>
          <h2>Featured Projects</h2>
          {featuredItems.map((item, index) => (
            <FeaturedItem
              key={`feature-${item.id}${index}`}
              id={item.id}
              imgSrc={item.imgSrc}
              category={item.category}
              title={item.title}
              description={item.description}
              utils={item.utils}
              inProjects={inProjects}
            />
          ))}
          <Footer />
        </main>
      )}
    </>
  );
}
