import { ADD_ALL_COUNTRIES, CLEAR_DETAIL, GET_COUNTRY_BY_ID } from "./actionsTypes";
import axios from 'axios'

export const addAllCountries =  ()=>{
    return async(dispatch) => {
        try {
            const {data} = await axios.get('http://localhost:3001/countries');
            return dispatch({
                type: ADD_ALL_COUNTRIES,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const getCountryById = (id)=>{
    return async(dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const clearDetail = ()=>{
    return {
        type: CLEAR_DETAIL,
    }
}