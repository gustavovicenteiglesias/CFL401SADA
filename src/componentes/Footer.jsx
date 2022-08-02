import React from "react";
import { Row,Col, Container } from "react-bootstrap";
import logoCFL from "../assets/logoCFL.png"
import { BsFacebook,BsInstagram } from "react-icons/bs";

const Footer =()=>{
    return(
        <Container fluid>
        <Row className="footer">
            <Col lg={4} className="footer__col">
            <img src={logoCFL} alt="Logo footer" width="200px"/>
            </Col> 
            <Col lg={8} className="footer__col__1">
            <h4>Centro de formación laboral 401</h4>
            <p>Dirección: Azcuénaga 248</p>
            <p>Localidad: San Antonio de Areco</p>
            <p>Provincia: Buenos Aires</p>
            <Row>
                <Col>
                <a href="https://www.facebook.com/cfpsada" style={{color:"#fff"}} target="_blank" rel="noreferrer"><BsFacebook size={40} /></a>
                
                </Col>
                <Col>
                <a href="https://www.instagram.com/cfl401sada/" style={{color:"#fff"}} target="_blank" rel="noreferrer"><BsInstagram size={40}/></a>
                </Col>
            </Row>
      
        
            </Col>
        </Row>
        </Container>
    )
}
export default Footer