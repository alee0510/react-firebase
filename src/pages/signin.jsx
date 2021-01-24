import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { actions } from '../redux'
import useInputRefs from '../hooks/use-input-refs'
import './styles/signin.css'

const SignIn = _ => {
    const [refs, bind] = useInputRefs(new Array(2))
    const authError = useSelector(state => state.auth.message)
    const dispatch = useDispatch()

    // sigin
    const OnBtnSignIn = _ => {
        // get all value
        const values = refs.current.map(item => item.value)

        // sigin with email & password
        dispatch(actions.SignIn({ email : values[0], password : values[1]}))
    }

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
                        <Form.Text className="text-muted" hidden={!authError}>Error : {authError}</Form.Text>
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