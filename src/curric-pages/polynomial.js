import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'

export function PolynomialMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
          }, [])
    return <div className="container">
    <Navbar/>
    <Secondnavbar/>
    <Sidemenu/>
        <div className={InfoPages["container-info"]}>
            
            <h1 className={InfoPages["title"]}>Intro to Polynomials, Exponents, and Exponent Laws</h1>
            <p className={InfoPages["intro-brief"]}>This section will cover exponents, exponent laws, polynomials, and polynomial properties.Polynomials are the foundation for almost future concepts in Math.</p>
            <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
            <h2>Exponents</h2>
            <p>Exponents are repeated multplication similar to the way how multplication is repeated additon,</p>
            <p>a number to the power of another number has to be multiplied that many times. For</p>
            <p>example, 2² = 2 x 2 = 4. 2³ = 2 x 2 x 2 = 8. By definition any non zero number to</p>
            <p>the power of 0 is 1, i.e 2⁰ = 1.</p>
            <h3>Exponent Laws</h3>
            <p>Exponent Laws are crucial when it comes to polynomial multiplication and division</p>
            <p>of the same variable, and plays a factor in future Math concepts. There are three</p>
            <p>Exponent Laws</p>
            <h3>Product of Powers</h3>
            <p>When multiplying two values with the same bases, you keep the base the same</p>
            <p>base and add the exponents.For example, (x²)(x) = x²⁺¹ = x³.</p>
            <h3>Quotient of Powers</h3>
            <p>When dividing two values of the same base, you keep the base and subtract the exponents</p>
            <p>For example, x²&frasl;x = x²⁻¹ = x</p>
            <h3>Power of a Power</h3>
            <p>When an expression is being raised to a power, you multiply the exponents and keep the base.</p>
            <p>For example, (x²)³ = x²*³ = x⁶</p>
            <h3>Power of a Product</h3>
            <p>When a base is being raised to an exponent, you raise that exponent to each part of the base.</p>
            <p>For example, (xyz)³ = x³y³z³</p>
            <h3>Power of a Quotient</h3>
            <p>When a quotient is raised to a power, the power will be applied to the numerator and denominator</p>
            <p>For example, (x&frasl;y)⁶ = x⁶&frasl;y⁶</p>
            <h2>Polynomial Properties</h2>
            <p>Polynomial expressions have many properties and rules, like the distributive property for example.</p>
            <p>This video will help explain the rules and concepts.</p>
            <iframe src="https://www.youtube.com/embed/BSCSNAF_aQg" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
            <p id={InfoPages['vid-src']}><i>Organic Chemistry Tutor</i> - Youtube</p>
        </div>
    </div>
}