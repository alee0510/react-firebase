import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { BrowserRouter } from 'react-router-dom'

// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

// main app
import Main from './main'

// setup redux
import createReduxStore from './redux'
import firebase from './firebase'
const store = createReduxStore({})
const config = { 
    firebase, 
    config : { userProfile: 'users' }, 
    dispatch : store.dispatch, 
    createFirestoreInstance 
}

// render the main app
ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...config}>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </ReactReduxFirebaseProvider>
    </Provider>
    ,document.getElementById("root")
)