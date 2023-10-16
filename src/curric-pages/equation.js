import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";


export function EquationMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-two')) {
            document.getElementById('btn-two').style.backgroundColor = '#3588AD';
            document.getElementById('btn-two').style.color = 'white';
            document.getElementById('btn-two').style.fontWeight = 'bold';
            document.getElementById('btn-two').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-two').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-two')) {
                document.getElementById('navbtn-two').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-two').style.color = 'white';
                document.getElementById('navbtn-two').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-two').style.backgroundColor = '';
                });
            }
              }, [])
    return <div className={InfoPages["equation-container"]} >
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]} id="eqn-cont">
        <h1 className={InfoPages["title"]}>Solving Equations </h1>
        <p className={InfoPages["intro-brief"]}>This section will explain how to solve equations which will be given to you at this level.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>Equations</h2>
        <p>For this section the most you'll need to know about equations is that</p>
        <p>an equation is just a true statement, like 5 = 5 or 3 = 3.</p>
        <h3>Variables</h3>
        <p>Variables are just a placeholder for a number or numerical value. Variables</p>
        <p>are dynamic values that can be changed, and are used to help solve</p>
        <p>equations.</p>
        <h3>Equations with variables</h3>
        <p>Variables are used in equations to represent unknown values. Let's</p>
        <p>say for example, you want to buy two games, but you only have</p>
        <p>$80, you already know that the second game costs $30, but you</p>
        <p>don't know the price of the first, if you let x represent the</p>
        <p>price of the first game, you can create the equation</p>
        <p>x + 30 = 80. Then use algebraic manipulation to solve.</p>
        <h3>Algebraic Manipulation</h3>
        <p>For now there are only a few rules necessary to understand equation solving.</p>
        <p><br></br></p>
        <p>1. Whatever you do to one side you must do to the other to keep the equation true.</p>
        <br></br>
        <p>Let's say that you're trying to solve the equation from before, x + 30 = 80.</p>
        <p>in order to solve for x you have to get x on it's own, to do that you have to</p>
        <p>Do the operation to get rid of it on one side and the opposite on the other,</p>
        <p>to get x on it's own you have to subtract 30 from the left side and add 30 on</p>
        <p>the right. x + 30 - 30 = 80 - 30, which gives you x = 50.</p>
        <br></br>
        <p>2. To undo an operation you must use it's opposite, like how addition has subtraction</p>
        <p>multiplication has division.</p>
        <br></br>
        <p>Similarly to how addition and subtraction are opposites or inverses</p>
        <p>divison and multiplication are opposites or inverses of each other.</p>
        <p>Assume you have an equation</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`3x - 9 = 0`}/>
        </div>
        <p>First you subtract and add 9 from both sides</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`3x - 9 + 9 = 0 + 9`}/>
        </div>
        <p>You're then left with this equation</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`3x = 9`}/>
        </div>
        <p>By dividing the coefficent on the variable you undo the multiplication</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`\frac{3x}{3} = \frac{9}{3}`}/>
        </div>
        <p>After these operations you're left with the final answer</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`x = 3`}/>
        </div>
        <h3>A different example of Equation Solving</h3>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`5(x+3) = 9`}/>
        <MathComponent tex={String.raw`\rightarrow5x+15 = 9`}/>
        <MathComponent tex={String.raw`\rightarrow5x+15 -15 = 9 - 15`}/>
        <MathComponent tex={String.raw`\rightarrow5x = -6`}/>
        <MathComponent tex={String.raw`\rightarrow x = \frac{-6}{5}`}/>
        </div>
        <h3>Some Extra Resources</h3>
        <iframe src="https://www.youtube.com/embed/GYNK6NDNEFk" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>Organic Chemistry Tutor</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/URwvmQQGE8c" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}} id={InfoPages['vid-src']}><i>Alane Tentoni</i> - Youtube</p>
        </div>
    </div>
}

