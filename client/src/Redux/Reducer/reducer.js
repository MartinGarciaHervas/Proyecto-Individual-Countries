import { ADD_ACTIVITY, ADD_ALL_COUNTRIES, CLEAR_DETAIL, FILTER_BY_ACTIVITY, FILTER_BY_CONTINENT, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME, ORDER_BY_ALPHABETIC, ORDER_BY_POPULATION } from '../Actions/actionsTypes'

let intialState = {
    allCountries: [],
    countries: [],
    detail: [],
    activities: []
}

function rootReducer(state = intialState, action) {
    switch (action.type) {

        case ORDER_BY_ALPHABETIC:
            return {
                ...state,
                countries: action.payload === 'ascendente' ? [...state.countries].sort((a, b) => a.name.localeCompare(b.name))
                    : [...state.countries].sort((a, b) => b.name.localeCompare(a.name))
            }

        case ORDER_BY_POPULATION:
            return {
                ...state,
                countries: action.payload === 'ascendente' ? [...state.countries].sort((a, b)=>a.population - b.population)
                : [...state.countries].sort((a, b)=>b.population - a.population)
            }

        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: action.payload === '' ? state.allCountries : state.allCountries.filter(country => country.continent === action.payload)
            }

        case FILTER_BY_ACTIVITY:
            return {
                ...state,
                countries: action.payload === '' ? state.allCountries : state.allCountries.filter(country => country.Activities.some(activity => activity.name.toLowerCase() === action.payload.toLowerCase()))
            }

        case ADD_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload.countries.sort((a, b) => a.name.localeCompare(b.name)),
                allCountries: action.payload.countries,
                activities: action.payload.activities
            }

        case ADD_ACTIVITY:
            return {
                ...state,
                activities: [...state.activities, action.payload]
            }

        case GET_COUNTRY_BY_ID:
            return {
                ...state,
                detail: action.payload
            }

        case CLEAR_DETAIL:
            return {
                ...state,
                detail: []
            }

        case GET_COUNTRY_BY_NAME:
            return {
                ...state,
                countries: action.payload
            }
    }
}

export default rootReducer;