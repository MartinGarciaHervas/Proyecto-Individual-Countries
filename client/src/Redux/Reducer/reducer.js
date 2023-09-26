import { ADD_ALL_COUNTRIES, CLEAR_DETAIL, FILTER_BY_CONTINENT, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME, ORDER_BY_ALPHABETIC, ORDER_BY_POPULATION } from '../Actions/actionsTypes'

let intialState = {
    allCountries: [],
    countries: [],
    detail: []
}

function rootReducer(state = intialState, action) {
    switch (action.type) {

        case ORDER_BY_ALPHABETIC:
            return {
                ...state,
                countries: action.payload === 'ascendente' ? state.allCountries.sort((a, b) => a.name - b.name)
                    : state.allCountries.sort((a, b) => b.name - a.name)
            }

        case ORDER_BY_POPULATION:
            return {
                ...state,
                countries: action.payload === 'ascendente' ? state.allCountries.sort((a, b)=>a.population - b.population)
                : state.allCountries.sort((a, b)=>b.population - a.population)
            }

        case FILTER_BY_CONTINENT:
            return {
                ...state,
                countries: action.payload === '' ? state.allCountries : state.allCountries.filter(country => country.continent === action.payload)
            }

        case ADD_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
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