import flordLisApi from "../../../apis/flordLisApi";
import { useForm } from "../../../hooks/useForm";
import { useFlordLisDispatch, useFlordLisSelector } from "../../../hooks/useFlordLis";
import { loginThunk, logoutThunk } from "../../../redux/thunks/authThunks";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Customer } from '../../../../../backend/types';
import flordLisLogo from '../../../assets/images/ecoflordlis.jpg';
import sunflower from '../../../assets/images/sunflower.png';
import waterColourFlower from '../../../assets/images/sunflower.png';
import './loginPageStyle.css';
import { adminLoginThunk, adminLogoutThunk } from "../../../redux/thunks/flordLisThunks";


const loginFormFields: {} = {

  email: '',
  password: ''
}

export const LoginPage = () => {

  const navigate = useNavigate();

  const [showLoginError, setShowLoginError] = useState<boolean>(false);

  const { errorMessage } = useFlordLisSelector((state) => state.auth);

  const dispatch = useFlordLisDispatch();

  const { email, password, onInputChange, onResetForm } = useForm(loginFormFields);

  const loginSubmit: any = async (event: React.MouseEvent<HTMLElement>) => {

    event.preventDefault();

    try {

      const { data }: { data: Customer } = await flordLisApi.post('/login', { email, password });

      if (data.ok) {

        setShowLoginError(false);

        dispatch(loginThunk(data.id));

        if (email === 'carlos@carlos.com') {
          
          dispatch(adminLoginThunk(email));
          sessionStorage.setItem('admin', 'CRUD');
        }
        else {
          // TODO
        }

        sessionStorage.setItem('token', data.token);
        sessionStorage.setItem('token-init-date', new Date().getTime().toString());

        //TODO: en vez de enviar al home page mejor enviarlo a donde estaba
        navigate("/");
      }
    } catch (error) {
      
      dispatch(adminLogoutThunk())
      dispatch(logoutThunk('Credentials are not valid.'));
    }
    finally {

      dispatch(onResetForm);
    }
  }

  useEffect(() => {

    if (errorMessage?.length > 0) {

      setShowLoginError(true);
    }
  }, [errorMessage]);

  return (
    <>
      <section className="layout__login">
        <div className="login__container">
          <h1 className="login__title">Flor d' Lis</h1>
          <form className="login__form" onSubmit={loginSubmit}>
            <div className="login__inputs">
              <input className="login__input login__email" type="email" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange}></input>
              <input className="login__input login__password" type="password" placeholder="Contraseña" name="password" value={password || ''} onChange={onInputChange}></input>
              <button className="login__button" type="submit">Iniciar sesión</button>
            </div>
          </form>
          {
            showLoginError &&
            <span className="login_error">Las credenciales no son válidas.</span>
          }
          <div className="login__footer">
            <Link className="footer__register" to="/auth/register">Registrarse</Link>
            <button className="footer_forgot-password">Recuperar <br /> contraseña</button>
          </div>
          <div className="footer__homePage">
            <Link className="homePage__text" to="/">Página principal</Link>
          </div>
        </div>
        <img className="sunflower_img" src={sunflower} alt="Imagen girasol" />
      </section>
      {/* {showModal && 
      <div className="modal position-absolute justify-content-center align-items-center" style={{display: 'block'}}>
        <Modal.Dialog>
          <Modal.Body>
            <p>Credentials are not valid.</p>
            <Button variant="secondary" onClick={onCloseErrorMessage}>Close</Button>
          </Modal.Body>
        </Modal.Dialog>
      </div>
      <div>LoginPage</div>
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
                    <Form onSubmit={loginSubmit}>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange} />
                      </Form.Group> */

                      /* <Form.Group className="mb-3" controlId="formBasicPassword">
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
      </Container >   */}
    </>
  )
}