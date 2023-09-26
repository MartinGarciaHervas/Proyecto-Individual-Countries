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
    
    //Este estado es para filtrar la lista de paises que se van a mosrtar en el options
    const [search, setSearch] = useState('')
    
    //Este handler setea el seach con lo que escribo en el input
    function countriesHandler(event) {
        setSearch(event.target.value)
    }

    //en esta constante se muestran los paises filtrados, a traves de lo que esta en search. las options se renderizan a partir de esta constante
    const filteredCountries = countries?.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))

    
    
    function changeHandler(event) {
        setActivityData({
            ...activityData,
            [event.target.name]: event.target.value,
        })
    }


    //Toma los valores del select, y los ingresa al estado local, dentro de un array, si ya existen dentro, no los agrega
    function selectHandler(event) {
        if(activityData.CountryId.includes(event.target.value)){
            return setActivityData({
                ...activityData,
                CountryId: [...activityData.CountryId]
            })
        }
        setActivityData({
            ...activityData,
            CountryId: [...activityData.CountryId, event.target.value]
        })
    }

    function deleteHandler(countryId){
        setActivityData({
            ...activityData,
            CountryId: activityData.CountryId.filter(country => country !== countryId)
    })
    }

    const submitHandler = async () => {
        try {
            const { response } = await axios.post('http://localhost:3001/activities', activityData);
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

                        {/* Este input es para filtrar los paises que estan en el select, cambia el estado search */}
                        <input value={search} placeholder="Look for Country" onChange={countriesHandler}></input>
                        <select multiple onChange={selectHandler} className={style.select}>
                            {filteredCountries?.map(element =>
                                <option key={element.id} value={element.id}>{element.name}</option>)}
                        </select>
                        <div>
                            <p>Selected</p>
                            {activityData.CountryId.map(country =>
                            <div className={style.selected} key={country}>
                                <p className={style.countryName} >{country}</p>
                                <button className={style.selectedButton} onClick={()=>{deleteHandler(country)}}>x</button>
                            </div>)}
                        </div>
                    </div>
                    <div className={style.cuadro}>
                        <button type='submit'>Create Activity</button>
                    </div>
                </form>
            </div>
        </>
    )
}