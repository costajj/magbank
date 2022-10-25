import React from "react";
import {Container, Navbar, Nav, ButtonGroup, Button, NavDropdown } from "react-bootstrap";
import "./Navbar.scss";
import logo from "../assets/logo.svg";

const Navigation = () => (
    <Navbar variant="dark" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                src={logo}
                height="30"
                className='d-inline-block align-top'
                alt='Magbank logo'
                />
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#cards">Cards</Nav.Link>
                    <Nav.Link href="#whoweare">Who we are</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
            <ButtonGroup aria-label="Basic example">
                <Button variant="outline-light">
                    <NavDropdown title="Access account" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            Person
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.2">
                            Entreprise
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Button>
                <Button variant="outline-light">Open account</Button>
            </ButtonGroup>
            </Navbar.Collapse>
        </Container>
    </Navbar>
);

// prop é um parametro que todo componente recebe do react que por default nao e exibido, que é um agregador de todos os parametros que passar para o componente dentro do jsx (no caso aqui, o header dentro do App.js)

export default Navigation;

