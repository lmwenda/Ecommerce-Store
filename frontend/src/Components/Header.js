import React, { useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header(){
    const [cart, setCard] = useState(0);
    return(
        <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <LinkContainer to="/">
                            <Navbar.Brand href="#home">Developer Store</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="py-10">
                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/">
                                    <Nav.Link><i className="fas fa-image"></i>Gallery</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/">
                                    <Nav.Link><i className="fas fa-shopping-cart"></i>Cart({cart})</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/">
                                    <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
        </header>
    );
}

export default Header;