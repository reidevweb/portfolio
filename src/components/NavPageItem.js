import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function PageItem({ text, hasSubmenu, children }) {
    const location = useLocation();
    const [isHovered, setIsHovered] = useState(false);

    const id = text?.toLowerCase().replace(/\s+/g, '-');
    let link = `/`;
    let isActive = location.pathname === link; 
    
    if(text !== "Home") {
        link = `/${id}`;
        isActive = location.pathname.includes(link); 
    }

    return (
        <Link to={link}>
            <div 
                className={`nav-page ${isActive ? 'nav-page-active' : ''}`} 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
            >
                
                <p className="d-flex align-items-center m-0">
                    {text}
                    {hasSubmenu && <i className="fas fa-chevron-down dropdown-icon ms-2"></i>}
                </p>
            
                {hasSubmenu && (
                    <ul className={`dropdown-menu ${isHovered ? 'show' : ''}`}>
                        {children}
                    </ul>
                )}
            </div>
        </Link>
    );
}
