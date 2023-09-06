import InfoPages from '../info-pages.module.css'
import Navbar from '../pages/navbar'
import { Sidemenu } from '../pages/sidemenu'
import { SideNav } from "./sideNav"

export function EquationMenu () {

    return <div className="H">
        <Navbar/>
        <Sidemenu/>
        <div className={InfoPages["container-info"]}>
            <h1>e</h1>
        </div>
    </div>
}

