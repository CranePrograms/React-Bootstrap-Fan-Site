import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    Link,
    useNavigate,
  } from "react-router-dom";

class NavigationBar extends Component {

    constructor(props) {
        super(props);

        //let navigate = useNavigate();

        this.state = {
            backgroundImage: "https://img.finalfantasyxiv.com/lds/promo/h/Y/-oUXXXBZC19P3lnOcyJrf6x-V8.png",
        };
    }


    render () {

        const backgroundImage = this.state;
        return (

            <div>
                <Navbar
                bg="light"
                expand="lg"
                >
                    <Container>
                    <Navbar.Brand href="#home">The Blogstation</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/mahjong">Mahjong</Nav.Link>
                        <Nav.Link as={Link} to="/haurchefant">His Shrine</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>  
            </div>
            

        );


    }

}

export default NavigationBar;


