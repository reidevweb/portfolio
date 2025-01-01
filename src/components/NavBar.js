import React from 'react'

import PageItem from './NavPageItem';

export default function NavBar ({pages}) {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img id="logo-img" src="/logo.png" alt="Logo"/>
            </div>
            
            <div className="page-links">
                {pages.map((page, index) => (
                    <PageItem key={`page-${index}`} text={page}/>
                ))}
            </div>
        </div>
    );
}