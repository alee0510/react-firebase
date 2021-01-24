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
export const AUTH_ERROR = 'AUTH_ERROR'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const SignIn = body => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const auth = getFirebase().auth()
            const res = await auth.signInWithEmailAndPassword(body.email, body.password)
            console.log('signin res : ', res)

            dispatch({ type : AUTH_SUCCESS})
        } catch (err) {
            console.log(err)
            dispatch({ type : AUTH_ERROR, payload : err.message})
        }
    }
}

export const SignOut = _ => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const auth = getFirebase().auth()
            const res = await auth.signOut()
            console.log('signout res : ', res)

            dispatch({ type : AUTH_SUCCESS})
        } catch (err) {
            console.log(err)
            dispatch({ type : AUTH_ERROR, payload : err.message})
        }
    }
}

export const SignUp = body => {
    return async (dispatch, getState, getFirebase) => {
        try {
            const auth = getFirebase().auth()
            const db = getFirebase().firestore()

            // validate password confirmation
            if (body.password !== body.repassword) {
                dispatch({ type : AUTH_ERROR, payload : 'password doesn\'t match.'})
                return
            }
            
            // do signup
            const res = await auth.createUserWithEmailAndPassword(body.email, body.password)
            console.log('signup resp : ', res)
            
            // create user profile in firestore
            await db.collection('users').doc(res.user.uid).set({ role : "user"})

            dispatch({ type : AUTH_SUCCESS})
        } catch (err) {
            console.log(err)
            dispatch({ type : AUTH_ERROR, payload : err.message})
        }
    }
}