import InfoPages from '../info-pages.module.css'
import {Link} from 'react-router-dom'

export default function NavbarPage () {
    return <nav className={InfoPages["navbar"]}>
    <Link to="/homepage" style={{ textDecoration: 'none' }}>
    <label className={InfoPages["logo"]} href ="/">ArithmeticAssist</label>
    </Link>
    </nav>
}  