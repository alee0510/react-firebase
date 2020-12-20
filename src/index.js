import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

// integrate firestore
import { getFirestore, reduxFirestore } from 'redux-firestore'

// boostrap
import 'bootstrap/dist/css/bootstrap.min.css';

// main app
import Main from './main'

// setup redux
import { reducers } from './redux'
import config from './firebase'
const store = createStore(reducers , {}, composeWithDevTools(compose(
    applyMiddleware(ReduxThunk.withExtraArgument({ getFirestore })),
    reduxFirestore(config)
)))

// render the main app
ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>
    , document.getElementById("root")
)