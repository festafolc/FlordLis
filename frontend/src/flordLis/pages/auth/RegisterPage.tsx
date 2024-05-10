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
import colombiaFlag from '../../../assets/images/countryFlags/Flag_of_Colombia.png';
import './registerPageStyle.css';
import { validatePhoneNumber } from '../../helpers/validatePhoneNumber';

const registerFormFields: {} = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  countryPhone: '+57',
  password: '',
  password2: '',
}

export const RegisterPage = () => {

  const navigate = useNavigate();

  const [showRegisterError, setShowRegisterError] = useState<boolean>(false);

  const dispatch = useFlordLisDispatch();

  const [activeNotifications, setActiveNotifications] = useState<boolean>(false);

  const { name, surname, email, countryPhone, phone, password, password2, onInputChange, onResetForm } = useForm(registerFormFields);

  const registerSubmit: any = async (event: React.MouseEvent<HTMLElement>) => {

    event.preventDefault();
    
    let canSave: boolean = true;

    // Check the number is colombian
    canSave = validatePhoneNumber(phone);

    // Check Phone country and phone
    // De momento como solo permito Colombia, no hago el checkeo de país + número porque siempre será Colombia
    const fullPhoneNumber: string = countryPhone + phone;

    if (password === password2 && canSave) {

      try {

        const { data } = await flordLisApi.post('/register', { name, surname, fullPhoneNumber, email, password, activeNotifications });

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
                  <div className="register__input register__inputs-phone">
                    <select className='register__input-phone-prefix' name="countryPhone" value={countryPhone || ''} onChange={onInputChange} >
                      <option value="Colombia">🇨🇴&emsp;Colombia +57</option>
                    </select>
                    <input className="register__input" type="text" placeholder="Teléfono" name="phone" value={phone || ''} onChange={onInputChange} />
                  </div>
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
    </>
  )
}