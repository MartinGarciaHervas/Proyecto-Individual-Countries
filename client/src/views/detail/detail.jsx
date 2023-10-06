import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

//Actions
import { clearDetail, getCountryById, deleteActivity } from "../../Redux/Actions/actions";

//Components
import Time from "../../helpers/Time";

//Estilos
import style from './detail.module.css'


export default function Detail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const detail = useSelector(state => state.detail);

    const deleteHandler = async (event) => {
        await dispatch(deleteActivity(event.target.value))
        await dispatch(getCountryById(id))
    }

    useEffect(() => {
        //Cuando se monta Detail, ejecuta la action que busca el Country y lo guarda en el Estado
        dispatch(getCountryById(id))

        //Al momento de desmontarse, limpia el estado
        return () => {
            dispatch(clearDetail())
        }
    }, [])


    //Creamos un Reloj para cada pais
    const [horaActual, setHoraActual] = useState('')

    //Este Handler llama a la funcion, pasandole como argumento la timezone del pais.
    function timeHandler() {
        const times = detail?.pais?.timezone.map(timezone => Time(timezone));
        setHoraActual(times)
    }

    //Con este use effect, en el momento que cambia la timezone(se ingresa al detail de un pais), ejecuta un intervalo de 1s, que a su vez ejecuta a timeHandler, de esta manera el reloj se actualiza cada segundo
    //En el momento en que se desmonta, se para el intervalo
    useEffect(() => {
        const intervalId = setInterval(timeHandler, 1000)
        return () => {
            clearInterval(intervalId)
        }
    }, [detail?.pais?.timezone])

    console.log(horaActual);


    return (
        <div className={style.container}>
            <div className={style.time}>
                {horaActual?horaActual.map((hora, index)=>
                    <p key={index} className={style.watch}>{detail?.pais?.name} time: {hora}</p>
                ):null}
            </div>
            <div className={style.detail}>
                <div className={style.country} >
                    <h1>{detail?.pais?.name}</h1>
                    <img className={style.img} src={detail?.pais?.flag} alt={detail?.pais?.name} />
                    <h2>Continent: {detail?.pais?.continent}</h2>
                    <h2>Capital: {detail?.pais?.capital}</h2>
                    <h2>Subregion: {detail?.pais?.subregion}</h2>
                    <h2>Area: {detail?.pais?.area}</h2>
                    <h2>Population: {detail?.pais?.population}</h2>
                    <h3>ID: {detail?.pais?.id}</h3>
                    <p ><a target="_blank" href={detail?.pais?.map}><span className="material-symbols-outlined">distance</span></a></p>
                </div>
                {detail?.activities?.length !== 0 && <div className={style.activitiesContainer}>
                    <p>Activities</p>
                    <div className={style.activities}>
                        {detail?.activities?.map(activity =>
                            <div className={style.activity} key={activity.id}>
                                <button value={activity.id} onClick={deleteHandler}>x</button>
                                <p>Name: {activity.name}</p>
                                <p>Difficulty: {activity.difficulty}</p>
                                <p>Duration: {activity.duration}</p>
                                <p>Season: {activity.season}</p>
                            </div>
                        )}
                    </div>
                </div>}
            </div>
        </div>
    )
}