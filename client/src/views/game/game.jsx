import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

//Estilos
import style from './game.module.css'

export default function Game() {
    const allCountries = useSelector(state => state.allCountries)

    const [flag, setFlag] = useState('')
    const [countryName, setCountryName] = useState({
        realName: '',
        guessName: '',
        id: ''
    })
    const [score, setScore] = useState(0)

    function setRandomCountry() {
        const randomCountry = parseInt((Math.random() * 250).toFixed())
        setFlag(allCountries[randomCountry]?.flag)
        setCountryName({
            ...countryName,
            realName: allCountries[randomCountry]?.name,
            id: allCountries[randomCountry]?.id
        })
    }

    useEffect(() => {
        setCountryName({
            ...countryName,
            guessName: '',
        })
    }, [flag])

    useEffect(() => {
        if (allCountries) {
            setRandomCountry()
        }
    }, [])

    function changeHandler(event) {
        setCountryName({
            ...countryName,
            guessName: event.target.value
        })
    }

    function clickHandler() {
        if (countryName.realName.toUpperCase() === countryName.guessName.toUpperCase()) {
            alert('Correct!!');
            setScore(score + 10)
            setRandomCountry()
        } else {
            alert(`Game Over :( the correct answer was ${countryName.realName}`);
            setScore(0)
            setRandomCountry()
        }
    }

    return (
        <div className={style.container}>
            <div className={style.game}>
                <h1>Which country is it?</h1>
                <img className={style.img} src={flag} />
                <input value={countryName.guessName} onChange={changeHandler} placeholder='Guess the country'></input>
                <button onClick={clickHandler}>Guess!!</button>
                <p>Score:{score}</p>
                <NavLink to={`/detail/${countryName?.id}`}><p>Learn more about this Country!!!</p></NavLink>
            </div>
        </div>
    )
}