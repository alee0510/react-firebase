import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import './styles/navbar.css'

const NavigationBar = _ => (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-main-container">
        <Navbar.Brand href="#home">Firebase-Notes</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
                <Link to="/">
                    <Button variant="primary">Login</Button>
                </Link>
            </Form>
    </Navbar>
)

export default NavigationBar