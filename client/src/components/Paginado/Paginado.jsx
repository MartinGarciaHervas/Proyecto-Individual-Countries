import { useSelector } from "react-redux"
import { useEffect, useState } from "react";

import Cards from "../Cards/cards"

import style from './paginado.module.css'

const COUNTRIES_PER_PAGE = 10

export default function Paginado() {

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

    return (
        <div>
            <Cards countries={countries} />
            <div className={style.buttons}>
                <button className={style.button} onClick={prevHandler}>Prev</button>
                <button className={style.button} onClick={nextHandler}>Next</button>
            </div>
        </div>
    )
}