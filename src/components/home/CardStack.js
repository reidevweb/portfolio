import React, { Component } from 'react';
import CardStackItem from './CardStackItem';

export default class CardStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hoveredIndex: null,
            cards: ['/portfolio/home/1.png', '/portfolio/home/2.png', '/portfolio/home/3.png'],
            titles: ['The Cerve', 'Harvesteer', 'Kulekt'],
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
        
        const titles = [...this.state.titles];
        const lastTitle = titles.pop();
        titles.unshift(lastTitle);
        this.setState({ titles });
        console.log(cards);
    }
    

    render() {
        const cardLength = this.state.cards.length;
        const middleIndex = Math.floor(cardLength / 2);

        return (
            <div id="mobile-preview">
                {/* <h1 className="d-flex justify-content-center align-items-center display-3 mb-3">What I do</h1> */}
                
                <div id="home-proj" >
                    <div id="cards-banner-container">
                        <div id="cards-banner" className="cards-container">
                            <button className="arrow left-arrow" onClick={() => this.handleArrowClick()}>
                                <i className="fas fa-angle-left prev"></i>
                            </button>
            
                            <div className='stack-cards'>
                                {this.state.cards.map((item, index) => {
                                    return (
                                        <CardStackItem 
                                            key={`card-${index}`}
                                            index={index} 
                                            middleIndex={middleIndex}
                                            hoveredIndex={this.state.hoveredIndex} 
                                            
                                            content={this.state.cards[index]}
                                            title={this.state.titles[index]}
                                            
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
                                <i className="fas fa-angle-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
