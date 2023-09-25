import { ADD_ALL_COUNTRIES, CLEAR_DETAIL, GET_COUNTRY_BY_ID, GET_COUNTRY_BY_NAME } from '../Actions/actionsTypes'

let intialState = {
    allCountries: [],
    countries: [],
    detail: []
}

function rootReducer(state = intialState, action) {
    switch (action.type) {
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