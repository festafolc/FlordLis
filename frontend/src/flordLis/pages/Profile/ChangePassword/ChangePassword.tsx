import { useFlordLisDispatch, useFlordLisSelector } from '../../../../hooks/useFlordLis';
import { CustomerState, onChangingPasswordWasUpdated, onChangingPasswordWasUpdatedOrFailed } from '../../../../redux/slices/customerSlice';
import { changePasswordFinishedThunk } from '../../../../redux/thunks/customerThunks';
import { useForm } from '../../../../hooks/useForm';
import flordLisApi from '../../../../apis/flordLisApi';
import { AuthState } from '../../../../redux/slices/authSlice';

import './ChangePasswordStyle.css';


const changePasswordFormFields: {} = {

    password: '',
    newPassword: '',
    newPassword2: '',
}

export const ChangePassword = () => {

    const dispatch = useFlordLisDispatch();
    const { changingPassword } = useFlordLisSelector<CustomerState>((state) => state.customer);
    const { userId } = useFlordLisSelector<AuthState>((state) => state.auth);
    const { password, newPassword, newPassword2, onInputChange, onResetForm } = useForm(changePasswordFormFields);

    const handlePasswordClose = () => {

        dispatch(changePasswordFinishedThunk());
        dispatch(onChangingPasswordWasUpdatedOrFailed());
    }

    const checkCurrentPassword = async (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault();

        try {

            const { data } = await flordLisApi.post(`/check-password/${userId}`, { password });

            if (data.ok) {

                dispatch(onChangingPasswordWasUpdated());
            }
            else {
                // TODO: la contraseña no es correcta
                return console.log('la contraseña no es correcta');

            }
        } catch (error) {
            console.log(error);

            dispatch(onChangingPasswordWasUpdatedOrFailed());
        }
        finally {

            dispatch(onResetForm);
        }
    }

    const updatePassword = async (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault();

        if (newPassword === newPassword2) {

            try {

                const { data } = await flordLisApi.post(`/customer/update-password/${userId}`, { newPassword });

                if (data.ok) {

                    // TODO: Alert que las passwords deben ser iguales
                    console.log('Se ha actualizado');
                    dispatch(onChangingPasswordWasUpdatedOrFailed());
                }
            } catch (error) {

                dispatch(onChangingPasswordWasUpdatedOrFailed());
            }
            finally {

                dispatch(onResetForm);
            }
        }
        else {

            // TODO: Alert que las passwords deben ser iguales
            console.log('Passwords deben ser iguales');
        }
    }

    return (
        <>
            <section className="behind">
                <article className='container__modal'>

                    <div className='modal__title'>
                        <h2 className='modal__title-text'>Cambio de contraseña</h2>
                        <button className='modal__close' onClick={handlePasswordClose}><i className='fa-solid fa-xmark' /></button>
                    </div>

                    <form className='modal__body'>
                        {
                            (!changingPassword)
                                ?
                                <div className='body__checkPassword'>
                                    <h3 className='checkPassword__title'>Introduce la contraseña actual</h3>
                                    <input className="checkPassword__input" type="password" placeholder="Contraseña" name="password" value={password || ''} onChange={onInputChange} />
                                </div>
                                :
                                <div className='body__checkPassword'>
                                    <h3 className='checkPassword__title'>Escribe la contraseña nueva</h3>
                                    <input className="checkPassword__input" type="password" placeholder="Contraseña" name="newPassword" value={newPassword || ''} onChange={onInputChange} />
                                    <br />
                                    <h3 className='checkPassword__title'>Repite la contraseña</h3>
                                    <input className="checkPassword__input" type="password" placeholder="Contraseña" name="newPassword2" value={newPassword2 || ''} onChange={onInputChange} />
                                </div>
                        }

                    </form>

                    <div className='modal__footer'>
                        {
                            (!changingPassword)
                                ?
                                <button className='footer__button footer__button-check' onClick={checkCurrentPassword}>Comprobar</button>
                                :
                                <button className='footer__button footer__button-check' onClick={updatePassword}>Cambiar</button>
                        }
                        <button className='footer__button footer__button-close' onClick={handlePasswordClose}>Cerrar</button>
                    </div>

                </article>
            </section>
        </>
    )
}
