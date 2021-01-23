import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isLoaded, isEmpty } from 'react-redux-firebase'

const PrivateRoute = ({component : Component, ...rest}) => {
    const auth = useSelector(state => state.firebase.auth)
    console.log('auth : ', auth)

    return <Route {...rest} render={props => 
        isLoaded(auth) && !isEmpty(auth) 
        ? <Component {...props}/> 
        : <Redirect to="/"/> 
    }/>
}

export default PrivateRoute