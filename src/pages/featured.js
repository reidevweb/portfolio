import React from 'react';
import Footer from '../components/Footer';
import { useLocation, Link } from 'react-router-dom';

import FeaturedItem from '../components/projects/FeaturedItem';

export default function Featured() {
    const location = useLocation();
    // const params = new URLSearchParams(location.search);
    // const title = params.get('title');
    let inProjects = location.pathname.includes('projects'); 
    
    return (
        <>
          <main>
            <h2>Featured Projects</h2>
            {/* <Gallery 
              id="Projects" 
              items={portfolioItems}
              /> */}
              <FeaturedItem inProjects={inProjects}></FeaturedItem>
          </main>
          
          <Footer/>
        </>
      );
}


