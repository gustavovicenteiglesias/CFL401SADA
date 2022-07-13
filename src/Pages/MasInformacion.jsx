import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import CursoService from "../peticiones/cursoservice";
import planificacion from "../assets/datos/planificacion.json"
import { Card, Table } from "react-bootstrap";
const MasInformacion = (props) => {
    const [dato, setDato] = useState([]);
    const [curso, setCurso] = useState();
    const location = useLocation();


    console.log(location.state.dato)
    useEffect(() => {
        setDato(location.state.dato)

    }, [])

    return (
        <div className="masinformacion_div">

            {dato.map((vigente, i) => {
                return (
                    <div key={i}>
                        <Card style={{ width: '100%' }} className="mt-5">
                            <Card.Header><h3>{vigente.Código} - {vigente.Curso}</h3></Card.Header>
                            <Card.Body>
                                <h4>Descripción :</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis quod, quasi impedit minima quidem unde consequatur, deleniti, eum accusamus odit. Rerum error cumque ut nulla expedita beatae at. Corrupti.</p>
                                <h5>Requisitos :</h5>
                                <p>Primaria o Ciclo Básico</p>
                                <h5>Inicio :{vigente.Inicio} </h5>
                                <h5>Final :{vigente.Final} </h5>
                                
                                <Table striped bordered hover>
                                    <tr>
                                        <th>Días</th>
                                        <th>Horarios</th>
                                    </tr>
                                    <tbody>
                                        <tr>
                                            <td>Lunes</td>
                                            <td>{vigente.calendar?.Lunes}</td>
                                        </tr>
                                        <tr>
                                            <td>Martes</td>
                                            <td>{vigente.calendar?.Martes}</td>
                                        </tr>
                                        <tr>
                                            <td>Miercoles</td>
                                            <td>{vigente.calendar?.Miercoles}</td>
                                        </tr>
                                        <tr>
                                            <td>Jueves</td>
                                            <td>{vigente.calendar?.Jueves}</td>
                                        </tr>
                                        <tr>
                                            <td>Viernes</td>
                                            <td>{vigente.calendar?.Viernes}</td>
                                        </tr>
                                        <tr>
                                            <td>Sábado</td>
                                            <td>{vigente.calendar?.Sabados}</td>
                                        </tr>
                                        <tr>
                                            <td>Domingo</td>
                                            <td>{vigente.calendar?.Domingos}</td>
                                        </tr>

                                    </tbody>
                                </Table>
                            </Card.Body>



                        </Card>
                    </div>
                )
            })}
        </div>
    )

}

export default MasInformacion