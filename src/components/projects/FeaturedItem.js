import React from 'react';
import { Link } from 'react-router-dom';

import FeaturedSlider from "./FeaturedSlider";

export default function FeaturedItem({ imgSrc, category, title, count, description, utils, inProjects }) {
    let contentStyle = inProjects ? 'between' : 'center';
    
    return (
        <>  
            {inProjects && 
                <div className="mx-5 align-justify mt-3">
                    <p className="feature-title mb-0">{title}</p>
                    <p className="feature-desc">{description}</p>
                </div>
            }
            <div 
                id={`${inProjects ? 'featured-list' : 'home-featured'}`} 
                className={`d-flex ${inProjects ? '' : 'flex-column'} justify-content-${contentStyle} align-items-center`}
            >
                {inProjects && (
                   
                        <div 
                            className="left-container d-flex flex-column justify-content-between h-100"
                        >
                            {/* <div className="pt-5">
                                <Link to="/featured?title=harvesteer">
                                    <button className="outline-btn featured-btn">
                                        Read more
                                    </button>
                                </Link>
                            </div> */}
            
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


