
import * as types from './actions'

function Reducer(state, action){
    const{ type, paiload } = action;

    switch(type){
        case types.LOAD_DATA: {
            return{
                ...state,
                isLoading: true,
            }
        }
        case types.GET_LINK: {
            return{
                ...state,
                link: paiload
            }
        }
        case types.LOADED_APP: {
            return{
                ...state,
                isFirstLoading: false
            }
        }
        case types.CLOSE_WELCOME: {
            return{
                ...state,
                isLoading: false
            }
        }
        default:
            return state
    }
}

export {
    Reducer
}