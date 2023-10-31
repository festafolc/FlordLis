import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';

export const RegisterPage = () => {
  return (
    <>
      <Container className="position-relative">
        <Row className="h1 justify-content-center align-items-center mt-5">
          Flor d' Lis
        </Row>
        <Row className="d-flex justify-content-center align-items-center">
          <Col className="col-xl-10">
            <Card>
              <Row g-0="true">
                <Col md-6="true" lg-5="true">
                  <Card.Img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                    alt="login form" />
                </Col>
                <Col className="mc-6 lg-7 d-flexalign-items-center">
                  <Card.Body className="p-4 p-lg-5 text-black">
                    <Form>

                      {/* Name */}
                      <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="phone" placeholder="Nombre" />
                      </Form.Group>

                      {/* Surname */}
                      <Form.Group className="mb-3" controlId="formBasicSurname">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="phone" placeholder="Apellidos" />
                      </Form.Group>

                      {/* Email */}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" />
                      </Form.Group>

                      {/* Phone */}
                      {/* <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control type="phone" placeholder="Número de teléfono" />
                      </Form.Group> */}

                      {/* Password */}
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                      </Form.Group>

                      {/* Password2 */}
                      <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Repite la contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Repite la contraseña" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Deseo recibir emails con novedades" />
                      </Form.Group>
                      <Button variant="primary" type="submit">
                        Registrarse
                      </Button>
                    </Form>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container >
    </>
  )
}