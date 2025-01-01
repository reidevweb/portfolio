import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

import GalleryItem from './GalleryItem';

export default function Gallery({ id, items }) {
    const [filter, setFilter] = useState('*');
    const isotopeRef = useRef(null); // Reference for Isotope

    // useEffect(() => {
    //     const iso = new Isotope(isotopeRef.current, {
    //         itemSelector: '.portfolio-item',
    //         layoutMode: 'masonry',
    //     });

    //     iso.arrange({ filter });

    //     return () => {
    //         iso.destroy();
    //     };
    // }, [filter]);
    
    const itemCategories = ['All', ...new Set(items.map(item => item.category))];
    const itemFilters = ['*', ...new Set(items.map(item => `filter-${item.category.toLowerCase()}`))];
    
    return (
        <div className="index-page scrolled gscrollbar-fixer glightbox-open glightbox-mobile" data-aos-easing="ease-in-out" data-aos-duration="600" data-aos-delay="0">
            <div id="portfolio-gallery" className="portfolio section">
            <div className="container">
                <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                    {itemFilters.map((item, index) => {
                        const dataFilter = item !== '*' ? `.${item.replace(/\s+/g, '')}` : '*'; 

                        return (
                            <li 
                                key={`filter-${id}${index}`}
                                data-filter={dataFilter} 
                                onClick={() => setFilter(dataFilter)} 
                                className={filter === dataFilter ? 'active' : ''}
                            >
                                {itemCategories[index]}
                            </li>
                        );
                    })}
                </ul>

                <div id="portfolio-images" ref={isotopeRef} className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                    {items.map((item, index) => (
                        <GalleryItem 
                            key={`gallery-${id}${index}`}
                            id={id} 
                            imgSrc={item.imgSrc}
                            title={item.title}
                            description={item.description}
                            category={`filter-${item.category.toLowerCase().replace(/\s+/g, '')}`}
                            isLightbox={true}
                        />
                    ))}
                </div>
            </div>
        </div>
        </div>
    );
}
