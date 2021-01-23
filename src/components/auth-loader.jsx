import React from 'react'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
import FadeLoader from 'react-spinners/FadeLoader'
import './styles/auth-loader.css'

const AuthLoader = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth)
    return !isLoaded(auth) ? 
    <div className="auth-container"><FadeLoader color="#f1c40f" loading={true}/></div> 
    : children
}

export default AuthLoader