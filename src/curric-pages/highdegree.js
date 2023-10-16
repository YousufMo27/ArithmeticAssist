import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function HigherDegreeMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-sixteen')) {
            document.getElementById('btn-sixteen').style.backgroundColor = '#3588AD';
            document.getElementById('btn-sixteen').style.color = 'white';
            document.getElementById('btn-sixteen').style.fontWeight = 'bold';
            document.getElementById('btn-sixteen').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-sixteen').style.backgroundColor = '';
            });
        }
          }, [])


          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-15')) {
                document.getElementById('navbtn-15').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-15').style.color = 'white';
                document.getElementById('navbtn-15').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-15').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Higher Degree Functions</h1>
        <p className={InfoPages["intro-brief"]}>An introduction to functions with a degree higher than 2</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>Degree of a Function</h3>
        <p>The degree of a function is just the highest power, take for example the function:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2`}/>
        </div>
        <p>This function has degree 2, but there are functions with higher powers like,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^3, g(x) = x^4`}/>
        </div>
        <p>Those functions have degree 3 and 4 respectively.</p>
        <p>To find a functions degree just see which term has the highest power.</p>
        <h3>Factoring Higher Degree Functions</h3>
        <p>Sadly, factoring higher degre polynomials isn't as easy as factoring quadratics</p>
        <p>In order to actually use some of the methods to factor, you first need to know if a value is a factor.</p>
        <p>If you get a value of 0 from an input then you know it's a factor and you can do the two methods.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\text{if you have the function }f(x) = x^3 - x^2 + x  - 1`}/>
            <MathComponent tex={String.raw`\text{at } x = 1, \text{ you'll get } f(1) = 0 `}/>
        </div>
        <p>Then you know that x = 1 is a factor.</p>
        <p style={{marginTop: 20}}>There are two main methods to factoring polynomials once you find the factor.</p>
        <h3>Synthetic and Polynomial Long Division</h3>
        <p>Polynomial Long division is essentially long division from elementary with a small difference, variables.</p>
        <p>Since it's better explained with examples, there will be a bunch of resources below to help you understand.</p>
        <p>Synthetic long divison is a much simpler method of factoring than long divison, as with polynomial long division,</p>
        <p>it's better explained with examples.</p>
        <h3>Inequalities</h3>
        <p>Inequalities simply put are just bounds for where a function could be positive, negative, or undefined.</p>
        <h3>Solving Inequalities</h3>
        <p>Solving Inequalities aren't too different from equations, there are two things to keep in mind.</p>
        <p style={{marginTop: 20}}>1. Just like equations, whatever you do to one side, you must do to the other</p>
        <p style={{marginTop: 20}}>2. Dividing a negative will change the direction of the inequality sign.</p>
        <p>Say for example you're given the inequality:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x - 1 < 0`}/>
        </div>
        <p>To solve it just do what you would with an equation</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x < 1`}/>
        </div>
        <p>In simple english all this really means is that x - 1 is negative when x is less than one.</p>
        <h3>Double Sided Inequalities</h3>
        <p>Some inequalities have both low and high bounds, take for example the inequality:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`-1 < x -1 \leq 1`}/>
        </div>
        <p>This just means for what values of x will the function be between -1 and 1</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`-1 + 1< x  \leq 1 + 1`}/>
            <MathComponent tex={String.raw`0< x  \leq 2`}/>
        </div>
        <p>After solving it you get the answer that the function will be between -1 and 1 when xbetween 0 and 2.</p>
        <h3>Interval Notation</h3>
        <p>Of course there's a more formal way to define this, called interval notation.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`0 < x  \leq 2`}/>
        </div>
        <p>Can also be defined as:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x \in (0,2]`}/>
        </div>
        <p>The round brackets mean that the values aren't included, the square ones mean they are.</p>
        <h3>Interval Charts</h3>
        <p>Interval charts are used when dealing with inequalities of higher degree functions,</p>
        <p>especially when you have multiple factors. They allow you to give a more defined answer on the intervals.</p>
        <iframe src="https://www.youtube.com/embed/imJCLnDubuA" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>rootmath</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/FxHWoUOq2iQ" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>The Organic Chemistry Tutor</i> - Youtube</p>
        <iframe  src="https://www.youtube.com/embed/LU9w9NSKNcI"    width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>AllThingsMathematics</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/LYixzCuc4PQ" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}} id={InfoPages['vid-src']}><i>Math and Science</i> - Youtube</p>
        </div>
    </div>
}

