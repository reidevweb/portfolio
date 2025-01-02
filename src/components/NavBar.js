import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import PageItem from './NavPageItem';

export default function NavBar ({pages}) {
    return (
        <div className="nav-bar">
            <div className="logo">
                <img id="logo-img" src="/portfolio/logo.png" alt="Logo"/>
            </div>
            
            <div className="page-links">
                {Object.entries(pages).map(([key, submenu], index) => (
                    <PageItem hasSubmenu={submenu.length > 0} key={`page-${index}`} text={key}
                    >
                        {submenu.length > 0 && submenu.map((subPage, subIndex) => (
                            <li key={`subpage-${subIndex}`}>
                                <Link to={`${key?.toLowerCase().replace(/\s+/g, '-')}/${subPage.toLowerCase().replace(/\s+/g, '-')}`}>
                                    <ul>{subPage}</ul>
                                </Link>
                            </li>
                        ))}
                    </PageItem>
                ))}
            </div>
        </div>
    );
}