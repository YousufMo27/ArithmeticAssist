import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function LogMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-seventeen')) {
            document.getElementById('btn-seventeen').style.backgroundColor = '#3588AD';
            document.getElementById('btn-seventeen').style.color = 'white';
            document.getElementById('btn-seventeen').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-seventeen').style.backgroundColor = '';
            });
        }
          }, [])


          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-17')) {
                document.getElementById('navbtn-17').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-17').style.color = 'white';
                document.getElementById('navbtn-17').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-17').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Logarithms</h1>
        <p className={InfoPages["intro-brief"]}>You've reached the point where there's more words than numbers</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>What's a Logarithm</h3>
        <p>Logarithms are just the inverse of an exponential, the issue is if you try finding the inverse,</p>
        <p>you'll run into a pretty big problem. Why don't we try it.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`y = 2^x`}/>
            <MathComponent tex={String.raw`x = 2^y`}/>
        </div>
        <p>Now we're stuck, nothing you can do really, thats until logarithms were discovered.</p>
        <p>Now if you want to solve for y just take the "log" of both sides</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x = 2^y`}/>
            <MathComponent tex={String.raw`\log _{2} (x) = y`}/>
        </div>
        <p>The little number you see on the bottom is called the base, since our exponential had base 2.</p>
        <p>Our logarithm must also have base 2, as it is the inverse.</p>
        <p>One important thing to know is that if there is no little number, then it's assumed as base 10.</p>
        <h3>Domain and Range</h3>
        <p>Since the exponential and logarithm are inverses the domain and ranges are switched.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = 2^x, x \in \mathbb{R},\{y\in\mathbb{R}|y \geq0\}`}/>
        </div>
        <p>Whereas the domain and range for the logarithm are:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = \log _{2} (x),\{x\in\mathbb{R}|x \geq0\},y \in \mathbb{R}`}/>
        </div>
        <h3>The Natural Logarithm</h3>
        <p>There is one base used for logarithms, especially in future math courses.</p>
        <p>It's called the base e. The form of the natural logarithm is,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = ln(x)`}/>
        </div>
        <p>The value of e is approximately 2.718...</p>
        <h3>Solving Logarithmic Equations</h3>
        <p>Solving logarithmic equations just involves taking the 'log' of both sides.</p>
        <p>Take for example the logarithmic equation,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`ln(x+3) = 5`}/>
        </div>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`e^5 = x + 3`}/>
        </div>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x = e^5 - 3`}/>
        </div>
        <p>To solve more complicated examples, resources are provided below.</p>
        </div>
    </div>
}

