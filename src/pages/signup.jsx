import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import { actions } from '../redux'
import useInputRefs from '../hooks/use-input-refs'
import './styles/signup.css'

const SignUp = _ => {
    const [refs, bind] = useInputRefs(new Array(3))
    const authError = useSelector(state => state.auth.message)
    const dispatch = useDispatch()

    // signup
    const OnBtnSignUp = _ => {
        // get values
        const values = refs.current.map(item => item.value)

        // do signup
        dispatch(actions.SignUp({ 
            email : values[0], 
            password : values[1],
            repassword : values[2]
        }))
    }

    return (
        <div className="main-signup">
            <div className="card">
                <h1>Create your account</h1>
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control {...bind(0)} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...bind(1)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicRePassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control {...bind(2)} type="password" placeholder="Re-type your password" />
                        <Form.Text className="text-muted" hidden={!authError}>Error : {authError}</Form.Text>
                    </Form.Group>
                    <Button variant="primary" className="register-button" onClick={OnBtnSignUp}>
                        Register
                    </Button>
                </Form>
                <p>Already has an account? <Link to="/">SignIn</Link></p>
            </div>
        </div>
    )
}

export default SignUp