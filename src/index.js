import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

// integrate firebase firestore
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'


// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

// main app
import Main from './main'

// setup redux
import { reducers } from './redux'
import fbconfig from './firebase'
const store = createStore(reducers , {}, composeWithDevTools(compose(
    applyMiddleware([ReduxThunk.withExtraArgument({ getFirebase, getFirestore })]),
    reactReduxFirebase(fbconfig),
    reduxFirestore(fbconfig),
)))

// render the main app
ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById("root")
)