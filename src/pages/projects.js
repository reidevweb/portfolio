import React from 'react';

import Gallery from '../components/projects/Gallery';
import Footer from '../components/Footer';

export default function Projects() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Harvesteer',
      imgSrc: 'portfolio/a.png',
      category: 'Mobile App',
    },
    {
      id: 2,
      title: 'E-Book',
      imgSrc: 'portfolio/b.png',
      category: 'Mobile App',
    },
    {
      id: 3,
      title: 'E-Book',
      imgSrc: 'portfolio/c.png',
      category: 'Mobile App',
    },
    {
      id: 4,
      title: 'Our Home',
      imgSrc: 'portfolio/d.png',
      category: 'Mobile App',
    },
    {
      id: 5,
      title: 'Our Home',
      imgSrc: 'portfolio/e.png',
      category: 'Website',
    },
    {
      id: 6,
      title: 'Our Home',
      imgSrc: 'portfolio/f.png',
      category: 'Website',
    },
    {
      id: 7,
      title: 'The Cerve',
      imgSrc: 'portfolio/g.png',
      category: 'Mobile App',
    },
    {
      id: 8,
      title: 'The Cerve',
      imgSrc: 'portfolio/h.png',
      category: 'Mobile App',
    },
    {
      id: 9,
      title: 'The Cerve',
      imgSrc: 'portfolio/i.png',
      category: 'Mobile App',
    },
    {
      id: 10,
      title: 'The Cerve',
      imgSrc: 'portfolio/j.png',
      category: 'Mobile App',
    },
    {
      id: 11,
      title: 'The Cerve',
      imgSrc: 'portfolio/k.png',
      category: 'Website',
    },
    {
      id: 12,
      title: 'The Cerve',
      imgSrc: 'portfolio/l.png',
      category: 'Website',
    },
    {
      id: 13,
      title: 'The Cerve',
      imgSrc: 'portfolio/m.png',
      category: 'Website',
    },
    {
      id: 14,
      title: 'The Cerve',
      imgSrc: 'portfolio/n.png',
      category: 'Website',
    },
    {
      id: 15,
      title: "Phefayer's",
      imgSrc: 'portfolio/p.png',
      category: 'Website',
    },
    {
      id: 16,
      title: "Phefayer's",
      imgSrc: 'portfolio/q.png',
      category: 'Website',
    },
  ];
  
  return (
    <>
      <main>
        <h2>Projects</h2>
        <Gallery 
          id="Projects" 
          items={portfolioItems}
          />
      </main>
      
      <Footer/>
    </>
  );
}
