import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { firestoreReducer } from 'redux-firestore'
import { getFirebase, firebaseReducer } from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension'
import * as ReduxActions from './actions'
import AuthReducer from './reducers'

// actions
export const actions = { ...ReduxActions }
// export const actions = { AddProduct, EditProduct, DeleteProduct, SignIn, SignUp, SignOut }

// reducers
export const reducers = combineReducers({
    auth : AuthReducer,
    firebase : firebaseReducer,
    firestore : firestoreReducer
})

// createstore
const middlewares = [ReduxThunk.withExtraArgument(getFirebase)]
const createReduxStore = initial => createStore(
    reducers, initial,
    composeWithDevTools(applyMiddleware(...middlewares))
)

// export the default module
export default createReduxStore