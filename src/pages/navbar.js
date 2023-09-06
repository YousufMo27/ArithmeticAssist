import AppCss from '../App.module.css'
import {Link} from 'react-router-dom'
export default function Navbar () {
    return <nav className={AppCss['navbar']}>
    <Link to="/homepage" style={{ textDecoration: 'none' }}>
    <label className={AppCss['logo']}><a href ="/">ArithmeticAssist</a></label>
    </Link>
    </nav>
}  