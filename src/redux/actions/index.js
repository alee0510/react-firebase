// products
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

// users
export const SignIn = body => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const auth = getFirebase().auth()
            const res = await auth.signInWithEmailAndPassword(body.email, body.password)
            console.log('signin res : ', res)
        } catch (err) {
            console.log(err)
        }
    }
}

export const SignOut = _ => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const auth = getFirebase().auth()
            const res = await auth.signOut()
            console.log('signout res : ', res)
        } catch (err) {
            console.log(err)
        }
    }
}

export const SignUp = body => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const auth = getFirebase().auth()
            const res = await auth.createUserWithEmailAndPassword(body.email, body.password)
            console.log('sigup resp : ', res)
        } catch (err) {
            console.log(err)
        }
    }
}