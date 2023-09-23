import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";


export function FactorMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
          }, [])

    return <div className={InfoPages["slope-container"]}>
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
        <h3>Factoring out terms</h3>
        </div>
    </div>
}

