import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

import Cards from "../../components/Cards/cards"
import { filterByContinent, orderByAlphabetic, orderByPopulation } from "../../Redux/Actions/actions";

import style from './home.module.css'

const COUNTRIES_PER_PAGE = 10

export default function Home() {

    const dispatch = useDispatch()

    const allCountries = useSelector(state => state?.countries);

    const [countries, setCountries] = useState([...allCountries].splice(0, COUNTRIES_PER_PAGE))

    const [currentPage, setCurrentPage] = useState(0);

    function nextHandler() {
        const paisesTotales = allCountries?.length;

        const nextPage = currentPage + 1;

        const primerPais = nextPage * COUNTRIES_PER_PAGE;

        if (primerPais >= paisesTotales) return;

        setCountries([...allCountries].splice(primerPais, COUNTRIES_PER_PAGE));
        setCurrentPage(nextPage)
    }

    function prevHandler() {

        const prevPage = currentPage - 1;

        const primerPais = prevPage * COUNTRIES_PER_PAGE;

        if (primerPais < 0) return;

        setCountries([...allCountries].splice(primerPais, COUNTRIES_PER_PAGE));
        setCurrentPage(prevPage)
    }

    useEffect(() => {
        setCurrentPage(0);
        setCountries([...allCountries].splice(0, COUNTRIES_PER_PAGE))
    }, [allCountries])

    function orderByPopulationHandler(event) {
        dispatch(orderByPopulation(event.target.value))
    }

    function orderByAlphabeticHandler(event) {
        dispatch(orderByAlphabetic(event.target.value))
    }

    function filterByContinentHandler(event) {
        dispatch(filterByContinent(event.target.value))
    }

    const [aux, setAux] = useState(false)

    function auxHandler() {
        setAux(aux ? false : true)
    }

    return (
        <>
            <div className={style.home}>
                <div className={style.order}>
                    {aux ? <button className={style.button} onClick={auxHandler}><span className="material-symbols-outlined">filter_alt_off</span></button>
                        : <button className={style.button} onClick={auxHandler}><span className="material-symbols-outlined">filter_alt</span></button>}
                    {<div className={aux?style.order2:style.order3}>
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

                    </div>}
                </div>
                <Cards countries={countries} />
                <div className={style.buttons}>
                    <button className={style.button} onClick={prevHandler}>Prev</button>
                    <button className={style.button} onClick={nextHandler}>Next</button>
                </div>
            </div>
        </>
    )
}