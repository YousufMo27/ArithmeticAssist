import AppCss from '../App.module.css'
import image1 from '../images/G9.jpg'
import image2 from '../images/G10.jpg'
import image3 from '../images/G11.jpg'
import image4 from '../images/G12.jpg'

export default function SecondHero () {
    return <div className={AppCss["second-hero-background"]}>
        <div className={AppCss['info-stuff']}>
        <h1 className={AppCss['second-background-intro']}>Why We Started?</h1>
        <p className={AppCss['second-hero-first']}>I created ArithmeticAssist because I struggled with math, especially in high school. I believe that</p>
        <p className={AppCss['second-hero-first']} id='second-line'>the foundations of Mathematics taught in high school are crucial for a good understanding. The</p>
        <p className={AppCss['second-hero-first']} id='third-line'>goal of ArithmeticAssist is to show the recourses I used when learning Mathematics in hopes of</p>
        <p className={AppCss['second-hero-first']} id='fourth-line'>preventing others from struggling with math the way I did. Disclaimer that all of the resources</p>
        <p className={AppCss['second-hero-first']} id='fourth-line'>found are online and I do not own any of them.</p>
        </div>
        <h1>Topics we showcase</h1>
        <div className={AppCss['third-hero']}>
        <img className={AppCss["image-one"]} src={image1} alt="dd"/>
        <h1 className={AppCss["image-one-text"]}>Grade 9</h1>
        <img className={AppCss["image-two"]} src={image2} alt="dd"/>
        <h1 id={AppCss['txt-two']} className={AppCss["image-one-text"]}>Grade 10</h1>
        <img className={AppCss["image-three"]} src={image3} alt="dd"/>
        <h1 id={AppCss['txt-three']} className={AppCss["image-one-text"]}>Grade 11</h1>
        <img className={AppCss["image-four"]} src={image4} alt="dd"/>
        <h1 id={AppCss['txt-four']} className={AppCss["image-one-text"]}>Grade 12</h1>
        </div>
    </div>

}  