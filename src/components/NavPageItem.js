import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

export default function PageItem({ text, hasSubmenu, children }) {
    const location = useLocation(); 
    let id = text.toLowerCase().replace(/\s+/g, '-');
    let link = `/`;
    let isActive = location.pathname === link; 
    
    if(text !== "Home") {
        link = `/${id}`;
        isActive = location.pathname.includes(link); 
    }

    return (
        <Link to={link} className={`nav-page ${isActive ? 'nav-page-active' : ''}`}> 
            <p>{text}</p>
        </Link>
    );
}
