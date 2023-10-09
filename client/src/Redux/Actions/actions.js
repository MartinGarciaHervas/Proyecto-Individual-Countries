import axios from 'axios'

//Action Types
import { ADD_ACTIVITY, ADD_ALL_COUNTRIES, CLEAR_DETAIL, DELETE_ACTIVITY, FILTER_BY_ACTIVITY, FILTER_BY_CONTINENT, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME, ORDER_BY_ALPHABETIC, ORDER_BY_POPULATION, REGISTER_USER, LOGIN_USER, LOGOUT_USER, SET_NEW_RECORD } from "./actionsTypes";



//Filter & Order Actions ----------------------------------------------------------------------------------------

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


//Get Activities ----------------------------------------------------------------------------------------------------

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


//Post Actions -----------------------------------------------------------------------------------------------------------

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


//Clear Actions --------------------------------------------------------------------------------------------------------------

export const clearDetail = () => {
    return {
        type: CLEAR_DETAIL,
    }
}

export const deleteActivity = (id)=>{
    return async (dispatch)=>{
        try {
            const {data} = await axios.delete(`http://localhost:3001/activities/${id}`)
            alert(data)
            return dispatch({
                type: DELETE_ACTIVITY,
                payload: id
            })
        } catch (error) {
            alert(error.message)
        }
    }
}


//Login & Register ----------------------------------------------------------------------------------------------------------------

export const registerUser = (user) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post(`http://localhost:3001/user`, user);
            alert(`Welcome ${user.email}!!!`)
            return dispatch({
                type: REGISTER_USER,
                payload: {
                    ...user,
                    access: data
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER,
    }
}

export const loginAction = (user) => {
    return async (dispatch) => {
        try {
            const {data} = await axios(`http://localhost:3001/user/?email=${user.email}&password=${user.password}`);
            data?alert(`Welcome Back ${user.email}!!!`):alert(`User not found :(. Register!!`)
            return dispatch({
                type: LOGIN_USER,
                payload: {
                    ...user,
                    access: data
                }
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

//Game actions -------------------------------------------------------------------------------------------------

export const setNewRecord = (score) => {
    return{
        type: SET_NEW_RECORD,
        payload: score
    }
}