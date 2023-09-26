import { useState } from "react"
import { useDispatch } from 'react-redux'
import { addAllCountries, getCountryByName } from "../../Redux/Actions/actions";


export default function SearchBar() {

    const dispatch = useDispatch()

    const [country, setCountry] = useState('');

    function changeHandler(event) {
        setCountry(event.target.value)
    }

    function clickHandler() {
        dispatch(getCountryByName(country))
        setCountry('')
    }

    function clearHandler() {
        dispatch(addAllCountries())
    }

    return (
        <>
            <input onChange={changeHandler} value={country} type="search" placeholder="Search name" />
            <button onClick={clickHandler}>Search</button>
            <button onClick={clearHandler}>Clear</button>
        </>
    )
}