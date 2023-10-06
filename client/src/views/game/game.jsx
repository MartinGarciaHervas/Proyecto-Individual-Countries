import {useSelector} from 'react-redux'

//Estilos
import style from './game.module.css'
import { useEffect, useState } from 'react'

export default function Game(){
    const allCountries = useSelector(state=>state.allCountries)

    const [flag, setFlag] = useState('')
    const [countryName, setCountryName] = useState({
        realName: '',
        guessName: ''
    })

    function setRandomCountry (){
        const randomCountry = parseInt((Math.random() * 250).toFixed())
        setFlag(allCountries[randomCountry]?.flag)
        setCountryName({
            ...countryName,
            realName: allCountries[randomCountry]?.name
        })
    }

    function clearGuess(){
        setCountryName({
            ...countryName,
            guessName: '',
        })
    }

    useEffect(()=>{
        if(allCountries){
            setRandomCountry()
            clearGuess()
        }
    },[])

    function changeHandler(event){
        setCountryName({
            ...countryName,
            guessName: event.target.value
        })
    }

    function clickHandler (){
        if(countryName.realName.toUpperCase() === countryName.guessName.toUpperCase()){
            alert('Correct!!');
            clearGuess()
            setRandomCountry()
        } else {
            alert(`Game Over :( the correct answer was ${countryName.realName}`);
            clearGuess()
            setRandomCountry()
        }
    }

    return (
        <div>
            <img src={flag}/>
            <input value={countryName.guessName} onChange={changeHandler} placeholder='Guess the country'></input>
            <button onClick={clickHandler}>Guess!!</button>
        </div>
    )
}