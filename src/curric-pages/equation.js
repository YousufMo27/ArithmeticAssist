import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'

export function EquationMenu () {
    
    useEffect(() => {
        document.body.style.overflow = "hidden";
          }, [])

    return <div className={InfoPages["container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>Solving Equations </h1>
        <p className={InfoPages["intro-brief"]}>This section will explain how to solve equations which will be given to you at this level.</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        </div>
    </div>
}

