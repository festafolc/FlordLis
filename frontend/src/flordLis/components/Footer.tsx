import { Col, Container, Row } from "react-bootstrap";
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";
import { EnvelopeAtFill, Instagram, SignpostSplitFill, TelephoneFill, Tiktok } from "react-bootstrap-icons";

export const Footer = () => {
    return (
        <footer style={{ background: 'green' }}>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <img height={100} width={50} src={logo} alt="Flor d' Lis" />
                        </Row>
                        <Row>
                            <h6>Tienda Flor d' Lis con mucho cariño y mucho amor. Creado con la alegría de cada planta cultivada desde semilla.</h6>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>Enlaces</h2>
                        </Row>
                        <Row>
                            <Row style={{ display: 'inline' }}>
                                <Link to={'https://www.instagram.com/flordlis_home'}><Instagram /></Link>
                                <Link to={'https://www.tiktok.com/@flordlis_home'}><Tiktok /></Link>
                            </Row>
                            <Link to={'/'}>Sobre Flor d' Lis</Link>
                            <Link to={'/'}>Preguntas frecuentes</Link>
                            <Link to={'/'}>Términos y condiciones</Link>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>Contacto</h2>
                        </Row>
                        <Row>
                            <div>
                                <TelephoneFill /> +57 312 6850043
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <EnvelopeAtFill /> flordlis@gmail.com
                            </div>
                        </Row>
                        <Row>
                            <div>
                                <SignpostSplitFill /> Camino a Valledupar
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Row className="justify-content-center align-items-center">
                    <h2>&copy; 2023 Flor d' lis</h2>
                </Row>
            </Container>
        </footer>
    )
}
