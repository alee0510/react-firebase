import React from 'react'
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap'

const NavigationBar = _ => (
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">React-Notes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <NavDropdown title="Firebase" id="basic-nav-dropdown">
                    <NavDropdown.Item >Card</NavDropdown.Item>
                    <NavDropdown.Item >Todos</NavDropdown.Item>
                    <NavDropdown.Item >Table</NavDropdown.Item>
                </NavDropdown>
                {/* <NavDropdown title="JSON" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Firebase</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
            <Form inline>
                <Button variant="primary">Login</Button>
            </Form>
        </Navbar.Collapse>
    </Navbar>
)

export default NavigationBar