import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function TrigFuncMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-thirteen')) {
            document.getElementById('btn-thirteen').style.backgroundColor = '#3588AD';
            document.getElementById('btn-thirteen').style.color = 'white';
            document.getElementById('btn-thirteen').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-thirteen').style.backgroundColor = '';
            });
        }
          }, [])
    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Trigonometric Function</h1>
        <p className={InfoPages["intro-brief"]}>This section is an introduction to Trig Functions</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>Periodic Functions</h3>
        <p>The Trig functions have a property called being periodic, what that means is that</p>
        <p>after a certain point the graph repeats, and continues to do for infinity.</p>
        <h3>The Trig functions</h3>
        <p style={{marginTop: 20}}>The first trig function is the sine.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`f(x) = sin(x), \{ x \in \mathbb{R}\},\{ y \in \mathbb{R}: -1 \leq y \leq 1\}`}/>
        </div>
        <p>However since this function is periodic the range is different, it has a lower and upper bound.</p>
        <p style={{marginTop: 20}}>The second trig function is the cosine.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`f(x) = cos(x), \{ x \in \mathbb{R}\},\{ y \in \mathbb{R}: -1 \leq y \leq 1\}`}/>
        </div>
        <h3>Transformations of the trig functions</h3>
        <p style={{marginTop: 20}}>There are two main differences when it comes to trig functions,</p>
        <p>the period and the amplitude</p>
        <h3>Amplitude</h3>
        <p>Similarly to how the 'a' value changes a functions vertical characteristics, the amplitude on a trig</p>
        <p>trig function changes the two upper bounds, say for instance:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`f(x) = 5cos(x), \{ x \in \mathbb{R}\},\{ y \in \mathbb{R}: -5 \leq y \leq 5\}`}/>
        </div>
        <p>The range changes based on the amplitude</p>
        <h3>Period</h3>
        <p>Just like how the 'k' value changes a functions horizontal characteristics, the k value changes the</p>
        <p>period a function repeats on. Take for example the function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`f(x) = cos(\frac{1}{2}x)`}/>
        </div>
        <p>Though the domain and range don't change, the function's period to repeating changes, using the formula:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`T = \frac{360}{k}`}/>
        </div>
        <p>Where T represents the period of the function. If we use this formula on the function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`f(x) = cos(\frac{1}{2}x)`}/>
            <MathComponent  tex={String.raw`T = \frac{360}{\frac{1}{2}}`}/>
            <MathComponent  tex={String.raw`T = (360)(2) = 720`}/>
        </div>
        <p>We see the period extends from 360 to 720.</p>
        </div>
    </div>
}

