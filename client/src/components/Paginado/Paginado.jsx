import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react";

import Loader from "../Loader/Loader";
import Cards from "../Cards/cards"

import style from './paginado.module.css'
import { addAllCountries } from "../../Redux/Actions/actions";

const COUNTRIES_PER_PAGE = 10

export default function Paginado() {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addAllCountries())
    },[])

    const [loading, setLoading] = useState(true)

    const allCountries = useSelector(state => state?.countries);

    const [countries, setCountries] = useState([])

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

    function firstPageHandler() {
        setCurrentPage(0);
        setCountries([...allCountries].splice(0, COUNTRIES_PER_PAGE))
    }

    function lastPageHandler() {
        const lastPage = Math.ceil(allCountries?.length / COUNTRIES_PER_PAGE) - 1
        const primerPais = lastPage * COUNTRIES_PER_PAGE;

        setCountries([...allCountries].splice(primerPais, COUNTRIES_PER_PAGE))
        setCurrentPage(lastPage)

    }

    useEffect(() => {
        if (allCountries) {
            setTimeout(()=>{
                setCurrentPage(0)
                setCountries([...allCountries].splice(0, COUNTRIES_PER_PAGE))
                setLoading(false)
            }, 500)
        }
    }, [allCountries])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Cards countries={countries} />
                    <div className={style.buttons}>
                        <button className={style.button} onClick={prevHandler}>Prev</button>
                        {currentPage !== 0 && <button onClick={firstPageHandler} className={style.pages}>{1}</button>}
                        {currentPage !== 0 && <p>...</p>}
                        <button className={style.pages}>{currentPage + 1}</button>
                        {currentPage !== (Math.ceil(allCountries?.length / COUNTRIES_PER_PAGE) - 1) && <p>...</p>}
                        {currentPage !== (Math.ceil(allCountries?.length / COUNTRIES_PER_PAGE) - 1) && <button onClick={lastPageHandler} className={style.pages}>{Math.ceil(allCountries?.length / COUNTRIES_PER_PAGE)}</button>}
                        <button className={style.button} onClick={nextHandler}>Next</button>
                    </div>
                </div>
            )}
        </div>
    )
}