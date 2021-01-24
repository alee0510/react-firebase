import { AUTH_ERROR, AUTH_SUCCESS } from '../actions'

const INITIAL_STATE = {
    message : null
}

const AuthReducer = (state = INITIAL_STATE, actions) => {
    switch(actions.type) {
        case AUTH_ERROR :
            return { message : actions.payload }
        case AUTH_SUCCESS :
            return INITIAL_STATE
        default :
            return state
    }
}

export default AuthReducer