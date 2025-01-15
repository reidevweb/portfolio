import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FeaturedSlider from "./FeaturedSlider";

export default function FeaturedItem({ imgSrc, category, title, count, count_v2, description, utils, inProjects }) {
    const [isExpanded, setIsExpanded] = useState(false);  
    const [isLoaded, setIsLoaded] = useState(false);  

    const contentStyle = inProjects ? 'between' : 'center';

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div id="featured-list">  
            {inProjects && 
                <div id="featured-intro" className="mx-5 align-justify mt-3">
                    <p className="feature-title mb-0">{title}</p>
                    <p className="feature-desc">
                        {description.length > 360 ? (
                            <>
                                <div className="text">
                                    <span>
                                        {isExpanded ? description : description.slice(0, 360)}
                                        {!isExpanded && <span id="dots">...</span>}
                                    </span>
                                    {!isExpanded && (
                                        <span id="more-text" style={{ display: "none" }}>
                                            {description.slice(360)}
                                        </span>
                                    )}
                                </div>
                                <button onClick={toggleDescription} id="moreTextBtn" className='outline-btn intro-btn mt-3'>
                                    {isExpanded ? 'Read less' : 'Read more'}
                                </button>
                            </>
                        ) : (
                            description
                        )}
                    </p>
                </div>
            }

            <div 
                id={`${inProjects ? 'featured-item' : 'home-featured'}`} 
                className={`d-flex ${isLoaded ? 'fade-in-loaded' : 'fade-in'} ${inProjects ? '' : 'flex-column'} justify-content-${contentStyle} align-items-center`}
            >
                {inProjects && (
                    <div className="left-container d-flex flex-column justify-content-between h-100">
                        <div className="mt-3 mb-5 ml-2">
                            <p style={{fontSize: '1rem'}}>Developed using:</p>
                            {utils && utils.map((item, index) => (
                                <div class="util-tooltip-wrapper">
                                <img 
                                    class="feature-utils" 
                                    src={`/portfolio/utils/${item}`} 
                                    alt="Logo" 
                                />
                                <span class="tooltip-text">{item.split('.')[0]}</span>
                            </div>
                            
                            ))}
                        </div>
                        <FeaturedSlider title={title} count={count} count_v2={count_v2} onLoad={handleImageLoad} />
                    </div>
                )}

                <div className={`right-container ${isLoaded ? 'fade-in-loaded' : 'fade-in'}`}>
                    <img 
                        id="feature-img" 
                        src={`/portfolio/${imgSrc}`} 
                        alt="Logo" 
                        className="img-fluid" 
                        onLoad={() => {
                            handleImageLoad();  
                        }} 
                    />
                </div>

                {!inProjects && <p className='feature-title mt-5'>{title}</p>}
            </div>
        </div>
    );
}
