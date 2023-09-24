import { NavLink } from 'react-router-dom'
import style from './card.module.css'

export default function Card({ continent, flag, name, id }) {


    return (
        <>
            <div className={style.card}>
                <h1 className={style.name}>{name}</h1>
                <h2 className={style.continent}>Continent: {continent}</h2>
                <NavLink to={`/detail/${id}`} >
                    <img className={style.img} src={flag} alt={name} />
                </NavLink>
            </div>
        </>
    )
}