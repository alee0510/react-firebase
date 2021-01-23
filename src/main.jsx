import React from 'react'
import { Route } from 'react-router-dom'
import PrivateRoute from './private-route'

// pages
import Products from './pages/products'
import SignUp from './pages/signup'
import SignIn from './pages/signin'

const Main = _ => {
    return (
        <div>
            <Route path="/" component={SignIn} exact/>
            <Route path="/signup" component={SignUp}/>
            <PrivateRoute path="/home" component={Products}/>
        </div>
    )
}

export default Main