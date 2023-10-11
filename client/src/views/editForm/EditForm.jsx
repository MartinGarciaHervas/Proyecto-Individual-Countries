import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

//Actions
import { addActivity, addAllCountries } from "../../Redux/Actions/actions"

//Helpers
import validar from "../../helpers/validation"

//Estilos
import style from '../form/form.module.css'

export default function EditActivity() {
    const { id } = useParams()
    const allActivities = useSelector(state => state.activities)
    const activity = allActivities?.filter(activity => activity.id === id)[0]


    const navigate = useNavigate()

    const dispatch = useDispatch()

    const countries = useSelector(state => state?.allCountries)

    const seasons = ['Winter', 'Summer', 'Autumn', 'Spring']


    //Estado local con los valores que luego seran enviados por body para crear una activity
    const [activityData, setActivityData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        CountryId: [],
    })

    useEffect(()=>{
        setActivityData({
            name: activity?.name,
            difficulty: activity?.difficulty,
            duration: activity?.duration.length === 3? activity?.duration.slice(0, 1): activity?.duration.slice(0, 2),
            season: activity?.season,
            CountryId: activity?.Countries?.map(country => country.id),
        })
    }, [activity])
    
    console.log(activityData);
    //Estado local para validar errores
    const [errors, setErrors] = useState({
        name: 'Debe contener solo letras y espacios'
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

        //Como solo tengo que validar el atributo name, en el caso de que el value sea name ahi valido
        if (event.target.name === 'name')
            setErrors(validar({
                name: event.target.value,
            }))
    }


    //Toma los valores del select, y los ingresa al estado local, dentro de un array, si ya existen dentro, no los agrega
    function selectHandler(event) {

        //Con este if me fijo si el pais ya existe en los seleccionados para no agregarlo de nuevo
        if (activityData.CountryId.includes(event.target.value)) {
            return setActivityData({
                ...activityData,
                CountryId: [...activityData.CountryId]
            })
        }
        setActivityData({
            ...activityData,
            CountryId: [...activityData.CountryId, event.target.value]
        })
        setSearch('')
    }

    function deleteHandler(countryId) {
        setActivityData({
            ...activityData,
            CountryId: activityData.CountryId.filter(country => country !== countryId)
        })
    }

    const submitHandler = async (event) => {
        event.preventDefault();

        //Una vez creada la actividad seteo los campos a su valor de origen
        setActivityData({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            CountryId: [],
        })

        await dispatch(addActivity(activityData))
        await dispatch(addAllCountries())
        navigate('/activties')
    }

    return (
        <>
            <div className={style.container}>
                <form className={style.form} onSubmit={submitHandler}>
                    <div className={style.cuadro}>
                        <label className={style.labels}>{activity?.name}</label>
                    </div>
                    <div className={style.cuadro}>
                        <label className={style.labels}>Difficulty</label>
                        <select value={activityData.difficulty} onChange={changeHandler} name="difficulty">
                            <option value='0'>0</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    <div className={style.cuadro}>
                        <label className={style.labels}>Duration</label>
                        <div className={style.duration}>
                            <input type="number" min='0' max='24' autoComplete="off" onChange={changeHandler} value={activityData.duration} name="duration" placeholder="xx"></input>
                            <p className={style.hs}>Hs</p>
                        </div>
                    </div>
                    <div className={style.cuadro}>
                        <label className={style.labels}>Season</label>
                        <div className={style.checkbox}>
                            {seasons.map((season, index) =>
                                activityData.season === season?<label key={index}><input checked onChange={changeHandler} key={index} type="radio" name="season" value={season} />{season}</label>
                                : <label key={index}><input onChange={changeHandler} key={index} type="radio" name="season" value={season} />{season}</label>
                            )}
                        </div>
                    </div>
                    <div className={style.cuadro}>
                        <label className={style.labels}>Country</label>

                        {/* Este input es para filtrar los paises que estan en el select, cambia el estado search */}
                        <input value={search} placeholder="Look for Country" onChange={countriesHandler}></input>
                        <select multiple onChange={selectHandler} className={style.select}>
                            {filteredCountries?.map(element =>
                                <option key={element.id} value={element.id}>{element.name}</option>)}
                        </select>
                        <div>
                            <p>Selected</p>
                            {activityData?.CountryId?.map(country =>
                                <div className={style.selected} key={country}>
                                    <p className={style.countryName} >{country}</p>
                                    <button className={style.selectedButton} onClick={() => { deleteHandler(country) }}>x</button>
                                </div>)}
                        </div>
                    </div>
                    <div className={style.cuadro}>
                        <button type='submit'>Edit Activity</button>
                    </div>
                </form>
            </div>
        </>
    )

}