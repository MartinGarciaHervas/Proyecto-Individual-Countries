import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import { clearDetail, getCountryById } from "../../Redux/Actions/actions";

import style from './detail.module.css'


export default function Detail() {

    const dispatch = useDispatch();
    const { id } = useParams();
    const detail = useSelector(state => state.detail);
    console.log(detail);


    useEffect(() => {
        //Cuando se monta Detail, ejecuta la action que busca el Country y lo guarda en el Estado
        dispatch(getCountryById(id))

        //Al momento de desmontarse, limpia el estado
        return () => { dispatch(clearDetail()) }
    }, [])

    return (
        <div className={style.detail}>
            <div className={style.country} >
                <h1>{detail?.pais?.name}</h1>
                <img src={detail?.pais?.flag} alt={detail?.pais?.name} />
                <h2>Continent: {detail?.pais?.continent}</h2>
                <h2>Capital: {detail?.pais?.capital}</h2>
                <h2>Subregion: {detail?.pais?.subregion}</h2>
                <h2>Area: {detail?.pais?.area}</h2>
                <h2>Population: {detail?.pais?.population}</h2>
                <h3>ID: {detail?.pais?.id}</h3>
            </div>
            {detail?.activities?.length !== 0 && <div>
                <p>Activities</p>
                <div className={style.activities}>
                    {detail?.activities?.map(activity =>
                        <div className={style.activity} key={activity.id}>
                            <p>Name: {activity.name}</p>
                            <p>Difficulty: {activity.difficulty}</p>
                            <p>Duration: {activity.duration}</p>
                            <p>Season: {activity.season}</p>
                        </div>
                    )}
                </div>
            </div>}
        </div>
    )
}