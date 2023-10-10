import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function TrigIdenMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-fifteen')) {
            document.getElementById('btn-fifteen').style.backgroundColor = '#3588AD';
            document.getElementById('btn-fifteen').style.color = 'white';
            document.getElementById('btn-fifteen').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-fifteen').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-14')) {
                document.getElementById('navbtn-14').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-14').style.color = 'white';
                document.getElementById('navbtn-14').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-14').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Trig Identities</h1>
        <p className={InfoPages["intro-brief"]}>Likely the most difficult concept in math</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>Proving an identity</h3>
        <p>To prove a trig identity you need to know the main equalities which are given to you.</p>
        <p style={{marginTop: 20}}>The most common one being:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`cos^2(x) + sin^2(x) = 1`}/>
        </div>
        <p>There's also the reciprocal identities:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`csc(x) = \frac{1}{sin(x)}`}/>
            <MathComponent  tex={String.raw`csc(x) = \frac{1}{sin(x)}`}/>
            <MathComponent  tex={String.raw`cot(x) = \frac{cos(x)}{sin(x)} = \frac{1}{cot(x)}`}/>

        </div>
        <h3>The Pythagorean Identities</h3>
        <p>The Pythagorean identities are:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`cos^2(x)= 1 - sin^2(x)`}/>
            <MathComponent  tex={String.raw`sin^2(x)= 1 - cos^2(x)`}/>
            <MathComponent  tex={String.raw`1 + tan^2(x) = sec^2(x)`}/>
            <MathComponent  tex={String.raw`sec^2(x) - 1 = tan^2(x)`}/>
            <MathComponent  tex={String.raw`1 + cot^2(x) = csc^2(x)`}/>
            <MathComponent  tex={String.raw`csc^2(x) - 1 = cot^2(x)`}/>
        </div>
        <h3>The Double Angle Identities</h3>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`sin(2x) = 2sin(x)cos(x)`}/>
            <MathComponent  tex={String.raw`cos(2x) = cos^2(x) - sin^2(x)`}/>
            <MathComponent  tex={String.raw`cos(2x) = 2cos^2(x) - 1`}/>
            <MathComponent  tex={String.raw`cos(2x) = 2cos^2(x) - 1`}/>
            <MathComponent  tex={String.raw`tan(2x) = \frac{2tan(x)}{1 - tan^2(x)}`}/>
        </div>
        <h3>Trig Addition Identities</h3>
        <div className={InfoPages['math-txt']}>
            <MathComponent  tex={String.raw`sin(a + b) = sin(a)cos(b) + cos(a)sin(b)`}/>
            <MathComponent  tex={String.raw`sin(a - b) = sin(a)cos(b) - cos(a)sin(b)`}/>
            <MathComponent  tex={String.raw`cos(a + b) = cos(a)cos(b) + sin(a)sin(b)`}/>
            <MathComponent  tex={String.raw`cos(a - b) = cos(a)cos(b) - sin(a)sin(b)`}/>
        </div>
        </div>
    </div>
}
