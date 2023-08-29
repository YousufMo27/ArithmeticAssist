import '../App.css'
import image1 from '../images/G9.jpg'
import image2 from '../images/G10.jpg'
import image3 from '../images/G11.jpg'
import image4 from '../images/G12.jpg'

export default function SecondHero () {
    return <div className="second-hero-background">
        <div className="second-hero-txt">
        <h1>Why We Started?</h1>
        <p className='second-hero-first'>I created ArithmeticAssist because I struggled with math, especially in high school. I believe that</p>
        <p className='second-hero-first' id='second-line'>the foundations of Mathematics taught in high school are crucial for a good understanding. The</p>
        <p className='second-hero-first' id='third-line'>goal of ArithmeticAssist is to show the recourses I used when learning Mathematics in hopes of</p>
        <p className='second-hero-first' id='fourth-line'>preventing others from struggling with math the way I did. Disclaimer that all of the resources</p>
        <p className='second-hero-first' id='fourth-line'>found are online and I do not own any of them.</p>
        <div className="final-hero-section">
        <h1>Topics we showcase</h1>
        <img className="image-one" src={image1} alt="dd"/>
        <h1 className="image-one-text">Grade 9</h1>
        <img id="img-two" className="image-one" src={image2} alt="dd"/>
        <h1 id="txt-two" className="image-one-text">Grade 10</h1>
        <img id="img-three" className="image-one" src={image3} alt="dd"/>
        <h1 id="txt-three" className="image-one-text">Grade 11</h1>
        <img id="img-four" className="image-one" src={image4} alt="dd"/>
        <h1 id="txt-four" className="image-one-text">Grade 12</h1>
        </div>
        </div>
    </div>

}  