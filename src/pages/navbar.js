import '../App.css'
import {Link} from 'react-router-dom'
export default function Navbar () {
    return <nav className="navbar">
    <Link to="/homepage" style={{ textDecoration: 'none' }}>
    <label className="logo"><a href ="/">ArithmeticAssist</a></label>
    </Link>
    </nav>
}  