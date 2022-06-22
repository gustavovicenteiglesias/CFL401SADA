import React from "react";
import familias from "../assets/datos/familias.json";
import ActividadesAgropecuarias from "../assets/datos/ActividadesAgropecuarias.json";
import Construcciones from "../assets/datos/Construcciones.json";
import HoteleriayTurismo from "../assets/datos/HoteleriayTurismo.json";
import IndustriaAlimentaria from "../assets/datos/IndustriaAlimentaria.json";
import IndustriaCulturalYCreativas from "../assets/datos/IndustriaCulturalYCreativas.json";
import OficiciosArtesales from "../assets/datos/OficiosArtesanales.json";
import Salud from "../assets/datos/Salud.json";
import TextilEIndumentaria from "../assets/datos/TextilEIndumentaria.json";
import { Row, Col, Card, Button } from "react-bootstrap";

const TargetasFamilias = () => {


    return (
        <Row>
            {familias.map((data, i) => {
              
                return (
                    <Col lg={4} xl={4} sm={12} key={i} className="mt-4">
                        <Card style={{ width: '100%' }}>
                            <Card.Body>
                                <Card.Title>{data.nombre}</Card.Title>
                                <Card.Img variant="top" src={data.foto} />
                                {data.cursos.map((curso,i)=>{
                                    return(
                                        <div key={i} className="cursos">
                                        <h6>{curso.Curso}</h6>
                                        </div>
                                    )
                                })}
                                <div className="d-grid gap-2 mt-5">
                                <Button variant="outline-success" >Mas informacion</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    )
}

export default TargetasFamilias