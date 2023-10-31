import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
// import { loginThunk } from "../../../redux/thunks/authThunks";
import { useFlordLisDispatch } from "../../../hooks/useFlordLis";
import flordLisApi from "../../../apis/flordLisApi";
import { onLogin } from "../../../redux/slices/authSlice";
import { loginThunk } from "../../../redux/thunks/authThunks";

const loginFormFields: {} = {

  email: '',
  password: ''
}

export const LoginPage = () => {

  const dispatch = useFlordLisDispatch();

  const { email, password, onInputChange, onResetForm } = useForm(loginFormFields);

  const loginSubmit: any = async (event: React.MouseEvent<HTMLElement>) => {

    event.preventDefault();

    try {

      const { data } = await flordLisApi.post('/login', { email, password });

      if (data.ok) {

        localStorage.setItem('token', data.token);
        localStorage.setItem('token-init-date', new Date().getTime().toString());

        dispatch(loginThunk(data.customer));
      }


      console.log(data);

    } catch (error) {

      console.log(error);
    }
    finally {

      dispatch(onResetForm);
    }
  }

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
                    <Form onSubmit={loginSubmit}>

                      {/* Email */}
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange} />
                      </Form.Group>

                      {/* Password */}
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="password" value={password || ''} onChange={onInputChange} />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Login
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