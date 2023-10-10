import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";


export function MoreTrigMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-21')) {
            document.getElementById('btn-21').style.backgroundColor = '#3588AD';
            document.getElementById('btn-21').style.color = 'white';
            document.getElementById('btn-21').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-21').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-16')) {
                document.getElementById('navbtn-16').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-16').style.color = 'white';
                document.getElementById('navbtn-16').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-16').style.backgroundColor = '';
                });
            }
              }, []) 

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>More on Trig</h1>
        <p className={InfoPages["intro-brief"]}>The same except for one really big change</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>Radians</h2>
        <p>From grade 11 to grade 12 not a lot changes, except from grade 12 onward, we use radians instead of degrees.</p>
        <p>Radians are a way to measure angles similar to degrees except we use pi. Make sure to put your calcuator in radian mode.</p>
        <p>To convert from degrees to radians there is a really easy formula to remember,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`1 \; deg = \frac{\pi}{180}`}/>
            <MathComponent tex={String.raw`1 \; rad = \frac{180}{\pi}`}/>
        </div>
        <h3>Important Values</h3>
        <p>When dealing with trig there are some key values which every function shares.</p>
        <p>Like 0 or 90 degrees. These are those important values in radians,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`0^{o} = 0 \;`}/>
            <MathComponent tex={String.raw`30^{o} = \frac{\pi}{6} \;`}/>
            <MathComponent tex={String.raw`45^{o} = \frac{\pi}{4}`}/>
            <MathComponent tex={String.raw`60^{o} = \frac{\pi}{3}`}/>
            <MathComponent tex={String.raw`90^{o} = \frac{\pi}{2}`}/>
            <MathComponent tex={String.raw`180^{o} = \pi`}/>
            <MathComponent tex={String.raw`270^{o} = \frac{3\pi}{2}`}/>
            <MathComponent tex={String.raw`360^{o} = 2\pi`}/>
        </div>
        <p>Knowing these are all you really need for trig at this level.</p>
        </div>
    </div>
}

