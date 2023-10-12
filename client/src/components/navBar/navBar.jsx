import { NavLink, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"

//Actions
import { logout } from "../../Redux/Actions/actions"

//Components
import SearchBar from "../SearchBar/searchBar"

//Estilos
import style from './navBar.module.css'

export default function NavBar() {

    const location = useLocation()

    const dispatch = useDispatch()

    const clickHandler = () => {
        dispatch(logout())
    }
    return (
        <>
            <div className={style.container}>
                {location.pathname !== '/home' && location.pathname !== '/' && <NavLink to={'/home'}><button>Home</button></NavLink>}
                {location.pathname !== '/form' && location.pathname !== '/' && <NavLink to={'/form'}><button>Create Activity</button></NavLink>}
                {location.pathname === '/home' && <SearchBar />}
                {location.pathname !== '/game' && location.pathname !== '/' && <NavLink to={'/game'}><button>Quiz!</button></NavLink>}
                {location.pathname !== '/activities' && location.pathname !== '/' && <NavLink to={'/activities'}><button>Activities</button></NavLink>}
                {location.pathname !== '/' && <button onClick={clickHandler}>Exit</button>}
            </div>
        </>
    )
}