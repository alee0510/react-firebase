import { getFirebase } from "react-redux-firebase"

export const AddProduct = body => {
    return async (dispatch, getState, getFirebase) =>{
        try {
            const db = getFirebase().firestore()
            await db.collection('products').doc().set(body)
        } catch (err) {
            console.log(err)
        }
    }
}

export const EditProduct = _ => {}

export const DeleteProduct = _ => {}