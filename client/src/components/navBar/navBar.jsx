import { NavLink, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/searchBar"

import style from './navBar.module.css'

export default function NavBar() {
    const location = useLocation()
    return (
        <>
            {location.pathname !== '/home' && <NavLink to={'/home'}><button>Home</button></NavLink>}
            <div className={style.container}>
                {location.pathname !== '/form' && <NavLink to={'/form'}><button>Create Activity</button></NavLink>}
                {location.pathname === '/home' && <SearchBar />}
            </div>
        </>
    )
}