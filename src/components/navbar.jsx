import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty } from 'react-redux-firebase'
import { Navbar, Nav, Dropdown } from 'react-bootstrap'
import { actions } from '../redux'
import './styles/navbar.css'

const NavigationBar = _ => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.firebase.auth)

    // sign out
    const OnBtnSignOut = _ => dispatch(actions.SignOut())

    return (
        <Navbar variant="light" expand="lg" className="navbar-main-container">
            <Navbar.Brand href="/home">Firebase-Notes</Navbar.Brand>
            <Nav className="mr-auto form-container">
                <Dropdown>
                    <Dropdown.Toggle className="navbar-toggle">
                        {!isEmpty(auth) ? auth.email.split('@')[0] : ""}
                    </Dropdown.Toggle>

                    <Dropdown.Menu align="right" className="navbar-menu">
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Link to="/" className="link">
                            <Dropdown.Item className="navbar-item" onClick={OnBtnSignOut}>
                                Log out
                            </Dropdown.Item>
                        </Link>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    )
}
export default NavigationBar