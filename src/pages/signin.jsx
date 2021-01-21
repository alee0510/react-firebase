import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import './styles/signin.css'

const SignIn = _ => {
    return (
        <div className="main-signin">
            <div className="card">
                <h1>Welcome Back</h1>
                <Form className="form">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" className="login-button">
                        Login
                    </Button>
                </Form>
                <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
            </div>
        </div>
    )
}

export default SignIn