import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";


export function LineMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
          }, [])

    return <div className={InfoPages["slope-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Equation of a Line</h1>
        <p className={InfoPages["intro-brief"]}>This section talks about the equation of a line and it's relation to slopes</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>Slope intercept form</h2>
        <p>The equation of a line in slope-intercept form is:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = mx + b`}/>
        </div>
        <p>Recall that in this equation, the m represents the slope of a line</p>
        <p>The y-intercept of a line is the point where the line first touches the y-axis.</p>
        <h3>Finding the Slope and y-intercept given an equation.</h3>
        <p>Here a few examples showing how you can find the slope and y-intercept given an equation.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = -5x + 3`}/>
        </div>
        <p>We see here that our 'm' value is -5, and our 'b' value is 3, meaning that the slope is 5,and the y-int = 3.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = \frac{1}{2}x - 7`}/>
        </div>
        <p>In this example, our 'm' value is one half, and our 'b' value is -7, meaning that the slope is a half,and the y-int = -7.</p>
        <p>We can also find the y-int by just setting x = 0.</p>
        <h3>Finding Slope given Coordinates</h3>
        <p>When given two Coordinates theres a specific formula you should use.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`(x_{1},y_{1}) \; and \;(x_{2},y_{2})`}/>
        </div>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`m = \frac{y_2 - y_1}{x_2 - x_1}`}/>
        </div>
        <p>This formula allows you to find the slope of a line only given two coordinates.</p>
        <h3>Other important Equation Info</h3>
        <p>The standard form of a linear equation is:</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`Ax + By  = C`}/>
        </div>
        <p>Finding x and y intercepts:</p>
        <p>1. To find x-int, set y = 0.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = 2x + 7`}/>
        </div>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`0 = 2x + 7`}/>
        </div>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`-7 = 2x`}/>
        </div>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`x = \frac{-7}{2}`}/>
        </div>
        <p>2. To find y-int, set x = 0.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = 2x + 7`}/>
        </div>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = 2(0) + 7`}/>
        </div>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`y = 7`}/>
        </div>
        </div>

    </div>
}

