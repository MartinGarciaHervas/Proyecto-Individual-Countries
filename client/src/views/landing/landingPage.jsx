import Register from '../../components/register/register'

//Estilos
import style from './landingPage.module.css'

export default function Landing() {

    return (
        <div className={style.container}>
            <Register/>
            {/* <NavLink to={'/home'}>
            <div className={style.gif}></div>
            </NavLink> */}
        </div>
    )
}