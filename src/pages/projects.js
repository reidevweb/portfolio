import React from 'react';

import Gallery from '../components/projects/Gallery';
import Footer from '../components/Footer';

function generatePortfolioItems(itemDefinitions) {
  const items = [];
  let id = 1;

  itemDefinitions.forEach(({ name, count, category, type, description }) => {
    for (let i = 1; i <= count; i++) {
      items.push({
        id: id++,
        imgSrc: `${name}-${i}.png`,  
        category: category || 'General',
        type: type || null,
        description: description || null,
      });
    }
  });

  return items;
}

const itemDefinitions = [
  { name: 'Harvesteer', count: 6, category: 'Mobile App'},
  { name: 'Harvesteer Web', count: 1, category: 'Web Development'},
  { name: 'Kulekt', count: 5, category: 'Mobile App' },
  { name: 'The Cerve', count: 8, category: 'Web Development' },
  { name: 'Lavenry', count: 2, category: 'Mobile App' },
  { name: 'Our Home', count: 3, category: 'Web Development' },
  { name: 'Life Blog', count: 1, category: 'Web Development' },
  //{ name: 'CodeHub', count: 3, category: 'Web Development' },
  { name: 'Student Management System', count: 1, category: 'Web Development', title: 'The Cerve' },
  { name: "Phefayer's Restaurant Website", count: 2, category: 'Web Development' },
];

const portfolioItems = generatePortfolioItems(itemDefinitions).map((item) => {
  if (!item.title && item.imgSrc) {
    const filteredTitle = item.imgSrc.split('Web')[0]; 
    const dynamicTitle = filteredTitle.split('-')[0]; 
    item.title = dynamicTitle.charAt(0).toUpperCase() + dynamicTitle.slice(1); 
  }
  return item;
});

export default function Projects() {
  return (
    <>
      <main>
        <h2>Gallery</h2>
        <Gallery 
          id="Projects" 
          items={portfolioItems}
        />
      </main>
      
      <Footer />
    </>
  );
}
