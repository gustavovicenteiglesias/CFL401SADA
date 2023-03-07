import React from "react"
import { Container, Row, Col,Card } from 'react-bootstrap';

import TargetasFamilias from "../componentes/TargetasFamilias";
import Noticias from "../componentes/Noticias";
const Home = () => {
   
    

    return (
        <Container className="App" >
            <div className="texto-portada-vision">
                <h2>NUESTRA VISIÓN</h2>
                <p>El objetivo principal de nuestro Centro de Formación es capacitar lo mejor posible a los alumnos para desempeñarse en el campo profesional. Facilitar su adaptación a las modificaciones laborales que puedan producirse a lo largo de su vida. Construir perfiles profesionales y competencias laborales específicas altamente especializadas de cada curso de Formación Laboral.</p>
            </div>
            <div className="texto-portada-vision">
            <h2>NOVEDADES</h2>
            </div>
            <Noticias/>
            <div className="texto-portada-vision">
                <h2>PROPUESTA FORMATIVA 2022</h2>
                <h6>Nuestros cursos otorgan Certificación  Oficial.</h6>
            </div>
            <TargetasFamilias/>

        </Container>
    )
}
export default Home 