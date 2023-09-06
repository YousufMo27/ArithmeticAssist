import AppCss from '../App.module.css'
import {Link} from 'react-router-dom'

export default function Hero () {
    return <div className={AppCss["hero-background"]}>
        <div className={AppCss["hero-txt"]}>
            <h1>Welcome to ArithmeticAssist, a website made to help.</h1>
            <p className={AppCss["first"]}>We have a collection of resources for students who are struggling</p>
            <p className={AppCss["second"]}>with High School Mathematics.</p>
            <Link to="/polynomial">
            <button className={AppCss["course-btn"]} ><span>View Resources</span></button>
            </Link>
            <button className={AppCss["course-btn"]} id={AppCss["second-course-btn"]}><span>About Us</span></button>
        </div>
    </div>

}  