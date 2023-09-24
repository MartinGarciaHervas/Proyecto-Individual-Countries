import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams} from 'react-router-dom'
import { getCountryById } from "../../Redux/Actions/actions";


export default function Detail(){

    const dispatch = useDispatch();
    const {id} = useParams();
    const detail = useSelector(state => state.detail);


    useEffect(()=>{
        dispatch(getCountryById(id))
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
        </div>
        </>
    )
}