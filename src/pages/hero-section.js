import AppCss from '../App.module.css'
import {Link} from 'react-router-dom'
import { Link as Scroller } from 'react-scroll';

export default function Hero () {

    
    return <div className={AppCss["hero-background"]}>
            <h1>Welcome to ArithmeticAssist, a website made to help.</h1>
            <p>We have a collection of resources for students who are struggling</p>
            <p id={AppCss['second']}>with High School Mathematics.</p>
            <Link to="/polynomial">
            <button className={AppCss["course-btn"]} ><span>View Resources</span></button>
            </Link>
            <Scroller to="second-hero" smooth={true} duration={0}>
            <button className={AppCss['course-btn']} id={AppCss['second-course-btn']}><span>About Us</span></button>
            </Scroller>
    </div>

}  