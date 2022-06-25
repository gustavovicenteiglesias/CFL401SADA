import React from "react"
import { Container, Row, Col,Card } from 'react-bootstrap';
import cursos from "../assets/datos/cursos.json"
import TargetasFamilias from "../componentes/TargetasFamilias";

const Home = () => {
   // const ActividadesAgropecuarias=[]
   /* cursos.map((data,i)=>{
        if(data["Familia Profesional"]==="Comunicación Social"){
             ActividadesAgropecuarias[i]={
                
                CUE: data.CUE,
                Región: data.Región,
                Centro: data.Centro,
                Distrito: data.Distrito,
                EntidadConveniante: data["Entidad Conveniante"],
                HorasTotalesAsignadas: data["Horas Totales Asignadas"],
                Bloque: data.Bloque,
                HorasSemanales: data["Horas Semanales"],
                FamiliaProfesional:data["Familia Profesional"],
                Código:data.Código,
                Curso: data.Curso,
                Inicio: data.Inicio,
                Final: data.Final,
                Publicar: data.Publicar,
                Módulo: data.Módulo
             }   
        }
        return(
            console.log(ActividadesAgropecuarias)
        )
    })*/
    

    return (
        <Container className="App" >
            <div className="texto-portada-vision">
                <h2>Nuestra vision</h2>
                <p>El objetivo principal de nuestro Centro de Formación es capacitar lo mejor posible a los alumnos para desempeñarse en el campo profesional. Facilitar su adaptación a las modificaciones laborales que puedan producirse a lo largo de su vida. Construir perfiles profesionales y competencias laborales específicas altamente especializadas de cada curso de Formación Laboral.</p>
            </div>

            <div className="texto-portada-vision">
                <h2>PROPUESTA FORMATIVA 2022</h2>
                <h6>Nuestros cursos otorgan Certificación  Oficial.</h6>
            </div>
            <TargetasFamilias/>

        </Container>
    )
}
export default Home 