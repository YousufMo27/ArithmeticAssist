import '../info-pages.css'
import {Link} from 'react-router-dom'

export default function NavbarPage () {
    return <nav className="navbar">
    <Link to="/homepage" style={{ textDecoration: 'none' }}>
    <label className='logo' href ="/">ArithmeticAssist</label>
    </Link>
    </nav>
}  