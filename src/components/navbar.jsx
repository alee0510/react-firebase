import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Navbar, Nav, Form, Button } from 'react-bootstrap'
import { actions } from '../redux'
import './styles/navbar.css'

const NavigationBar = _ => {
    const dispatch = useDispatch()

    // sign out
    const OnBtnSignOut = _ => dispatch(actions.SignOut())
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar-main-container">
            <Navbar.Brand href="#home">Firebase-Notes</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                    <Link to="/">
                        <Button variant="primary" onClick={OnBtnSignOut}>Logout</Button>
                    </Link>
                </Form>
        </Navbar>
    )
}
export default NavigationBar