import React, { useRef, useEffect, useState } from 'react';
import InfoPages from '../info-pages.module.css';


export default function Secondnavbar() {
  const navbarRef = useRef(null);
  const [isHeldMouse, setisHeldMouse] = useState(false);

  useEffect(() => {
    const currentContainer = navbarRef.current;

    const handleMouseDown = (event) => {
        const isScrollLink = event.target.classList.contains('scroll-link');
      
        if (isScrollLink) {
          event.preventDefault();
          setisHeldMouse(true);
        }
      };

    const handleMouseUp = () => {
      setisHeldMouse(false);
    };

    document.addEventListener('mouseup', handleMouseUp);

    const handleMouseMove = (event) => {
      if (isHeldMouse && currentContainer) {
        currentContainer.scrollLeft -= event.movementX;
      }
    };

    const anchorTags = document.querySelectorAll('.scroll-link');
    anchorTags.forEach((tag) => {
      tag.addEventListener('mousedown', handleMouseDown);
      tag.addEventListener('mouseup', handleMouseUp);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      anchorTags.forEach((tag) => {
        tag.addEventListener('dragstart', (e) => e.preventDefault());
        tag.addEventListener('mousedown', handleMouseDown);
        tag.addEventListener('mouseup', handleMouseUp);
      });
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isHeldMouse]);

  return (
    <nav className={InfoPages.navinfo} ref={navbarRef}>
      <a href="/polynomial" id='navbtn-one' className="scroll-link" style={{ textDecoration: 'none' }}>Polynomials</a>
      <a href="/Equation" id='navbtn-two' className="scroll-link" style={{ textDecoration: 'none' }}>Equation Solving</a>
      <a href="/slope" id='navbtn-three' className="scroll-link" style={{ textDecoration: 'none' }}>Slope</a>
      <a href="/line-equation"  id='navbtn-four' className="scroll-link" style={{ textDecoration: 'none' }}>Line Equations</a>
      <a href="/systems" id='navbtn-five' className="scroll-link" style={{ textDecoration: 'none' }}>Systems</a>
      <a href="/factor" id='navbtn-six' className="scroll-link" style={{ textDecoration: 'none' }}>Factoring</a>
      <a href="/quadratic" id='navbtn-seven' className="scroll-link" style={{ textDecoration: 'none' }}>Quadratics</a>
      <a href="/trig" id='navbtn-eight' className="scroll-link" style={{ textDecoration: 'none' }}>Trig</a>
      <a href="/functions" id='navbtn-nine' className="scroll-link" style={{ textDecoration: 'none' }}>Functions</a>
      <a href="/rationals" id='navbtn-ten' className="scroll-link" style={{ textDecoration: 'none' }}>Rationals</a>
      <a href="/transformations" id='navbtn-11' className="scroll-link" style={{ textDecoration: 'none' }}>Transformations</a>
      <a href="/exponential" id='navbtn-12' className="scroll-link" style={{ textDecoration: 'none' }}>Exponentials</a>
      <a href="/trig-functions" id='navbtn-13' className="scroll-link" style={{ textDecoration: 'none' }}>Trig Functions</a>
      <a href="/trig-identities" id='navbtn-14' className="scroll-link" style={{ textDecoration: 'none' }}>Trig Identities</a>
      <a href="/higher-degree" id='navbtn-15' className="scroll-link" style={{ textDecoration: 'none' }}>More Functions</a>
      <a href="/more-trig" id='navbtn-16' className="scroll-link" style={{ textDecoration: 'none' }}>More Trig</a>
      <a href="/logs" id='navbtn-17' className="scroll-link" style={{ textDecoration: 'none' }}>Logs</a>
      <a href="/calculus" id='navbtn-18' className="scroll-link" style={{ textDecoration: 'none' }}>Calculus</a>
      <a href="/derivative" id='navbtn-19' className="scroll-link" style={{ textDecoration: 'none' }}>Derivatives</a>
      <a href="/curvesketch" id='navbtn-20' className="scroll-link" style={{ textDecoration: 'none' }}>Curve Sketching</a>
    </nav>
  );
}
