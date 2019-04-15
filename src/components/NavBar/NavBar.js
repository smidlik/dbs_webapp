import React from 'react';
import { appName } from '../../constants';
import {Button, Nav, Navbar, NavDropdown} from "react-bootstrap";

class NavBar extends React.Component {
    render() {
        return (
            <Navbar  bg="danger" variant="dark" expand="lg">
                <Navbar.Brand href="/">{ appName } </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/createEvent">Vytvoření soutěže</Nav.Link>
                        <Nav.Link href="/createEvent">Vytvoření soutěže</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button variant={"secondary"} href={'/login'}>Login</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBar;
