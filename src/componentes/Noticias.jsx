import React from "react";


import { Col, Row, Carousel } from 'react-bootstrap';
import novedades from "../assets/datos/Novedades.json"
const Noticias = () => {
    return (
        <Carousel>

            {novedades.map((data, i) => {
                return (
                    <Carousel.Item>
                        <div
                        style={{backgroundImage:`url(${data.imagen})`}}
                        className="foto-novedades"
                       
                        
                        >
                        </div>

                    </Carousel.Item>
                )
            })}

        </Carousel>
    )
}
export default Noticias;