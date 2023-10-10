import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";
import trig from '../images/trig.png'

export function TrigMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-eight')) {
            document.getElementById('btn-eight').style.backgroundColor = '#3588AD';
            document.getElementById('btn-eight').style.color = 'white';
            document.getElementById('btn-eight').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-eight').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-eight')) {
                document.getElementById('navbtn-eight').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-eight').style.color = 'white';
                document.getElementById('navbtn-eight').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-eight').style.backgroundColor = '';
                });
            }
              }, [])
    return <div className={InfoPages["container"]}>
    <Navbar/>
    <Secondnavbar/>
    <Sidemenu/>
        <div className={InfoPages["container-info"]}>
            
            <h1 className={InfoPages["title"]}>Intro to Trigonometry</h1>
            <p className={InfoPages["intro-brief"]}>This section will cover the basics of trig</p>
            <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
            <h2>Trig Ratios</h2>
            <h3>Right-Angle Triangles</h3>
            <p>The trig ratios only apply on right angle triangles.</p>
            <p>This image helps as a reference for which side is which.</p>
            <img className={InfoPages['img-of-graph']} id={InfoPages['trig-img']} src={trig} alt="dd"/>
            <p>There are three Trig Ratios</p>
            <p style={{marginTop: 20}}>The first one is the sine ratio</p>
            <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`sin(\theta) = \frac{opposite}{hypotenuse}`}/>
            </div>
            <p style={{marginTop: 20}}>The second one is the cosine ratio</p>
            <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`cos(\theta) = \frac{adjacent}{hypotenuse}`}/>
            </div>
            <p style={{marginTop: 20}}>The third one is the tan ratio</p>
            <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`sin(\theta) = \frac{opposite}{adjacent}`}/>
            </div>
            <h3>Finding angles using trig ratios</h3>
            <p style={{marginTop: 20}}>To find an angle you can use the inverse of a trig function.</p>
            <p>Most times this is just a button on your calculator.</p>
            <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`sin(\theta) = \frac{opposite}{hypotenuse}`}/>
            <MathComponent tex={String.raw`\theta = sin^{-1}(\frac{opposite}{hypotenuse})`}/>
            </div>
            <h3>Sine Law</h3>
            <p>The sine law is used when dealing with more than just right-angle triangles.</p>
            <p>It's defined as:</p>
            <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\frac{sinA}{a} =\frac{sinB}{b}=\frac{sinC}{c} `}/>
            </div>
            <p>Where all the uppercase letters are angles, and the lowercase ones are side lengths</p>
            <h3>Cosine Law</h3>
            <p>The Cosine Law can be used to solve for a side length when you know 2 sides and the angle contained by said 2 sides.</p>
            <p>It's defined as follows:</p>
            <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`c^2 = a^2 + b^2 -2abcos(C)`}/>
            </div>
        </div>
    </div>
}