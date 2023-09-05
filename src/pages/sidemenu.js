import '../App.css'
import { Link } from 'react-router-dom'

export function Sidemenu () {

    return <div className="side-menu">
        
        <h1 className='title-name'>Grade 9 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button id='btn-one' className='item-buttons'>Polynomials</button>
                </Link>
                <Link id='btn-two' to='/Equation' style={{ textDecoration: 'none' }}>
                <button className='item-buttons'>Equation Solving</button>
                </Link>
                <button className='item-buttons'>Working with Data</button>
                <button className='item-buttons'>Slope of a Line</button>
                <button className='item-buttons'>Equation of a Line</button>
                <button className='item-buttons'>Geometry</button>
            </ul>
            <h1 className='title-name'>Grade 10 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button className='item-buttons'>Systems</button>
                </Link>
                <button className='item-buttons'>More on Geometry</button>
                <button className='item-buttons'>Factoring</button>
                <button className='item-buttons'>Quadratics</button>
                <button className='item-buttons'>More on Quadratics</button>
                <button className='item-buttons'>Trigonometry</button>
            </ul>
            <h1 className='title-name'>Grade 11 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button className='item-buttons'>Functions</button>
                </Link>
                <button className='item-buttons'>Rational Expressions</button>
                <button className='item-buttons'>Transformations</button>
                <button className='item-buttons'>Exponential Functions</button>
                <button className='item-buttons'>Trig Functions</button>
                <button className='item-buttons'>Trig Identities</button>
            </ul>

            <h1 className='title-name'>Grade 12 Content</h1>
            <ul>
                <Link to="/polynomial" style={{ textDecoration: 'none' }}>
                <button className='item-buttons'>Polynomials</button>
                </Link>
                <button className='item-buttons'>Equation Solving</button>
                <button className='item-buttons'>Working with Data</button>
                <button className='item-buttons'>Slope of a Line</button>
                <button className='item-buttons'>Equation of a Line</button>
                <button className='item-buttons'>Geometry</button>
            </ul>
    </div>
    
}
