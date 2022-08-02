import React, { useRef } from "react"
import { Container, Form ,Button} from "react-bootstrap"
import emailjs from '@emailjs/browser';
const Contacto = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_55ek118', 'template_gm6iqtk', form.current, 'user_cMQEkqyoRzQp766l9ch6i')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container>
            <div className="texto-portada-vision mb-3">
                <h2>Contacto</h2>
            
            <Form ref={form} onSubmit={sendEmail}>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control placeholder="Tu nombre" name="to_name"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="ejemplo@ejemplo.gmail.com" name="user_email"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mensaje</Form.Label>
                    <Form.Control as="textarea" name="message" />
                </Form.Group>
                <div className="d-grid gap-2 mt-1 ">
                <Button variant="outline-success" className="boton-masinformacion" type="submit" value="Send" >
                    Enviar Mensaje
                </Button>
                </div>
            </Form>
            {/*<form ref={form} onSubmit={sendEmail}>
                <label>Nombre</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Mensaje</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
    </form>*/}
    </div>
        </Container>
    )
}
export default Contacto