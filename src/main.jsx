import React from 'react'
import { Route } from 'react-router-dom'

// pages
import Products from './pages/products'
import SignUp from './pages/signup'
import SignIn from './pages/signin'

const Main = _ => {
    return (
        <div>
            <Route path="/" component={SignIn} exact/>
            <Route path="/signup" component={SignUp} exact/>
            <Route path="/products" component={Products} exact/>
        </div>
    )
}

export default Main