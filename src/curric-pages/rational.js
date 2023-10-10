import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";



export function RationalMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-ten')) {
            document.getElementById('btn-ten').style.backgroundColor = '#3588AD';
            document.getElementById('btn-ten').style.color = 'white';
            document.getElementById('btn-ten').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-ten').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-ten')) {
                document.getElementById('navbtn-ten').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-ten').style.color = 'white';
                document.getElementById('navbtn-ten').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-ten').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Rational Expressions</h1>
        <p className={InfoPages["intro-brief"]}>A more in depth look of normal fractional expressions.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>Different Exponents</h3>
        <p>You're probably familiar with exponents from integers after 0.</p>
        <p>But theres a whole world of exponents when you look at rational and negative exponents.</p>
        <h3>Rational Exponents</h3>
        <p>Rational exponents are the more formal definition of roots.</p>
        <p>Take for example,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\sqrt{x}`}/>
        </div>
        <p>It can also be defined using rational exponents</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\sqrt{x} = x^{1/2}`}/>
        </div>
        <p>The definition of rational exponents is:</p>
        <p>Assume your given the fraction:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\frac{p}{q}, q \neq 0`}/>
            <MathComponent tex={String.raw`x^{\frac{p}{q}} = \sqrt[q]{x^p}`}/>
        </div>
        <h3>Negative Exponents</h3>
        <p>Assume you have the equation:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x^{-1}`}/>
        </div>
        <p>This is just equiavlent to:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\frac{1}{x}`}/>
        </div>
        <p>For more general cases:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`x^{-p}, p\in \mathbb{R}`}/>
            <MathComponent tex={String.raw`x^{-p} = \frac{1}{x^p}`}/>
        </div>
        <h3>Simplifying Rational Expressions</h3>
        <p>When Simplifying rational expression there are many steps to ensure</p>
        <p>you get the correct answer, the resources below will help you with,</p>
        <p>the understanding of how to reach this answer.</p>
        </div>
    </div>
}

