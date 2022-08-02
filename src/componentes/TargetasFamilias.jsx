import React, { useState } from "react";
import familias from "../assets/datos/familias.json";
import ActividadesAgropecuarias from "../assets/datos/ActividadesAgropecuarias.json";
import Construcciones from "../assets/datos/Construcciones.json";
import HoteleriayTurismo from "../assets/datos/HoteleriayTurismo.json";
import IndustriaAlimentaria from "../assets/datos/IndustriaAlimentaria.json";
import IndustriaCulturalYCreativas from "../assets/datos/IndustriaCulturalYCreativas.json";
import OficiciosArtesales from "../assets/datos/OficiosArtesanales.json";
import Salud from "../assets/datos/Salud.json";
import TextilEIndumentaria from "../assets/datos/TextilEIndumentaria.json";
import MasInformacion from "../Pages/MasInformacion";
import { Row, Col, Card, Button } from "react-bootstrap";
import moment from 'moment';
import { Navigate } from "react-router-dom";


const TargetasFamilias = () => {
    const[info,setInfo]=useState(false)
    const[datos,setDato]=useState([])

    const masIformacion = (data) => {
        let vigentes = [];
        let date = new Date();
        let fecha = moment(date)

        data.cursos.map((data, i) => {

            let inicio = moment(data.Inicio, "DD-MM-YYYY").add(15, "days");
            let publicar = moment(data.Publicar, "DD-MM-YYYY");



            if (moment(fecha).isBetween(publicar, inicio)) {
                vigentes.push(data)
            }



        })
        console.log(vigentes)
        setDato(vigentes)
        setInfo(true)
        
    }
   
        if(info) {
        return(
            
         <Navigate to="/masinformacion" state={{id:1,dato:datos}}/>
        )
        
    
    
    }
        else{
            return(
                <Row>
            {familias.map((data, i) => {

                return (
                    <Col lg={4} xl={4} sm={12} key={i} className="mt-4 tarjeta">
                        <Card className="familias" style={{ width: '100%' }}>
                            <Card.Body className="familias">
                                <Card.Title className="familias">{data.nombre}</Card.Title>
                                <Card.Img className="familias" variant="top" src={data.foto} />
                                <div className="content-cursos">
                                    {data.cursos.map((curso, i) => {
                                        return (
                                            <div key={i} className="cursos">
                                                <h6>{curso.Curso}</h6>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className="d-grid gap-2 mt-1 masinformacion">
                                    <Button variant="outline-success" className="boton-masinformacion" onClick={() => masIformacion(data)}>Mas informacion</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
            )
            
        }
}
      

       



export default TargetasFamilias