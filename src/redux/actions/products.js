export const AddProduct = body => {
    return async (dispatch, getState, { getFirebase, getFirestore}) => {
        try {
            const db = getFirestore()
            const data = await db.collection("products").add({...body})
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    }
}