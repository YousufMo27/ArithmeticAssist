import InfoPages from '../info-pages.module.css'

import { Link } from 'react-router-dom'

export function Sidemenu () {
    
    
    return <div className={InfoPages['app']}>
    
    <div className={InfoPages['side-menu']}>

        <h1 className={InfoPages['title-name']}>Grade 9 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button id='btn-one' className={InfoPages['item-buttons']}>Polynomials</button>
                </Link>
                <Link  to='/Equation' style={{ textDecoration: 'none' }}>
                <button id='btn-two' className={InfoPages['item-buttons']}>Equation Solving</button>
                </Link>
                <Link to="/slope" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Slope of a Line</button>
                </Link>
                <Link to="/line-equation" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Equation of a Line</button>
                </Link>
            </ul>
            <h1 className={InfoPages['title-name']}>Grade 10 Content</h1>
            <ul>
                <Link to="/systems" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Systems</button>
                </Link>
                <Link to="/factor" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Factoring</button>
                </Link>
                <Link to="/quadratic" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Quadratics</button>
                </Link>
                <Link to="/trig" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Trigonometry</button>
                </Link>
            </ul>
            <h1 className={InfoPages['title-name']}>Grade 11 Content</h1>
            <ul>
                <Link to="/functions" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Functions</button>
                </Link>
                <Link to="/rationals" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Rational Expressions</button>
                </Link>
                <Link to="/transformations" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Transformations</button>
                </Link>
                <Link to="/exponential" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Exponential Functions</button>
                </Link>
                <Link to="/trig-functions" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Trig Functions</button>
                </Link>
                <Link to="/trig-identities" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Trig Identities</button>
                </Link>
            </ul>

            <h1 className={InfoPages['title-name']}>Grade 12 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Higher Degree Functions</button>
                </Link>
                <button className={InfoPages['item-buttons']}>Logarithms</button>
                <button className={InfoPages['item-buttons']}>Calculus</button>
                <button className={InfoPages['item-buttons']}>Derivatives</button>
                <button className={InfoPages['item-buttons']}>Curve Sketching</button>
            </ul>
    </div>
</div>
}
