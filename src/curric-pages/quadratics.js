import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";
import quadratic from '../images/quadratic.png'


export function QuadraticMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-seven')) {
            document.getElementById('btn-seven').style.backgroundColor = '#3588AD';
            document.getElementById('btn-seven').style.color = 'white';
            document.getElementById('btn-seven').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-seven').style.backgroundColor = '';
            });
        }
          }, [])
          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-seven')) {
                document.getElementById('navbtn-seven').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-seven').style.color = 'white';
                document.getElementById('navbtn-seven').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-seven').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Introduction to Quadratics</h1>
        <p className={InfoPages["intro-brief"]}>Quadratics are a higher degree than Linear Equations, in this section you'll learn more about them.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>What is a Quadratic?</h2>
        <p>In simplest terms a quadratic is just the base operation of squaring a number,</p>
        <p>of course there's much more to it than just that. But for now that's all you'll really need to know.</p>
        <h3>Graphic Representation</h3>
        <p>The graph of a quadratic has a minimum point, unlike the graph of a linear equation.</p>
        <p>Since the quadratic is just the square, and 'x' value will always result in a positive 'y'.</p>
        <p>Resuliting in a much more symmetric graphical representation as seen below.</p>
        <img className={InfoPages['img-of-graph']} src={quadratic} alt="dd"/>
        <h3>Quadratic Form</h3>
        <p>Since Linear Equations are just:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = x`}/>
        </div>
        <p>and Quadratics are just the square, the base form of a quadratic is:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = x^2`}/>
        </div>
        <p>The Standard form of a Quadratic is:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`Ax^2 + Bx + C = 0`}/>
        </div>
        <h3>Factoring Quadratics</h3>
        <p>Like linear equations you can also factor quadratic equations to find a solution.</p>
        <p>The factored form of a quadratic equation is:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`a(x-r)(x-s)`}/>
        </div>
        <p>Where a, r, and s are all constants.</p>
        <p>When Factoring Quadratics there are two cases that you have to be aware of.</p>
        <p>But even before you consider your cases you need to see if the quadratic is factorable.</p>
        <p>To do this you must test the discriminant.</p>
        <p>Assume your given a quadratic equation:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`ax^2 + bx +c`}/>
        </div>
        <p>The formula for the discriminant is:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`\sqrt{b^2 - 4ac}`}/>
        </div>
        <p>if the value is positive then you have two solutions,</p>
        <p>if it's negative then you have no solutions,</p>
        <p>if it's 0 then you have one solution,</p>
        <p style={{marginTop: 20}}>Case 1: Your 'a' value is 1</p>
        <p>When your 'a' value is 1 you can just factor by finding two numbers which multiply to</p>
        <p>your 'c' value and add to your 'b' value.</p>
        <p>Given an equation:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`x^2 + 7x + 12`}/>
        </div>
        <p>We first check the discriminant</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`\sqrt{(7)^2 - 4(1)(12)}`}/>
        <MathComponent tex={String.raw`=\sqrt{49 - 36} > 0`}/>
        </div>
        <p>Which means we can factor this expression</p>
        <p style={{marginTop: 20}}>First we need to find two numbers which add to 'b' and mulitply to 'c'</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`3 + 4 = 7 = b`}/>
        <MathComponent tex={String.raw`(3)(4) = 12 = c`}/>
        </div>
        <p>Which means the factored form is </p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`(x+4)(x+3)`}/>
        </div>
        <p style={{marginTop: 20}}>Case 2: Your 'a' value is not 1</p>
        <p>Given the equation:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`3x^2 - 5x - 2`}/>
        </div>
        <p>We see that a = 3, so in order to factor you have to mulitply your a value and c value,</p>
        <p>then find two numbers that add to the b value, and mulitply to a times c.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`3x^2 - 5x - 2`}/>
        <MathComponent tex={String.raw`(3)(-2) = -6`}/>
        <MathComponent tex={String.raw`-6 + 1 = -5`}/>
        <MathComponent tex={String.raw`(-6)(1) = -6`}/>
        <MathComponent tex={String.raw`3x^2 - 6x + x - 2`}/>
        </div>
        <p>Then you have to group the terms and individually factor, if the factors are the same your answer is correct.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`(3x^2 - 6x )+ (x - 2)`}/>
        <MathComponent tex={String.raw`3x(x - 2) + (x-2)`}/>
        <MathComponent tex={String.raw`(3x + 1)(x - 2)`}/>
        </div>
        <h3>Difference of squares</h3>
        <p>One last thing to keep in mind is a really easy method to factor,</p>
        <p>however it can only be used when a certain form appears. The formula is</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`x^2 -a^2 = (x-a)(x + a)`}/>
        </div>
        <p>This is called a difference of squares.</p>
        </div>
    </div>
}

