import { combineReducers } from 'redux'

// actions

// reducer
import ProductsReducer from './reducers/products'

export const Reducers = combineReducers({ products : ProductsReducer })

export default Reducers