import './App.css'
export default function Hero () {
    return <div className="hero-background">
        <div className="hero-txt">
            <h1>Welcome to ArithmeticAssist, a website made to help.</h1>
            <p className="first">We have a collection of recourses for students who are struggling</p>
            <p className="second">with High School Mathematics.</p>
            <button className="course-btn" onclick="window.location.href='https://w3docs.com';"><span>View Recourses</span></button>
            <button className="course-btn" id="second-course-btn" onclick="window.location.href='https://w3docs.com';"><span>About Us</span></button>
        </div>
    </div>

}  