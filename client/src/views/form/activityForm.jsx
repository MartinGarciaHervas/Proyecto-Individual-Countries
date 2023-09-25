import { useState } from "react"
import { useSelector } from 'react-redux'
import axios from 'axios'


import style from './form.module.css'



export default function ActivityForm() {

    const countries = useSelector(state => state?.allCountries)

    //Estado local con los valores que luego seran enviados por body para crear una activity
    const [activityData, setActivityData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        CountryId: [],
    })
    console.log(activityData);
    
    function changeHandler(event) {
        setActivityData({
            ...activityData,
            [event.target.name]: event.target.value,
        })
    }


    //Crea un array que tiene todos los Id's de los paises, los cuales seran mostrados en el select
    const options = countries?.map(country => ({
        value: country?.id
    }))


    // //Toma los valores del select, y los ingresa al estado local, dentro de un array
    function selectHandler(event) {
        let countries = [];
        countries.push(event.target.value)
        setActivityData({
            ...activityData,
            CountryId: countries
        })
    }

    const submitHandler = async () => {
        try {
            const { response } = await axios.post('http://localhost:3001/activities', activityData);
            console.log(response);
            alert(response)
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <>
            <div>
                <form onSubmit={submitHandler}>
                    <div className={style.cuadro}>
                        <label>Name of Activity</label>
                        <input onChange={changeHandler} name="name" placeholder="Name of activities"></input>
                    </div>
                    <div className={style.cuadro}>
                        <label>Difficulty</label>
                        <input onChange={changeHandler} name="difficulty" placeholder="Difficulty"></input>
                    </div>
                    <div className={style.cuadro}>
                        <label>Duration</label>
                        <input onChange={changeHandler} name="duration" placeholder="Duration"></input>
                    </div>
                    <div className={style.cuadro}>
                        <label>Season</label>
                        <input onChange={changeHandler} name="season" placeholder="Season"></input>
                    </div>
                    <div className={style.cuadro}>
                        <label>Country</label>
                        <select onChange={selectHandler} className={style.select}>
                            {options?.map(element =>
                                <option key={element.value} value={element.value}>{element.value}</option>
                            )}
                        </select>
                    </div>
                    <div className={style.cuadro}>
                        <button type='submit'>Create Activity</button>
                    </div>
                </form>
            </div>
        </>
    )
}