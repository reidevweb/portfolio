import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedItem({ inProjects }) {
    return (
        <div id={`${inProjects ? 'featured-list' : 'home-featured'}`} className="d-flex justify-content-between align-items-center">
            <div className="pr-5">
                <p className={`featured-header ${inProjects ? 'hidden' : ''}`}>Featured Content</p>
                <p className="feature-title">Harvesteer</p>
                <p>This is a description of the featured section. It provides some context and information about the content displayed in this section. Learn more and explore the features!</p>
                
                <div className="pt-5">
                    <Link to="/featured?title=harvesteer">
                        <button className="outline-btn featured-btn">
                            Read more
                        </button>
                    </Link>
                </div>
                
                <div className="mt-5">
                    <img className="feature-utils" src="/portfolio/utils/flutter.png" alt="Logo"/>
                    <img className="feature-utils" src="/portfolio/utils/django.png" alt="Logo"/>
                </div>
            </div>
            <img id="feature-img" src="/portfolio/web-feature.png" alt="Logo" className="img-fluid" />
        </div>
    );
}


