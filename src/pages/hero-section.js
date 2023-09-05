import '../App.css'
import {Link} from 'react-router-dom'

export default function Hero () {
    return <div className="hero-background">
        <div className="hero-txt">
            <h1>Welcome to ArithmeticAssist, a website made to help.</h1>
            <p className="first">We have a collection of resources for students who are struggling</p>
            <p className="second">with High School Mathematics.</p>
            <Link to="/polynomial">
            <button className="course-btn" ><span>View Resources</span></button>
            </Link>
            <button className="course-btn" id="second-course-btn"><span>About Us</span></button>
        </div>
    </div>

}  