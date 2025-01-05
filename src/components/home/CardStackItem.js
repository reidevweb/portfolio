import React from 'react';
import { Link } from 'react-router-dom';

export default function CardStackItem({ index, middleIndex, hoveredIndex, content, title, onMouseEnter, onMouseLeave, hoverClass}) {
    let classCard = '';
    let cardTransform = '';
    
    if (index > 0) {
        classCard = 'not-first';
    }
    
    if (index === middleIndex) {
        classCard += ' front';
    } else if (index < middleIndex) {
        classCard += ' left-slanted';
        cardTransform = 'transform: rotate(-8deg)';
    } else {
        classCard += ' right-slanted';
        cardTransform = 'transform: rotate(8deg)';
    }
    
    if(hoveredIndex !== index && hoveredIndex !== null) {
        cardTransform += ' translateY(10%)';
    }
    
    return (
        <div 
            className={`card ${classCard} ${hoverClass}`} 
            style={{ 
                transform: cardTransform,  
            }}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {index === middleIndex 
                && 
                <div className="tooltip-container d-flex justify-content-center" style={{ position: 'relative' }}>
                    <span className="mobile-tooltip up">{title}</span>
                </div>
            }
            <img src={content} alt={content} />
            {index !== middleIndex 
                &&
                <div className={`tooltip-container  d-flex ${index === 2 ? 'justify-content-end' : 'justify-content-start'}`} style={{ position: 'relative' }}>
                    <span className={`mobile-tooltip down ${index === 0 ? 'left' : 'right'}`}>
                        {title}
                    </span>
                </div>
            }
        </div>
    );
}

