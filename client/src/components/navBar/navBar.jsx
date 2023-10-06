import { NavLink, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/searchBar"

import style from './navBar.module.css'

export default function NavBar() {
    const location = useLocation()
    return (
        <>
            <div className={style.container}>
            {location.pathname !== '/home' && location.pathname !== '/' && <NavLink to={'/home'}><button>Home</button></NavLink>}
                {location.pathname !== '/form' && location.pathname !== '/' && <NavLink to={'/form'}><button>Create Activity</button></NavLink>}
                {location.pathname === '/home' && <SearchBar />}
                {location.pathname !== '/game' && <NavLink to={'/game'}><button>Quiz!</button></NavLink>}
                {location.pathname !== '/' && <NavLink to={'/'}><button>Exit</button></NavLink>}
            </div>
        </>
    )
}