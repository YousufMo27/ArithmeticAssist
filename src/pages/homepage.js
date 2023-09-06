import AppCss from '../App.module.css'
import Navbar from './navbar';
import Hero from './hero-section';
import SecondHero from './second-hero-section';
import { React, useEffect } from 'react';
function Home () {
    useEffect(() => {
        // Applying on mount
                document.body.style.overflow = "visible";
        // Applying on unmount    
                return () => {
                  document.body.style.overflow = "hidden";
                }
              }, [])
    return <div>
    <Navbar/>
    <Hero/>
    <SecondHero/>
    </div>
}

export default Home;