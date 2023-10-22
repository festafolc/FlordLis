import { Button, Col, Container, Row } from 'react-bootstrap';

export const BasicInformation = () => {
    return (
        <>
            <Container className='mx-5' >
                <Container className='mx-5' style={{ width: '55rem' }}>
                    <Row>
                        <Col><strong>Nombre</strong></Col>
                        <Col>Dario I</Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col><strong>Apellidos</strong></Col>
                        <Col>Jerjes ArtaJerjes</Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col><strong>Teléfono</strong></Col>
                        <Col>620382834</Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col><strong>Correo electrónico</strong></Col>
                        <Col>persia@email.com</Col>
                    </Row>
                    <hr />

                    <Row>
                        <Col><strong>Dirección</strong></Col>
                        <Col>Camino del Rey hacia Susa y después llega Alejandro hasta la India</Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            <Button>Cambiar Contraseña</Button>
                        </Col>
                        <Col>
                            <Button className='bg-secondary' >Editar información</Button>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
