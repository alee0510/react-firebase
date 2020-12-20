import { GET_PRODUCTS } from './variable'

export const GetProducts = _ => {
    return async (dispatch, getState, { getFirestore }) => {
        try {
            const db = getFirestore()
            const snapshot = await db.collection("products").get()
            const data = snapshot.docs.map(doc => doc.data())
            // console.log(data)

            // dispacth an action
            dispatch({ type : GET_PRODUCTS, payload : data })

        } catch (err) {
            console.log(err)
        }
    }
}