import { ADD_ALL_COUNTRIES, GET_COUNTRY_BY_ID } from '../Actions/actionsTypes'

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
    }
}

export default rootReducer;