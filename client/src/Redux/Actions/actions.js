import { ADD_ACTIVITY, ADD_ALL_COUNTRIES, CLEAR_DETAIL, FILTER_BY_ACTIVITY, FILTER_BY_CONTINENT, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME, ORDER_BY_ALPHABETIC, ORDER_BY_POPULATION } from "./actionsTypes";
import axios from 'axios'

export const orderByAlphabetic = (order) => {
    return{
        type: ORDER_BY_ALPHABETIC,
        payload: order,
    }
}

export const orderByPopulation = (order) => {
    return {
        type: ORDER_BY_POPULATION,
        payload: order,
    }
}

export const filterByContinent = (continent) => {
    return {
        type: FILTER_BY_CONTINENT,
        payload: continent,
    }
}

export const filterByActivity = (activity) => {
    return {
        type: FILTER_BY_ACTIVITY,
        payload: activity,
    }
}

export const addAllCountries = () => {
    return async (dispatch) => {
        try {
            const countriesResponse = await axios.get('http://localhost:3001/countries');
            const activitiesResponse = await axios.get('http://localhost:3001/activities');
            const countries = countriesResponse.data
            const activities = activitiesResponse.data
            return dispatch({
                type: ADD_ALL_COUNTRIES,
                payload: {countries, activities},
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const addActivity = (activity) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3001/activities', activity);
            alert(data.message)
            return dispatch({
                type: ADD_ACTIVITY,
                payload: activity,
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const getCountryByName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/?name=${name}`)
            return dispatch({
                type: GET_COUNTRY_BY_NAME,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}
export const getCountryById = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: GET_COUNTRY_BY_ID,
                payload: data,
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
    }
}
