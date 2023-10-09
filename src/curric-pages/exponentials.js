import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function ExponentialMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-twelve')) {
            document.getElementById('btn-twelve').style.backgroundColor = '#3588AD';
            document.getElementById('btn-twelve').style.color = 'white';
            document.getElementById('btn-twelve').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-twelve').style.backgroundColor = '';
            });
        }
          }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Exponential Functions</h1>
        <p className={InfoPages["intro-brief"]}>This section talks about exponential functions</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>What are Exponential Functions?</h2>
        <h3>The Format</h3>
        <p>You're probably used to seeing functions with an exponent, however exponentials are,</p>
        <p>a little different. Functions like quadratics have a fixed exponent.</p>
        <p>However in exponentials, the input is the exponent.</p>
        <p style={{marginTop: 20}}>The exponential function has two parts, the base and the input.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = 2^x`}/>
        </div>
        <p>The base here is 2, and the input is x.</p>
        <p>The domain of the function is all real numbers</p>
        <h3>Growth and Decay</h3>
        <p>The exponential function changes depending on the base, take for example the function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = 2^x`}/>
        </div>
        <p>This function will increase throughout it's domain.</p>
        <p style={{marginTop: 20}}>Now take for example, the function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`g(x) = (\frac{1}{2})^x`}/>
        </div>
        <p>Since the function is a fraction, as it gets raised to a power, it will start to decrease.</p>
        </div>
    </div>
}

