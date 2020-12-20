import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

// actions
import { GetProducts } from './actions/products'

// reducer
import ProductsReducer from './reducers/products'

export const actions = { GetProducts }
export const reducers = combineReducers({ 
    products : ProductsReducer, 
    firestore : firestoreReducer 
})

// redux
const redux = { actions, reducers }
export default redux