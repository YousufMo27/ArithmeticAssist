import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";
import ln from '../images/ln.png'
import recip from '../images/recip.png'
import jump from '../images/jump.png'
import remov from '../images/remov.png'


export function CalculusMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-18')) {
            document.getElementById('btn-18').style.backgroundColor = '#3588AD';
            document.getElementById('btn-18').style.color = 'white';
            document.getElementById('btn-18').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-18').style.backgroundColor = '';
            });
        }
          }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Intro to Calculus</h1>
        <p className={InfoPages["intro-brief"]}>A new world of Math</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>What's Calculus About</h3>
        <p>Calculus is all about rates of change, it's also about approximation.</p>
        <p>Calculus is used for all sorts of things like graphing and solving specific problems.</p>
        <h3>Rates of change</h3>
        <p>Similar to finding slope for linear functions, rates of changed are used for all sorts of functions.</p>
        <p>There are two types of rates of change, average and instantaneous.</p>
        <h3>Average Rate of Change</h3>
        <p>The average rate of change is used to calculate the rate of change between two points.</p>
        <p>The method to calculating the average rate of change is very similar to calculating slope.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\frac{\Delta f(x)}{\Delta x}`}/>
        </div>
        <p>Using this equation you can find the average rate of change.</p>
        <h3>Instantaneous Rate of Change</h3>
        <p>The instantaneous rate of change is the rate of change at one specific point.</p>
        <p>Take for example the equation:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = 3x^2`}/>
        </div>
        <p>Say you wanted to find the rate of change at x = 5, there isn't really an equation to do that.</p>
        <p>Until you learn about the difference quotient, which is a new formula.</p>
        <p>The formula is:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\frac{f(x+h) - f(x)}{h}`}/>
        </div>
        <p>Where h is a ratio to help find the rate of change.</p>
        <h3>Limits</h3>
        <p>Limits are used to view the behaviour of a function around a certain value</p>
        <p>Take for example the function,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2`}/>
        </div> 
        <p>If we want to find the behaviour around x = 0, we could just plug in 0.</p>
        <p>But what if we didn't know the value at 0. Take for example</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = ln(x)`}/>
        </div> 
        <p>The value of the function at x = 0 is undefined, so how do you calculate the limit.</p>
        <p>To calculate the limit you have to use the graph. The limits denoted as follows,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0} ln(x) `}/>
        </div> 
        <img className={InfoPages['img-of-graph']} src={ln} alt="dd"/>
        <p>By looking at the graph you can see that as x gets close to 0 the function goes endlessly</p>
        <p>to infinity. The way to notationally denote this is,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0} ln(x) = -\infty `}/>
        </div>
        <p>But what if the function has two different behaviours around a value.</p>
        <p>Take for example the limit of the reciprocal function around x = 0.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0} \frac{1}{x}`}/>
        </div>    
        <img className={InfoPages['img-of-graph']} src={recip} alt="dd"/>
        <p>Around x = 0 the function approaches both positive and negative infinity.</p>
        <h3>Two sided limits</h3>
        <p>When posed with a situation like this you have to find the limit from both sides.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0^-} \frac{1}{x} \ \text{and} \ \lim_{x \to 0^+} \frac{1}{x}`}/>
        </div>    
        <p>Only when both are the same you can say the limit exists.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0^-} \frac{1}{x} = -\infty`}/>
            <MathComponent tex={String.raw`\lim_{x \to 0^+} \frac{1}{x} = \infty`}/>
        </div>    
        <p>Because they are both different we can say that,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0^-} \frac{1}{x} = \text{DNE}`}/>
        </div>    
        <h3>Continuity and Types of Continuity</h3>
        <p style={{marginTop: 20}}>Continuity is essentially when the function has no breaks or stops.</p>
        <p>If you would never have to lift your hand when drawing the graph, then the function is continous.</p>
        <p style={{marginTop: 20}}>There are three types of discontinuity</p>
        <p style={{marginTop: 20}}>The first type is an infinite discontinuity</p>
        <p>This is essentially just a vertical asymptote</p>
        <img className={InfoPages['img-of-graph']} src={recip} alt="dd"/>
        <p style={{marginTop: 20}}>The second type is a removable discontinuity</p>
        <p>This is a hole in the function, where a specific point doesn't exist.</p>
        <img className={InfoPages['img-of-graph']} src={remov} alt="dd"/>
        <p style={{marginTop: 20}}>The final type is a jump discontinuity</p>
        <p>A jump discontinuity is a when a function has two different limit values at one point.</p>
        <img className={InfoPages['img-of-graph']} src={jump} alt="dd"/>
        <h3>Solving Limits</h3>
        <p>In order to find the limit you can usually just plug in the value</p>
        <p>However you might get left with some problems which are hard to interpret.</p>
        <p>Take for example,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0} \frac{1}{x}`}/>
            <MathComponent tex={String.raw`=\frac{1}{0}`}/>
        </div>
        <p>As you know any number divided by 0 is undefined, this just tells you the limit DNE.</p>  
        <p>But what if you want to solve the limit of,</p> 
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0} \frac{x^2-1}{x-1}`}/>
            <MathComponent tex={String.raw`= \frac{0}{0}`}/>
        </div>
        <p>You get a value of 0/0, this is also called an indeterminite form.</p>
        <p>In order to solve this limit you have to manipulate the expression.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{x \to 0} \frac{x^2-1}{x-1}`}/>
            <MathComponent tex={String.raw`=\lim_{x \to 0} \frac{(x-1)(x+1)}{x-1}`}/>
        </div>
        <p>The (x-1) cancels out and you get</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`=\lim_{x \to 0} x+1`}/>
            <MathComponent tex={String.raw`=0 + 1`}/>
            <MathComponent tex={String.raw`=1`}/>
        </div>
        <p>Some more complicated examples might involve more manipulations.</p>
        </div>
    </div>
}

