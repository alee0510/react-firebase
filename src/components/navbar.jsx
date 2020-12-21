import React from 'react'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import './styles/navbar.css'

const NavigationBar = _ => (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-main-container">
        <Navbar.Brand href="#home">React-Notes</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
                <Button variant="primary">Login</Button>
            </Form>
    </Navbar>
)

export default NavigationBar