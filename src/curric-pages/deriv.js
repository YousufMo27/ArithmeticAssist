import InfoPages from '../info-pages.module.css'
import Navbar from "../pages/navbar"
import { Sidemenu } from "../pages/sidemenu"
import Secondnavbar from "../pages/second-nav"
import { React, useEffect } from 'react'
import { MathComponent } from "mathjax-react";

export function DerivativeMenu () {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        if(document.getElementById('btn-nineteen')) {
            document.getElementById('btn-nineteen').style.backgroundColor = '#3588AD';
            document.getElementById('btn-nineteen').style.color = 'white';
            document.getElementById('btn-nineteen').style.fontWeight = 'bold';

            window.addEventListener('beforeunload', () => {
                // This code will run before the page is unloaded
                document.getElementById('btn-nineteen').style.backgroundColor = '';
            });
        }
          }, [])


          useEffect(() => {
            document.body.style.overflow = "hidden";
            if(document.getElementById('navbtn-19')) {
                document.getElementById('navbtn-19').style.backgroundColor = '#3588AD';
                document.getElementById('navbtn-19').style.color = 'white';
                document.getElementById('navbtn-19').style.fontWeight = 'bold';

                window.addEventListener('beforeunload', () => {
                    // This code will run before the page is unloaded
                    document.getElementById('navbtn-19').style.backgroundColor = '';
                });
            }
              }, [])

    return <div className={InfoPages["equation-container"]}>
        <Navbar/>
        <Secondnavbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
        <h1 className={InfoPages["title"]}>The Derivative</h1>
        <p className={InfoPages["intro-brief"]}>this</p>
        <hr className={InfoPages["border-line"]} style={{marginBottom: 40}}></hr>
        <h3>What's a Derivative</h3>
        <p>The Derivative is the method to finding the instantaneous rate of change.</p>
        <p>When you find the Derivative you are pretty much finding the slope of the original.</p>
        <h3>First Principles Definition</h3>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\frac{f(x+h) - f(x)}{h}`}/>            
        </div>
        <p>You probably recall that this is the difference quotient.</p>
        <p>The way to find the instantaneous rate of change/</p>
        <p>It's also the way to find the derivative, for now at least.</p>
        <p>First principles definition of a derivative goes as follows.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{h \to 0} \frac{f(x+h) - f(x)}{h}`}/>            
        </div>
        <p>When you plug in h = 0, you will get a 0/0 limit. Meaning you will have to manipulate to solve it.</p>
        <p>Say for example you want to find the derivative of the quadratic.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\lim_{h \to 0} \frac{f(x+h) - f(x)}{h}`}/>            
            <MathComponent tex={String.raw` = \lim_{h \to 0} \frac{(x+h)^2 - (x^2)}{h}`}/>            
        </div>
        <p>From here you will have to use binomial expansion to solve the limit.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw` = \lim_{h \to 0} \frac{(x^2 + 2xh + h^2) - (x^2)}{h}`}/>            
            <MathComponent tex={String.raw` = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}`}/>            
            <MathComponent tex={String.raw` = \lim_{h \to 0} \frac{2xh + h^2}{h}`}/>            
            <MathComponent tex={String.raw` = \lim_{h \to 0} \frac{h(2x + h)}{h}`}/>            
        </div>
        <p>From here you see the 'h's cancel, and you can plug in the value for h.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw` = \lim_{h \to 0} 2x + h`}/>            
            <MathComponent tex={String.raw`f'(x)= 2x`}/>            
        </div>
        <p>To denote the derivative we use the notation f'(x) known as lagranges notation.</p>
        <p>You can also use Leibniz notation, which appears like this.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`\frac{dy}{dx} = 2x`}/>            
        </div>
        <p>This just means the derivative of y or f(x) with respect to x.</p>
        <h3>When you can't take the derivative</h3>
        <p>There are some rules when differentiating (taking the derivative) that you need to consider.</p>
        <p>You can't take the derivative of f(x) where f'(x) doesn't exist, take for example a vertical asymptote.</p>
        <p>You also can't take the derivative at a sharp point, think for example x = 0 on the absolute value function.</p>
        <h3>Derivative Rules</h3>
        <p>You probably realized that this would be a pretty tedious way to find the derivative.</p>
        <p>Especially for some more complicated functions, thankfully there are some rules to help with that.</p>
        <h3>Power Rule</h3>
        <p>The very first rule with derivatives is the power rule.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^n`}/>            
            <MathComponent tex={String.raw`f'(x) = nx^{n-1}`}/>            
        </div>        
        <p>You bring the exponent down and subtract it.</p>
        <p>Some examples are:</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x^2`}/>            
            <MathComponent tex={String.raw`f'(x) = 2x`}/>            
        </div>        
        <p>There's alsot linear function of f(x) = x</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = x`}/>            
            <MathComponent tex={String.raw`f'(x) = (1)x^0`}/>            
            <MathComponent tex={String.raw`f'(x) = (1)(1) = 1`}/>            
        </div>        
        <p>This rule also works for reciprocal functions.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = \frac{1}{x}`}/>                      
            <MathComponent tex={String.raw`f(x) = x^-1`}/>
            <MathComponent tex={String.raw`f'(x) = -x^{-2}`}/>                      
            <MathComponent tex={String.raw`f'(x) = -\frac{1}{x^2}`}/>                      
        </div>        
        <h3>The sum and difference rule</h3>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`(f(x) \pm g(x))'`}/>                      
            <MathComponent tex={String.raw`= f'(x) \pm g'(x)`}/>                      
        </div>        
        <h3>The Product Rule</h3>
        <p>Unfortunatley the derivative of the product isn't just the derivative of one mulitlpied by the other.</p>
        <p>It goes like this,</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = g(x)h(x)`}/>                     
            <MathComponent tex={String.raw`f'(x) = g(x)h'(x) + g'(x)h(x)`}/>                     
        </div>        
        <h3>The Quotient Rule</h3>
        <p>Same goes for the division of two functions, the rules are quite similar.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = \frac{g(x)}{h(x)}`}/>                     
            <MathComponent tex={String.raw`f'(x) = \frac{g(x)h'(x) + g'(x)h(x)}{[g(x)]^2}`}/>                     
        </div>
        <h3>The Chain Rule</h3>
        <p>The chain rule for differentiation involves taking the derivative of the "outer" then the "inner".</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = g(h(x))`}/>                     
            <MathComponent tex={String.raw`f'(x) = g'(h(x))h'(x)`}/>                     
        </div>
        <p>It's best explained with an example.</p>
        <div className={InfoPages['math-txt']}>
            <MathComponent tex={String.raw`f(x) = (x^2+2)^2`}/>                     
            <MathComponent tex={String.raw`g(x) = ()^2`}/>                     
            <MathComponent tex={String.raw`h(x) = x^2 + 2`}/>                     
            <MathComponent tex={String.raw`f'(x) = 2(x^2+2)2x`}/>                      
            <MathComponent tex={String.raw`f'(x) = 4x(x^2 +2)`}/>                      
        </div>
        </div>
    </div>
}

