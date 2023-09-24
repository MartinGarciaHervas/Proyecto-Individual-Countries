import { ADD_ALL_COUNTRIES, CLEAR_DETAIL, GET_COUNTRY_BY_ID } from '../Actions/actionsTypes'

let intialState={
    countries: [],
    detail: []
}

function rootReducer(state=intialState, action){
    switch (action.type){
        case ADD_ALL_COUNTRIES:
            return {
                ...state,
                countries: action.payload
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
    }
}

export default rootReducer;