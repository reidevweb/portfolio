import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FeaturedSlider from "./FeaturedSlider";

export default function FeaturedItem({ imgSrc, category, title, count, description, utils, inProjects }) {
    const [isExpanded, setIsExpanded] = useState(false);  // State to toggle description visibility
    const contentStyle = inProjects ? 'between' : 'center';

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>  
            {inProjects && 
                <div id="featured-intro" className="mx-5 align-justify mt-3">
                    <p className="feature-title mb-0">{title}</p>
                    <p className="feature-desc">
                        {description.length > 360 ? (
                            <>
                                <div className="text">
                                    <span>
                                        {isExpanded ? description : description.slice(0, 360)}
                                        <span style={{ display: isExpanded ? "none" : "inline" }} id="dots">...</span>
                                    </span>
                                    <span id="more-text" style={{ display: isExpanded ? "inline" : "none" }}>
                                        {description.slice(360)}
                                    </span>
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
                className={`d-flex ${inProjects ? '' : 'flex-column'} justify-content-${contentStyle} align-items-center`}
            >
                {inProjects && (
                    <div className="left-container d-flex flex-column justify-content-between h-100">
                        <div className="mt-3 mb-5 ml-2">
                            <p style={{fontSize: '1rem'}}>Developed using:</p>
                            {utils && utils.map((item, index) => (
                                <img key={index} className="feature-utils" src={`/portfolio/utils/${item}`} alt="Logo" />
                            ))}
                        </div>
                        <FeaturedSlider title={title} count={count} />
                    </div>
                )}
        
                <div className="right-container">
                    <img id="feature-img" src={`/portfolio/${imgSrc}`} alt="Logo" className="img-fluid" />
                </div>
        
                {!inProjects && <p className='feature-title mt-5'>{title}</p>}
            </div>
        </>
    );
}
