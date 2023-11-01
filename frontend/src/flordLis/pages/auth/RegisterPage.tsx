import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap';
import flordLisApi from '../../../apis/flordLisApi';
import { useForm } from '../../../hooks/useForm';
import { useFlordLisDispatch } from '../../../hooks/useFlordLis';
import { loginThunk, logoutThunk } from '../../../redux/thunks/authThunks';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const registerFormFields: {} = {

  email: '',
  password: '',
  password2: '',
}

export const RegisterPage = () => {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);

  const dispatch = useFlordLisDispatch();

  const [activeNotifications, setActiveNotifications] = useState<boolean>(false);

  const { email, password, password2, onInputChange, onResetForm } = useForm(registerFormFields);

  const registerSubmit: any = async (event: React.MouseEvent<HTMLElement>) => {

    event.preventDefault();

    if (password === password2) {

      try {

        const { data } = await flordLisApi.post('/register', { email, password, activeNotifications });

        if (data.ok) {

          dispatch(loginThunk(data.id));

          localStorage.setItem('token', data.token);
          localStorage.setItem('token-init-date', new Date().getTime().toString());

          navigate("/");
        }
      } catch (error) {

        setShowModal(true);

        dispatch(logoutThunk('Try with another email.'));
        dispatch(onResetForm);
      }
    }
  }

  const onActiveNotificationsChange = () => {

    setActiveNotifications(!activeNotifications);
  }

  const onCloseErrorMessage = () => {

    setShowModal(false);
  }

  return (
    <>

      {showModal &&
        <div className="modal position-absolute justify-content-center align-items-center" style={{ display: 'block' }}>
          <Modal.Dialog>
            <Modal.Body>
              <p>Try with another email.</p>
              <Button variant="secondary" onClick={onCloseErrorMessage}>Close</Button>
            </Modal.Body>
          </Modal.Dialog>
        </div>
      }

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
                    <Form onSubmit={registerSubmit}>

                      {/* Name */}
                      {/* <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="phone" placeholder="Nombre" />
                      </Form.Group> */}

                      {/* Surname */}
                      {/* <Form.Group className="mb-3" controlId="formBasicSurname">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="phone" placeholder="Apellidos" />
                      </Form.Group> */}

                      {/* Email */}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange} />
                      </Form.Group>

                      {/* Phone */}
                      {/* <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control type="phone" placeholder="Número de teléfono" />
                      </Form.Group> */}

                      {/* Password */}
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="password" value={password || ''} onChange={onInputChange} />
                      </Form.Group>

                      {/* Password2 */}
                      <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Repite la contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Repite la contraseña" name="password2" value={password2 || ''} onChange={onInputChange} />
                      </Form.Group>

                      {/* Notifications */}
                      <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" name="activeNotifications" checked={activeNotifications} onChange={onActiveNotificationsChange} label="Deseo recibir emails con novedades" />
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