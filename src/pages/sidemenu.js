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
                <button className={InfoPages['item-buttons']}>Quadratics</button>
                <button className={InfoPages['item-buttons']}>More on Quadratics</button>
                <button className={InfoPages['item-buttons']}>Trigonometry</button>
            </ul>
            <h1 className={InfoPages['title-name']}>Grade 11 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Functions</button>
                </Link>
                <button className={InfoPages['item-buttons']}>Rational Expressions</button>
                <button className={InfoPages['item-buttons']}>Transformations</button>
                <button className={InfoPages['item-buttons']}>Exponential Functions</button>
                <button className={InfoPages['item-buttons']}>Trig Functions</button>
                <button className={InfoPages['item-buttons']}>Trig Identities</button>
            </ul>

            <h1 className={InfoPages['title-name']}>Grade 12 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button className={InfoPages['item-buttons']}>Polynomials</button>
                </Link>
                <button className={InfoPages['item-buttons']}>Equation Solving</button>
                <button className={InfoPages['item-buttons']}>Working with Data</button>
                <button className={InfoPages['item-buttons']}>Slope of a Line</button>
                <button className={InfoPages['item-buttons']}>Equation of a Line</button>
                <button className={InfoPages['item-buttons']}>Geometry</button>
            </ul>
    </div>
</div>
}
