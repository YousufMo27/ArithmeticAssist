import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";
import intersect from '../images/intersect.png'
import infinite from '../images/infinte.png'
import parallel from '../images/parallel.png'


export function SystemsMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-five')) {
            document.getElementById('btn-five').style.backgroundColor = '#3588AD';
            document.getElementById('btn-five').style.color = 'white';
            document.getElementById('btn-five').style.fontWeight = 'bold';
            document.getElementById('btn-five').scrollIntoView({
                behavior: 'smooth',
                block: 'start', 
            });
            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-five').style.backgroundColor = '';
            });
        }
          }, [])

          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-five')) {
                document.getElementById('navbtn-five').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-five').style.color = 'white';
                document.getElementById('navbtn-five').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-five').style.backgroundColor = '';
                });
            }
              }, [])
    return <div className={InfoPages["slope-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Systems of Equations</h1>
        <p className={InfoPages["intro-brief"]}>You'll learn an introduction to solving systems of equations</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h2>Solving Systems of Equations</h2>
        <h3>What are Systems of Equations?</h3>
        <p>Systems of equations are two seperate linear equations working together.</p>
        <p>When solving for these systems there are three situations you may encounter:</p>
        <p>No Solution, for example if you end up with an incorrect statement like, 0 = 1,</p>
        <p>the system would have no solution. When you have one solution you will know, it's when</p>
        <p>your x and y variables will have values, like x = 3, and y = 7. The third option is when the</p>
        <p>system has infinite solutions.</p>
        <h3>Solving Systems of equations graphically</h3>
        <p>The first case of no solution will appear graphically similarly to the image below,</p>
        <p>where the lines will be parallel, and never touch. Having no intersection.</p>
        <img className={InfoPages['img-of-graph']} src={parallel} alt="dd"/>
        <p>The second case of one solution will appear graphically similarly to the image below,</p>
        <p>where the lines will intersect at one point.</p>
        <img className={InfoPages['img-of-graph']} src={intersect} alt="dd"/>
        <p>The last case of infinte solutinons will appear graphically similarly to the image below,</p>
        <p>where the lines will be the same, interecting at every point</p>
        <img className={InfoPages['img-of-graph']} src={infinite} alt="dd"/>
        <h3>Solving Systems of Equations Using Arithmetic</h3>
        <p>To solve a system using Arithmetic you have to use one of two methods.</p>
        <p>Substitution or Elmination.</p>
        <iframe src="https://www.youtube.com/embed/vA-55wZtLeE"  width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p id={InfoPages['vid-src']}><i>Khan Academy</i> - Youtube</p>
        <iframe src="https://www.youtube.com/embed/0rAhyj4LYnk"  width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
        <p style={{marginBottom: 150}} id={InfoPages['vid-src']}><i>Brian McLogan</i> - Youtube</p>
        </div>
    </div>
}

