import React from 'react';
import { Link } from 'react-router-dom'

import CardStack from '../components/home/CardStack';
import SelfIntro from '../components/home/SelfIntro';
import FeaturedItem from '../components/projects/FeaturedItem';
import Services from '../components/home/Services';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <main id="home" style={{
              backgroundImage: 'url("/portfolio/bg-home.png")',
              backgroundSize: 'contain', 
              backgroundRepeat: 'no-repeat',
            }}>
                <SelfIntro />
                <Services />
                <CardStack />
                <FeaturedItem />
            </main>
            
            <Footer/>
            
            <Link to="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </Link>
        </>
    );
}
