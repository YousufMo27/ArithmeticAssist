import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function FunctionMenu () {
    useEffect(() => {
        document.title = 'Functions';
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-nine')) {
            document.getElementById('btn-nine').style.backgroundColor = '#3588AD';
            document.getElementById('btn-nine').style.color = 'white';
            document.getElementById('btn-nine').style.fontWeight = 'bold';
            document.getElementById('btn-nine').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-nine').style.backgroundColor = '';
            });
        }
          }, [])

          
          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-nine')) {
                document.getElementById('navbtn-nine').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-nine').style.color = 'white';
                document.getElementById('navbtn-nine').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-nine').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Functions</h1>
        <p className={InfoPages["intro-brief"]}>Functions are the key to understanding future Math.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>What's a Function?</h2>
        <h3>Relations</h3>
        <p>A relation is a relationship between two sets of information, usually resulting</p>
        <p>in an ordered pair as an output.</p>
        <h3>Input and Output</h3>
        <p>Similarly to a computer program a function takes input and provides an output.</p>
        <p>In order for a relation to be a function, each input must only have one output.</p>
        <p>Take for example the equation:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`y = x^2`}/>
        </div>
        <p>We can rewrite it using function notation: </p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = y`}/>
            <MathComponent tex={String.raw`f(x) = x^2`}/>
        </div>
        <p>In a function, the input value 'x' maps to one specific 'y' or output value.</p>
        <p>Take for example x = 5,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(5) = (5)^2 = 25`}/>
        </div>
        <p>Then your function has a coordinate of (5,25).</p>
        <h3>Functions vs Relations</h3>
        <p>Relations have mulitple outputs for one input, but functions have only one</p>
        <p>output for an input.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x = y^2`}/>
        </div>
        <p>This relation will have mulitple outputs for an input, as if you solve for y,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x = y^2`}/>
            <MathComponent tex={String.raw`y = \pm\sqrt{x}`}/>
        </div>
        <p>Every input 'x' will yield a positive and negative answer, meaning it's not a function,</p>
        <p>but instead a relation, functions can be relations but relations can't be functions.</p>
        <h3>Domain and Range</h3>
        <p>The domain is simply all the x values that can be inputted in the function.</p>
        <p>The function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x`}/>
        </div>
        <p>Has a domain of every number, to define this more formally we use some symbols:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`  \{x\in \mathbb{R}\}`}/>
        </div>
        <p>The fancy R just means all Real numbers.</p>
        <p>if the function has any restrictions on input you just add the following,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`  \{x\in \mathbb{R}: x \ cant \ be \ this\ value \}`}/>
        </div>
        <p>Range is the same but just with all possible outputs.</p>
        <h3>Inverse Functions</h3>
        <p>As every operation has an opposite, so do functions.</p>
        <p>For example take the function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = y = x`}/>
        </div>
        <p>In order to find the inverse of a function, you just have to swap the x and y values</p>
        <p>and solve for y.</p>
        <p>Take for example the function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) =x+ 5`}/>
        </div>
        <p>We know f(x) = y, so then we can just swap the values of x and y.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = y = x + 5`}/>
            <MathComponent tex={String.raw`\rightarrow y = x + 5`}/>
            <MathComponent tex={String.raw`\rightarrow x = y + 5`}/>
            <MathComponent tex={String.raw`\rightarrow x - 5 = y`}/>
            <MathComponent tex={String.raw`\rightarrow y = x - 5`}/>
        </div>
        <p>To denote the inverse you use the inverse notation:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f^{-1}(x) = x - 5`}/>
        </div>
        <h3>Even and Odd Functions</h3>
        <p>There's a really simple way to check if a function is even or odd.</p>
        <p>Say for example your given a function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2`}/>
            <MathComponent tex={String.raw`\text{if}\ f(-x) = -f(x), \text{the the function is} \ odd`}/>
            <MathComponent tex={String.raw`\text{if}\ f(-x) = f(x), \text{the the function is} \ even`}/>
        </div>
        <p>If the function doesn't follow any of the properties than it's neither.</p>
        <iframe  src="https://www.youtube.com/embed/kvGsIo1TmsM"   width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>Khan Academy</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/9fJsrnE1go0"   width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>Professor Dave Explains</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/djT6-YamHaA"   width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>The Organic Chemistry Tutor</i> - Youtube</p>
        <iframe  src="https://www.youtube.com/embed/fKyBOLsqRlo"   width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}} id={InfoPages['vid-src']}><i>The Organic Chemistry Tutor</i> - Youtube</p>
        </div>
    </div>
}

