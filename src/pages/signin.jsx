import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import { Form, Button } from 'react-bootstrap'
import { actions } from '../redux'
import useInputRefs from '../hooks/use-input-refs'
import './styles/signin.css'

const SignIn = _ => {
    const [refs, bind] = useInputRefs(new Array(2))
    const auth = useSelector(state => state.firebase.auth)
    const dispatch = useDispatch()

    // sigin
    const OnBtnSignIn = _ => {
        // get all value
        const values = refs.current.map(item => item.value)
        // console.log('values : ', values)

        // sigin with email & password
        dispatch(actions.SignIn({ email : values[0], password : values[1]}))
    }

    // redirect to home if user has login
    if (isLoaded(auth) && !isEmpty(auth)) return <Redirect to="/home"/>

    return (
        <div className="main-signin">
            <div className="card">
                <h1>Welcome Back</h1>
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control {...bind(0)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...bind(1)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        className="login-button" 
                        onClick={OnBtnSignIn}
                    >
                        Login
                    </Button>
                </Form>
                <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
            </div>
        </div>
    )
}

export default SignIn