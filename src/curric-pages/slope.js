import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";


export function SlopeMenu () {
    useEffect(() => {
        document.title = 'Slope';
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-three')) {
            document.getElementById('btn-three').style.backgroundColor = '#3588AD';
            document.getElementById('btn-three').style.color = 'white';
            document.getElementById('btn-three').style.fontWeight = 'bold';
            document.getElementById('btn-three').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-three').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-three')) {
                document.getElementById('navbtn-three').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-three').style.color = 'white';
                document.getElementById('navbtn-three').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-three').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["slope-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Slope of a Line</h1>
        <p className={InfoPages["intro-brief"]}>This section will explain to you what the slope of a line is.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>What's a Slope</h2>
        <p>In the most simple terms, a slope is simply the rate of change. In this case,</p>
        <p>the rate of change of a line. Usually represented in the equation: y = mx + b</p>
        <h3>Independent and dependent variables</h3>
        <p>On most equations the independent variable will be x and the dependent will be y.</p>
        <p>When there is a change in y that depends on a change in x, such as when time goes on the sun will go down,</p>
        <p>that makes x the independent variable and y the dependent variable, since any change in y depends on x</p>
        <p>and x doesn't rely on anyone to change. If an dependent value is unchanged as x changes, then it's called</p>
        <p>a constant of variation, as the rate is constant.</p>
        <h3>Finding Slope of a line</h3>
        <p>Think of finding the slope of a line like finding the steepness of a line, which is measured by it's slope</p>
        <p>The slope is ratio of the lines rise to it's run. Mostly described as the variable m.</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`slope = m = \frac{rise}{run}`}/>
        </div>
        <p>This can also be known as,</p>
        <div className={InfoPages['math-txt']}>
        <MathComponent tex={String.raw`\frac{\Delta x}{\Delta y}`}/>
        </div>
        <p>Which means a change in x over a change in y. The symbol is called delta.</p>
        <h3>Signs of Rise and run</h3>
        <p>When the rise and run are moving upwards and towards the right respectively, then they are positive.</p>
        <p>When the rise and run are moving downwards and towards the left respectively, then they are negative.</p>
        <iframe src="https://www.youtube.com/embed/tR55FtVAfEE" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}}id={InfoPages['vid-src']}><i>Mr. Catley</i> - Youtube</p>
        </div>
    </div>
}

