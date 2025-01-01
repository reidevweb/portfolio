import React from 'react';
import { Link } from 'react-router-dom'

import CardStack from '../components/home/CardStack';
import SelfIntro from '../components/home/SelfIntro';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
            <main id="home">
                <SelfIntro />
                <CardStack />
            </main>
            
            <Footer/>
            
            <Link to="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </Link>
        </>
    );
}
