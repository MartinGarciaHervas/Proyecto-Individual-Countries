import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useParams} from 'react-router-dom'
import { clearDetail, getCountryById } from "../../Redux/Actions/actions";


export default function Detail(){

    const dispatch = useDispatch();
    const {id} = useParams();
    const detail = useSelector(state => state.detail);


    useEffect(()=>{
        //Cuando se monta Detail, ejecuta la action que busca el Country y lo guarda en el Estado
        dispatch(getCountryById(id))

        //Al momento de desmontarse, limpia el estado
        return ()=>{dispatch(clearDetail())}
    },[])

    return (
        <>
        <div>
            <h1>{detail?.pais?.name}</h1>
            <img src={detail?.pais?.flag} alt={detail?.pais?.name}/>
            <h2>Continent: {detail?.pais?.continent}</h2>
            <h2>Capital: {detail?.pais?.capital}</h2>
            <h2>Subregion: {detail?.pais?.subregion}</h2>
            <h2>Area: {detail?.pais?.area}</h2>
            <h2>Population: {detail?.pais?.population}</h2>
            <h3>ID: {detail?.pais?.id}</h3>
            <NavLink to={'/home'}>
            <button>HOME</button>
            </NavLink>
        </div>
        </>
    )
}