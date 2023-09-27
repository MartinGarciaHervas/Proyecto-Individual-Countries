import { NavLink } from 'react-router-dom'
import style from './landingPage.module.css'

export default function Landing() {
    return (
        <div className={style.container}>
            <NavLink to={'/home'}>
            <div className={style.gif}></div>
            </NavLink>
        </div>
    )
}