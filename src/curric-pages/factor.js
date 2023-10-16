import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";


export function FactorMenu () {
    useEffect(() => {
        document.title = 'factoring';
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-six')) {
            document.getElementById('btn-six').style.backgroundColor = '#3588AD';
            document.getElementById('btn-six').style.color = 'white';
            document.getElementById('btn-six').style.fontWeight = 'bold';
            document.getElementById('btn-six').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-six').style.backgroundColor = '';
            });
        }
          }, [])


          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-six')) {
                document.getElementById('navbtn-six').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-six').style.color = 'white';
                document.getElementById('navbtn-six').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-six').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Factoring</h1>
        <p className={InfoPages["intro-brief"]}>Factoring is one of the most important skills to learn in Math.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>Like Terms</h3>
        <p>When two terms have the same variable, you call them like terms.</p>
        <p>All this means is that you add the two coefficients and keep the variable.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`5x + 8x + 4y`}/>
        <MathComponent tex={String.raw`= 13x + 4y`}/>
        </div>
        <h3>Mulitplying Binomials</h3>
        <p>When Mulitplying Binomials you have to remember the like terms, as well as the exponent rules.</p>
        <p>When Mulitplying two of the same variable add the exponents, if it's a different variable, combine the variables.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`(x + 3)(x + 2)`}/>
        <MathComponent tex={String.raw`= (x)(x) + (3)(x) + (2)(x) + 6`}/>
        <MathComponent tex={String.raw`= x^2 + 5x + 6`}/>
        <MathComponent tex={String.raw`y(x + 3)`}/>
        <MathComponent tex={String.raw`= (y)(x) + 3(y)`}/>
        <MathComponent tex={String.raw`= xy + 3y`}/>
        </div>
        <h3>Factoring out terms from an Equation</h3>
        <p>Like when you mulitplying a value to an equation, you can also bring that value out.</p>
        <p>Take the previous equation for example.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`= xy + 3y`}/>
        </div>
        <p>When you factor it's kind of liking 'dividing' the term out.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`\frac{xy}{y} = x`}/>
        <MathComponent tex={String.raw`\frac{3y}{y} = 3`}/>
        <MathComponent tex={String.raw`xy + 3y = y(x+ 3)`}/>
        </div>
        <p>This is still the same expression as above, but it's easier to understand,</p>
        <p>and much better to help find solutions.</p>
        <iframe src="https://www.youtube.com/embed/Kf67Dv7ygK0"  width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}} id={InfoPages['vid-src']}><i>Anywhere Math</i> - Youtube</p>
        </div>
    </div>
}

