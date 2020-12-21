import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { getFirestore, firestoreReducer } from 'redux-firestore'
import { getFirebase, firebaseReducer } from 'react-redux-firebase'
import { composeWithDevTools } from 'redux-devtools-extension'

// actions
export const actions = {}

// reducers
export const reducers = combineReducers({
    firebase : firebaseReducer,
    firestore : firestoreReducer
})

// createstore
const middlewares = [ReduxThunk.withExtraArgument({ getFirebase, getFirestore })]
const createReduxStore = initial => createStore(
    reducers, initial,
    composeWithDevTools(applyMiddleware(...middlewares))
)

// export the default module
export default createReduxStore