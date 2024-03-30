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
          // TODO: eliminar el admin del session por si acaso
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
    </>
  )
}