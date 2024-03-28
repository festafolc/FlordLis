import flordLisApi from '../../../apis/flordLisApi';
import { useForm } from '../../../hooks/useForm';
import { useFlordLisDispatch } from '../../../hooks/useFlordLis';
import { loginThunk, logoutThunk } from '../../../redux/thunks/authThunks';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import flordLisLogo from '../../../assets/images/ecoflordlis.jpg';
import waterColourFlower1 from '../../../assets/images/waterColourFlower1.png';
import waterColourFlower2 from '../../../assets/images/waterColourFlower2.png';
import lilyFlower1 from '../../../assets/images/lilyflower1.png';
import './registerPageStyle.css';

const registerFormFields: {} = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  password: '',
  password2: '',
}

export const RegisterPage = () => {

  const navigate = useNavigate();

  const [showRegisterError, setShowRegisterError] = useState<boolean>(false);

  const dispatch = useFlordLisDispatch();

  const [activeNotifications, setActiveNotifications] = useState<boolean>(false);

  const { name, surname, phone, email, password, password2, onInputChange, onResetForm } = useForm(registerFormFields);

  const registerSubmit: any = async (event: React.MouseEvent<HTMLElement>) => {

    event.preventDefault();

    if (password === password2) {

      try {

        const { data } = await flordLisApi.post('/register', { name, surname, phone, email, password, activeNotifications });
        
        if (data.ok) {

          setShowRegisterError(false);
          dispatch(loginThunk(data.id));

          sessionStorage.setItem('token', data.token);
          sessionStorage.setItem('token-init-date', new Date().getTime().toString());

          navigate("/");
        }
      } catch (error) {

        setShowRegisterError(true);

        dispatch(logoutThunk('Try with another email.'));
        dispatch(onResetForm);
      }
    }
  }

  const onActiveNotificationsChange = () => {

    setActiveNotifications(!activeNotifications);
  }

  return (
    <>
      <section className='layout__register'>
        <div className="register__container">
          <div className='register__left'>
            <div className='register__left-content'>
              <h1 className='register__title'>¡Regístrate en Flor d' Lis!</h1>
              <form className="register__form" onSubmit={registerSubmit}>
                <div className="register__inputs">
                  <input className="register__input" type="text" placeholder="Nombre" name="name" value={name || ''} onChange={onInputChange} />
                  <input className="register__input" type="text" placeholder="Apellidos" name="surname" value={surname || ''} onChange={onInputChange} />
                  <input className="register__input" type="email" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange} />
                  <input className="register__input" type="text" placeholder="Teléfono" name="phone" value={phone || ''} onChange={onInputChange} />
                  <input className="register__input" type="password" placeholder="Contraseña" name="password" value={password || ''} onChange={onInputChange} />
                  <input className="register__input" type="password" placeholder="Repite la contraseña" name="password2" value={password2 || ''} onChange={onInputChange} />
                  <div className="register__input-notifications">
                    <h5 className='notifications__text'>Deseo recibir emails con novedades</h5>
                    <input className='notifications__check' type="checkbox" name="activeNotifications" checked={activeNotifications} onChange={onActiveNotificationsChange} />
                  </div>
                  <button className="register__button" type="submit">Registrarse</button>
                </div>
              </form>
              {
                showRegisterError &&
                <div className='register__error'>
                  <span className="register__error-text">Por favor, rellena toda la información y asegúrate de repetir la contraseña.</span>
                </div>
              }
              <div className="register__footer">
                <Link className="footer__login" to="/auth/login">¿Ya tienes cuenta? Inicia sesión</Link>
              </div>
            </div>
          </div>
          <div className='register__right'>
            <img className="register__img" src={flordLisLogo} alt="Imagen Flor d' Lis" />
          </div>
        </div>
        <img className="register__waterColourFlower1" src={waterColourFlower1} alt="Imagen plantas" />
        <img className="register__waterColourFlower2" src={waterColourFlower2} alt="Imagen planta" />
        <img className="register__lilyFlower1" src={lilyFlower1} alt="Imagen flor de lirio" />
      </section>

      {/*  
        // <div className="modal position-absolute justify-content-center align-items-center" style={{ display: 'block' }}>
        //   <Modal.Dialog>
        //     <Modal.Body>
        //       <p>Try with another email.</p>
        //       <Button variant="secondary" onClick={onCloseErrorMessage}>Close</Button>
        //     </Modal.Body>
        //   </Modal.Dialog>
        // </div> */}



      {/* <Container className="position-relative">
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
                    <Form onSubmit={registerSubmit}> */}

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
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange} />
                      </Form.Group> */}

      {/* Phone */}
      {/* <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Número de teléfono</Form.Label>
                        <Form.Control type="phone" placeholder="Número de teléfono" />
                      </Form.Group> */}

      {/* Password */}
      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" name="password" value={password || ''} onChange={onInputChange} />
                      </Form.Group> */}

      {/* Password2 */}
      {/* <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Repite la contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Repite la contraseña" name="password2" value={password2 || ''} onChange={onInputChange} />
                      </Form.Group> */}

      {/* Notifications */}
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
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
      </Container > */}
    </>
  )
}