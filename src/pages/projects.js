import React from 'react';

import Gallery from '../components/projects/Gallery';
import Footer from '../components/Footer';

export default function Projects() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Harvesteer',
      imgSrc: 'a.png',
      category: 'Mobile App',
      type: 'Agriculture App',
      description: 'A machine learning-based'
    },
    {
      id: 2,
      title: 'E-Book',
      imgSrc: 'b.png',
      category: 'Mobile App',
    },
    {
      id: 3,
      title: 'E-Book',
      imgSrc: 'c.png',
      category: 'Mobile App',
    },
    {
      id: 4,
      title: 'Our Home',
      imgSrc: 'd.png',
      category: 'Mobile App',
    },
    {
      id: 5,
      title: 'Our Home',
      imgSrc: 'e.png',
      category: 'Website',
    },
    {
      id: 6,
      title: 'Our Home',
      imgSrc: 'f.png',
      category: 'Website',
    },
    {
      id: 7,
      title: 'The Cerve',
      imgSrc: 'g.png',
      category: 'Mobile App',
    },
    {
      id: 8,
      title: 'The Cerve',
      imgSrc: 'h.png',
      category: 'Mobile App',
    },
    {
      id: 9,
      title: 'The Cerve',
      imgSrc: 'i.png',
      category: 'Mobile App',
    },
    {
      id: 10,
      title: 'The Cerve',
      imgSrc: 'j.png',
      category: 'Mobile App',
    },
    {
      id: 11,
      title: 'The Cerve',
      imgSrc: 'k.png',
      category: 'Website',
    },
    {
      id: 12,
      title: 'The Cerve',
      imgSrc: 'l.png',
      category: 'Website',
    },
    {
      id: 13,
      title: 'The Cerve',
      imgSrc: 'm.png',
      category: 'Website',
    },
    {
      id: 14,
      title: 'The Cerve',
      imgSrc: 'n.png',
      category: 'Website',
    },
    {
      id: 15,
      title: "Phefayer's",
      imgSrc: 'p.png',
      category: 'Website',
    },
    {
      id: 16,
      title: "Phefayer's",
      imgSrc: 'q.png',
      category: 'Website',
    },
  ];
  
  return (
    <>
      <main>
        <h2>Gallery</h2>
        <Gallery 
          id="Projects" 
          items={portfolioItems}
          />
      </main>
      
      <Footer/>
    </>
  );
}
