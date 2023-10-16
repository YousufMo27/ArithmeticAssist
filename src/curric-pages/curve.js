import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";

export function CurveMenu () {
    useEffect(() => {
        document.title = 'Curve Sketching';
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-twenty')) {
            document.getElementById('btn-twenty').style.backgroundColor = '#3588AD';
            document.getElementById('btn-twenty').style.color = 'white';
            document.getElementById('btn-twenty').style.fontWeight = 'bold';
            document.getElementById('btn-twenty').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-twenty').style.backgroundColor = '';
            });
        }
          }, [])

          
        useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('navbtn-20')) {
            document.getElementById('navbtn-20').style.backgroundColor = '#3588AD';
            document.getElementById('navbtn-20').style.color = 'white';
            document.getElementById('navbtn-20').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('navbtn-20').style.backgroundColor = '';
            });
        }
            }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Curve Sketching</h1>
        <p className={InfoPages["intro-brief"]}>These techniques will help you graph way better than desmos</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>Relationship between f(x) and f'(x)</h3>
        <p>A function and it's derivative help understand and find out properties of the original function.</p>
        <p>It can tell you if it's decreasing or if it behaves a certain way around a value.</p>
        <h3>The First Derivative</h3>
        <p>The first derivative of a function will tell you it's critical points, and where it increases or decreases.</p>
        <p>Take for example the function,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2`}/>
        </div> 
        <p>When we find the derivative we get,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f'(x) = 2x`}/>
        </div> 
        <p>If we want to find critical points, we have to set the derivative to 0 and solve.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`2x = 0 \rightarrow x = 0`}/>
        </div>
        <p>We see our critical value is 0, this just tells you that the function has a turning point.</p>
        <p>Meaning the function goes from increasing to decreasing or vice-versa.</p>
        <p>There can also be a case where our function has a point of inflection, meaning that our function's shape changes,</p>
        <p>but it stays increasing or decreasing.</p>
        <p>The first derivative also tells you when a function is increasing or decreasing.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\text{if} \; f'(x) > 0, \; \text{increasing}`}/>
            <MathComponent tex={String.raw`\text{if} \; f'(x) < 0, \; \text{decreasing}`}/>
        </div>
        <h3>The Second Derivative</h3>
        <p>The second derivative can be used to find the concavity of a function</p>
        <p>Concavity is just the shape of a function.</p>
        <p>Being concave up gives the graph a 'U' type shape.</p>
        <p>Being concave down gives the graph a '∩' type shape.</p>
        <p>Algebraically the rules cam be denoted as follows,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f''(x) > 0, \; \text{Concave Up}`}/>
            <MathComponent tex={String.raw`f''(x) < 0, \; \text{Concave Down}`}/>
        </div>
        <h3>The Second Derivative Test</h3>
        <p>Used to see if there is a local maximum or minimum at a value. You test the second derivatives at critical points.</p>
        <p>Assume you have a critical point at x = c, then,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f''(c) > 0, \; \text{local min at x = c}`}/>
            <MathComponent tex={String.raw`f''(c) < 0, \; \text{local max at x = c}`}/>
        </div>
        <h3>Curve Sketching</h3>
        <p>Using all of these tests you can graph the function.</p>
        <p>Let's say you want to graph the function,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2`}/>
        </div>
        <p>Your first step should be to take the derivative and find any critical points.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f'(x) = 2x`}/>
            <MathComponent tex={String.raw`2x = 0 \rightarrow x = 0`}/>
        </div>
        <p>After finding the critical values, find where the derivative is positive and negative.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f'(x) > 0, \; \text{when x > 0}`}/>
            <MathComponent tex={String.raw`f'(x) < 0, \; \text{when x < 0}`}/>
            <MathComponent tex={String.raw`\text{when x = 0} \; f(x) \; \text{has a max or min}`}/>
        </div>
        <p>Then you take the second derivative</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f''(x) = 2`}/>
        </div>
        <p>Since the SD is positive, the function is concave up throughout its domain</p>
        <p>Now we take the SD test to see if the critical point at x = 0 is a max or min.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f''(0) = 2,\; \text{then x = 0 is a max}`}/>
        </div>
        <iframe src="https://www.youtube.com/embed/-W4d0qFzyQY" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>Patrick JMT</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/o2I3lajJklE" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>Joe Haas</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/8u6woY05aL0" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}} id={InfoPages['vid-src']}><i>Professor Leonard
            </i> - Youtube</p>
        </div>
    </div>
}

