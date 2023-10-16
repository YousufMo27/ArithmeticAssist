import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function TransMenu () {
    useEffect(() => {
        document.title = 'Transformations';
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-eleven')) {
            document.getElementById('btn-eleven').style.backgroundColor = '#3588AD';
            document.getElementById('btn-eleven').style.color = 'white';
            document.getElementById('btn-eleven').style.fontWeight = 'bold';
            document.getElementById('btn-eleven').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-eleven').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-11')) {
                document.getElementById('navbtn-11').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-11').style.color = 'white';
                document.getElementById('navbtn-11').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-11').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Transformations</h1>
        <p className={InfoPages["intro-brief"]}>This section talks about transformation theory, and how it helps graphing functions.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>What's a transformation?</h3>
        <p>A transformed function is when a base function changes in size or shape.</p>
        <p style={{marginTop: 20}}>The general formula for a transformed function is:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`T(x) = af[k(x-d)] + c`}/>
        </div>
        <p>Where T(x) is the transformed function.</p>
        <h3>What do the values represent?</h3>
        <p style={{marginTop: 20}}>The a value is used to represent the vertical characteristics of the function.</p>
        <p>when a 	&lt; 0, the function will reflect across the x-axis, think of that like a mirror image.</p>
        <p>When  -1 	&lt; a 	&lt; 1, the function will vertically compress by a factor of a.</p>
        <p>When a &gt; 1 or a &lt; -1 , the function will vertically stretch by a factor of a.</p>
        <p style={{marginTop: 20}}>The c value is also used to represent the vertical characteristics of the function.</p>
        <p>However the c value changes the position of the graph.</p>
        <p>If c &gt; 1, then the graph shifts upwards by a factor of c.</p>
        <p>If c &lt; 1, then the graph shifts downwards by a factor of c.</p>
        <p style={{marginTop: 20}}>The k value is used to represent the horizontal characteristics of the function.</p>
        <p>The k value affects the horzontal stretch and compression.</p>
        <p>If k &lt; 0, then the function will reflect across the y-axis.</p>
        <p>If -1 &lt; k &lt; 1, then the function stretch horizontally by a factor of 1/k.</p>
        <p>If k &gt; 1 or k &lt; -1  then the function compress horizontally by a factor of 1/k.</p>
        <p style={{marginTop: 20}}>The d value is used to represent the horizontal translation.</p>
        <p>If d &gt; 0, the function shifts d units right</p>
        <p>If d &lt; 0, the function shifts d units left</p>
        <h3>What about f?</h3>
        <p>The 'f' value just represents any function, here are the base functions:</p>
        <p style={{marginTop: 20}}>The Linear Function</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x, \{x \in \mathbb{R}\}`}/>
        </div>
        <p style={{marginTop: 20}}>The Quadratic Function</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2, \{x \in \mathbb{R}\}`}/>
        </div>
        <p style={{marginTop: 20}}>The Rational Function</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = \frac{1}{x}, \{x \in \mathbb{R}: x \neq 0\}`}/>
        </div>
        <p style={{marginTop: 20}}>The Square Root Function</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = \sqrt{x}, \{x \in \mathbb{R}: x \geq 0\}`}/>
        </div>
        <p style={{marginTop: 20}}>The Absolute Value Function</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = |x|, \{x \in \mathbb{R}\}`}/>
        </div>
        <h3>The order of transformations</h3>
        <p style={{marginTop: 20}}>1. Stretches, compressions, and reflections</p>
        <p>2. Vertical and horizontal translations</p>
        <h3>Quick example of a tranformed function</h3>
        <p>Assume you start with the base function of:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2`}/>
        </div>
        <p>and we also have the tranformed function.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = 2[\frac{1}{2}(x - 2)]^2 - 5`}/>
        </div>
        <p>Our a &gt; 1, meaning that the function vertically stretches by a factor of 2.</p>
        <p>Our -1 &lt; k &lt; 1, meaning that the function vertically stretches by a factor of (1/(1/2)) = 2.</p>
        <p>The d &gt; 0, meaning the function shifts 2 units right.</p>
        <p>The c &lt; 0, meaning the function shifts 5 units down.</p>
        <iframe src="https://www.youtube.com/embed/sTCRB6hMsC4" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>Professor Leonard</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/l3G_OIeKfh0"  width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}} id={InfoPages['vid-src']}><i>Lisa Ruddy</i> - Youtube</p>
        </div>
    </div>
}

