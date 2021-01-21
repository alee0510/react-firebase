import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './styles/signup.css'

const SignUp = _ => {
    return (
        <div className="main-signup">
            <div className="card">
                <h1>Create your account</h1>
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-type your password" />
                    </Form.Group>
                    <Button variant="primary" className="register-button">
                        Register
                    </Button>
                </Form>
                <p>Already has an account? <Link to="/">SignIn</Link></p>
            </div>
        </div>
    )
}

export default SignUp