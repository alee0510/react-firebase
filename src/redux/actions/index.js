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

export const EditProduct = (id, body) => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const db = getFirebase().firestore()
            await db.collection('products').doc(id).update(body)
        } catch (err) {
            console.log(err)
        }
    }
}

export const DeleteProduct = id => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const db = getFirebase().firestore()
            await db.collection('products').doc(id).delete()
        } catch (err) {
            console.log(err)
        }
    }
}