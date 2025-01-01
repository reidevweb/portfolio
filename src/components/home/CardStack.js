import React, { Component } from 'react';
import CardStackItem from './CardStackItem';

export default class CardStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredIndex: null,
            cards: ['/portfolio/1.png', '/portfolio/2.png', '/portfolio/3.png'],
        };
    }

    handleMouseEnter = (index) => {
        this.setState({ hoveredIndex: index });
    };

    handleMouseLeave = () => {
        this.setState({ hoveredIndex: null });
    };
    
    handleArrowClick() {
        const cards = [...this.state.cards];
        const lastCard = cards.pop();
        cards.unshift(lastCard);
        this.setState({ cards });
    }
    

    render() {
        const cardLength = this.state.cards.length;
        const middleIndex = Math.floor(cardLength / 2);

        return (
            <div id="home-proj" >
                <div id="cards-banner-container">
                    <div id="cards-banner" className="cards-container">
                        <button className="arrow left-arrow" onClick={() => this.handleArrowClick()}>
                            &#9664;
                        </button>
        
                        <div className='stack-cards'>
                            {this.state.cards.map((item, index) => {
                                return (
                                    <CardStackItem 
                                        key={`card-${index}`}
                                        index={index} 
                                        middleIndex={middleIndex}
                                        hoveredIndex={this.state.hoveredIndex} 
                                        
                                        content={item}
                                        
                                        onMouseEnter={() => this.handleMouseEnter(index)} 
                                        onMouseLeave={this.handleMouseLeave} 
                                        
                                        hoverClass={index === this.state.hoveredIndex 
                                                    ? 'hovered-card' 
                                                    : (this.state.hoveredIndex !== null ? 'unhovered-card' : '')}
                                    />
                                );
                            })}
                        </div>
        
                        <button className="arrow right-arrow" onClick={() => this.handleArrowClick()}>
                            &#9654;
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
