import React from "react"
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Home from "../Pages/Home";
import Contacto from "../Pages/Contacto"
import Institucional from "../Pages/Institucional"
import logoCFL from "../assets/logoCFL.png"
import "../App.css"
import MasInformacion from "../Pages/MasInformacion";

const Navegacion = () => {
    return (
        <>
            <BrowserRouter>
            <div className="foto-portada" ></div>
                <Navbar className="barra" fixed="top" expand="lg">
                    <Container fluid>
                        <Navbar.Brand as={Link} to="/inicio">
                            <img
                                src={logoCFL}
                                width="80px"
                                height="80px"
                                className="d-inline-block align-center ml-3"
                                alt="React Bootstrap logo"
                            />
                         </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/inicio"><Button variant="outline-light">Home</Button></Nav.Link>
                                <Nav.Link as={Link} to="/institucional"><Button variant="outline-light">Institucional</Button></Nav.Link>
                                <Nav.Link as={Link} to="/contacto"><Button variant="outline-light">Contacto</Button></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/institucional" element={<Institucional />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/masinformacion"  element={<MasInformacion/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Navegacion

