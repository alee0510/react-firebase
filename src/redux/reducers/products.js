import { GET_PRODUCTS } from '../actions/variable'

const INITIAL_STATE = {
    data : []
}

const ProductsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_PRODUCTS :
            return { data : action.payload }
        default :
            return state
    }
}

export default ProductsReducer