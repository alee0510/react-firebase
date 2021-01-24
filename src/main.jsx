import React from 'react'
import { PrivateRoute, AuthRoute } from './router'

// pages
import Products from './pages/products'
import SignUp from './pages/signup'
import SignIn from './pages/signin'

const Main = _ => {
    return (
        <div>
            <AuthRoute path="/" component={SignIn} exact/>
            <AuthRoute path="/signup" component={SignUp}/>
            <PrivateRoute path="/home" component={Products}/>
        </div>
    )
}

export default Main