import { NavLink } from 'react-router-dom'

export default function Card({ continent, flag, name, id }) {

    return (
        <>
            <div>
                <h1>{name}</h1>
                <h2>Continent: {continent}</h2>
                <NavLink to={`/detail/${id}`} >
                    <img src={flag} alt={name} />
                </NavLink>
            </div>
        </>
    )
}