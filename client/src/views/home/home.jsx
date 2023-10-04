import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

import Paginado from "../../components/Paginado/Paginado";
import { filterByContinent, orderByAlphabetic, orderByPopulation, filterByActivity } from "../../Redux/Actions/actions";

import style from './home.module.css'

export default function Home() {

    const activities = useSelector(state => state?.activities)

    const dispatch = useDispatch()

    function orderByPopulationHandler(event) {
        dispatch(orderByPopulation(event.target.value))
    }

    function orderByAlphabeticHandler(event) {
        dispatch(orderByAlphabetic(event.target.value))
    }

    function filterByContinentHandler(event) {
        dispatch(filterByContinent(event.target.value))
    }

    function filterByActivityHandler(event) {
        dispatch(filterByActivity(event.target.value))
    }

    const [filterAux, setFilterAux] = useState(true)

    function filterAuxHandler() {
        setFilterAux(filterAux ? false : true)
    }

    const [orderAux, setOrderAux] = useState(false)

    function orderAuxHandler() {
        setOrderAux(orderAux ? false : true)
    }

    return (
        <>
            <div className={style.home}>
                <div className={style.order}>
                    <div className={style.filtros}>
                        {orderAux ? <button className={style.button} onClick={orderAuxHandler}><span className="material-symbols-outlined">filter_alt_off</span></button>
                            : <button className={style.button} onClick={orderAuxHandler}><span className="material-symbols-outlined">filter_alt</span></button>}
                        {<div className={orderAux ? style.order2 : style.order3}>
                            <div>
                                <p>By population</p>
                                <select onChange={orderByPopulationHandler}>
                                    <option value='ascendente'>Ascendente</option>
                                    <option value='descendente'>Descendente</option>
                                </select>
                            </div>
                            <div>
                                <p>Alphabetic</p>
                                <select onChange={orderByAlphabeticHandler}>
                                    <option value='ascendente'>Ascendente</option>
                                    <option value='descendente'>Descendente</option>
                                </select>
                            </div>
                        </div>}
                    </div>
                    <div className={style.filtros2}>
                        <div className={filterAux ? style.ordenes1 : style.ordenes2}>
                            <div>
                                <p>By Continent</p>
                                <select onChange={filterByContinentHandler}>
                                    <option value=''>All</option>
                                    <option value='Asia'>Asia</option>
                                    <option value='North America'>North America</option>
                                    <option value='South America'>South America</option>
                                    <option value='Antarctica'>Antarctica</option>
                                    <option value='Oceania'>Oceania</option>
                                    <option value='Europe'>Europe</option>
                                    <option value='Africa'>Africa</option>
                                </select>
                            </div>
                            <div>
                                <p>By Activity</p>
                                <select onChange={filterByActivityHandler}>
                                    <option value=''>All</option>
                                    {[...new Set(activities?.map(activity => activity.name.toUpperCase()))].map(name => (
                                        <option key={name} value={name}>{name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <button onClick={filterAuxHandler} className={style.button}><span className="material-symbols-outlined">toc</span></button>
                    </div>
                </div>
                <Paginado />
            </div>
        </>
    )
}