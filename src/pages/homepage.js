import AppCss from '../App.module.css'
import Navbar from './navbar';
import Hero from './hero-section';
import SecondHero from './second-hero-section';
import { React, useEffect } from 'react';

function Home () {

    useEffect(() => {
      document.body.style.overflowY = "visible";
      document.body.style.overflowX = "hidden";
    }, [])

    return <div>
    <Navbar/>
    <Hero/>
    <div id="second-hero">
      <SecondHero />
    </div>
    </div>
}

export default Home;