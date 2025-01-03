import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedItem({ imgSrc, category, title, description, utils, inProjects }) {
    let contentStyle = inProjects ? 'between' : 'center';
    
    return (
        <div id={`${inProjects ? 'featured-list' : 'home-featured'}`} className={`d-flex justify-content-${contentStyle} align-items-center`}>
            {inProjects && 
                <div className="pr-5">
                    <p className={`featured-header ${inProjects ? 'hidden' : ''}`}>Featured Content</p>
                    <p className="feature-title">{title}</p>
                    <p className="feature-desc">{description}</p>
                    
                    <div className="pt-5">
                        <Link to="/featured?title=harvesteer">
                            <button className="outline-btn featured-btn">
                                Read more
                            </button>
                        </Link>
                    </div>
                    
                    <div className="mt-5">
                        {utils && utils.map((item, index) => (
                            <img className="feature-utils" src={`/portfolio/utils/${item}`} alt="Logo"/>
                        ))}
                    </div>
                </div>
            }
            <img id="feature-img" src={`/portfolio/${imgSrc}`} alt="Logo" className="img-fluid" />
        </div>
    );
}


