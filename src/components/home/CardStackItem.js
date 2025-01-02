import React from 'react';
import { Link } from 'react-router-dom';

export default function CardStackItem({ index, middleIndex, hoveredIndex, content, onMouseEnter, onMouseLeave, hoverClass}) {
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
            <img src={content} alt={content} />
        </div>
    );
}

