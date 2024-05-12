import { useEffect, useState } from 'react';
import { useForm } from '../../../../hooks/useForm';
import flordLisApi from '../../../../apis/flordLisApi';
import { useFlordLisDispatch, useFlordLisSelector } from '../../../../hooks/useFlordLis';
import { AuthState } from '../../../../redux/slices/authSlice';
// import { ChangePassword } from './ChangePassword';
import { MessageBox } from '../../../components/MessageBox/MessageBox';
import { CustomerState, onUpdatePhoneError, onCustomerInformationWasUpdatedOrNot } from '../../../../redux/slices/customerSlice';
import {
    askingToUpdateCustomerThunk,
    changePasswordThunk,
    operationSuccessCustomerThunk,
    updateCustomerThunk,
    resetAllButOperationSuccessThunk,
    resetCustomerSliceThunk
} from '../../../../redux/thunks/customerThunks';

import './basicInformationStyle.css';
import { MessageBoxState, onResetMessageBoxSlice } from '../../../../redux/slices/messageBoxSlice';
import { resetMessageBoxThunk } from '../../../../redux/thunks/messageBoxThunks';
import { validatePhoneNumber } from '../../../helpers/validatePhoneNumber';


export const BasicInformation = ({ customerFullInfo }: any) => {

    const profileInfo = {

        name: customerFullInfo.name,
        surname: customerFullInfo.surname,
        countryPhone: '+57',
        phone: customerFullInfo.phone.slice(3),
        email: customerFullInfo.email,
        country: customerFullInfo.country,
        city: customerFullInfo.city,
        postalCode: customerFullInfo.postal_code,
        address: customerFullInfo.address,
        activeNotifications: customerFullInfo.activeNotifications,
        onInputChange: customerFullInfo.address
    }

    const dispatch = useFlordLisDispatch();
    const { userId } = useFlordLisSelector<AuthState>((state) => state.auth);
    const { askingToUpdateCustomer, updateCustomer, operationSuccess } = useFlordLisSelector<CustomerState>((state) => state.customer);
    const { ok, cancel, close } = useFlordLisSelector<MessageBoxState>((state) => state.messageBox);


    const [activeNotifications, setActiveNotifications] = useState<boolean>(customerFullInfo.activeNotifications);

    const { name, surname, countryPhone, phone, email, country, city, postalCode, address, onInputChange } = useForm(profileInfo);

    // TODO: Crear un boolean para saber si se ha cambiado algo y así guardar de momento lo hago todo a saco

    useEffect(() => {

        // Si lo ha confirmado en el message box (messageBox.ok = true), procedemos a marcar el estado updateCustomer en Redux
        if (ok) {

            // updateCustomer = true
            dispatch(updateCustomerThunk());

            if (updateCustomer) {

                saveSubmit();
            }
        }

        // Si cancela en la pregunta o cierra después de guardado entonces reseteamos estados en Redux
        if (cancel || close) {

            dispatch(resetMessageBoxThunk());
            dispatch(resetCustomerSliceThunk());
        }

    }, [ok, cancel, close, updateCustomer])

    const AskToUpdateCustomer = () => {

        // Sacamos el message box para confirmar -> askingToUpdateCustomer = true
        dispatch(askingToUpdateCustomerThunk());
    }

    const saveSubmit: any = async () => {

        // event.preventDefault();
        let saved: boolean = false;
        // Finalmente procedemos
        if (updateCustomer) {
            
            // Check the number is colombian
            const canSave = validatePhoneNumber(phone);

            if (canSave) {

                // Check Phone country and phone
                // De momento como solo permito Colombia, no hago el checkeo de país + número porque siempre será Colombia
                const fullPhoneNumber: string = countryPhone + phone;

                try {

                    const { data } = await flordLisApi.put(`customer/${userId}`, { name, surname, fullPhoneNumber, country, city, postalCode, address, activeNotifications });

                    if (data.ok) {

                        // Si ha ido todo bien lo marcamos en Redux para sacar el message box
                        dispatch(operationSuccessCustomerThunk());
                        saved = true;
                    }
                } catch (error: any) {

                    console.log(error);
                    
                    if (error.response.data.error.code === 'ER_DUP_ENTRY') {

                        dispatch(onUpdatePhoneError());
                    }
                }
            }
            else {
                
                // TODO: mostrar que el número es inválido
                console.log('número inválido');
            }
        }

        // Reseteamos los estados
        dispatch(resetMessageBoxThunk());
        if (saved) {

            dispatch(resetAllButOperationSuccessThunk())
        }
        else {

            dispatch(resetCustomerSliceThunk());
        }
    }

    const onActiveNotificationsChange = () => {

        setActiveNotifications(!activeNotifications);
    }

    const onCloseModal = () => {

        dispatch(onCustomerInformationWasUpdatedOrNot());
    }

    const handlePasswordOpen = () => {

        dispatch(changePasswordThunk());
    }

    return (
        <>
            <section className='container__customer'>
                <h2 className='customer__title'>Información personal</h2>
                <form className='customer__form' onSubmit={saveSubmit}>
                    <ul className='form__information'>
                        <li className='form__element'>
                            <div className='element__left'>Nombre</div>
                            <input className="element__right" type="text" placeholder="Nombre" name="name" value={name || ''} onChange={onInputChange} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Apellidos</div>
                            <input className="element__right" type="text" placeholder="Apellidos" name="surname" value={surname || ''} onChange={onInputChange} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Teléfono</div>
                            <div className="element__right element__right-phone">
                                <select className='register__input-phone-prefix' name="countryPhone" value={countryPhone || ''} onChange={onInputChange} >
                                    <option value="Colombia">🇨🇴&emsp;Colombia +57</option>
                                </select>
                                <input className="element__right" type="text" placeholder="Teléfono" name="phone" value={phone || ''} onChange={onInputChange} />
                            </div>
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Correo electrónico</div>
                            <input className="element__right" type="text" placeholder="Correo electrónico" readOnly name="email" value={email || ''} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>País</div>
                            <input className="element__right" type="text" placeholder="País" name="country" value={country || ''} onChange={onInputChange} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Ciudad</div>
                            <input className="element__right" type="text" placeholder="Ciudad" name="city" value={city || ''} onChange={onInputChange} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Código postal</div>
                            <input className="element__right" type="text" placeholder="Código postal" name="postalCode" value={postalCode || ''} onChange={onInputChange} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Dirección</div>
                            <input className="element__right" type="text" placeholder="Dirección" name="address" value={address || ''} onChange={onInputChange} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Notificaciones</div>
                            <div className='element__right-notifications'>
                                <h5 className='element__right-text'>Deseo recibir emails con novedades</h5>
                                <input className='element__right-checkbox' type="checkbox" name="activeNotifications" checked={activeNotifications} onChange={onActiveNotificationsChange} />
                            </div>
                        </li>
                    </ul>
                </form>
                <button className='element__left save-information-button' type='submit' onClick={AskToUpdateCustomer}>Guardar información</button>
                {
                    (askingToUpdateCustomer)
                        ? <MessageBox title="Flor d' Lis" description="¿Deseas guardar la información actual de tu perfil?" closeButton={false} />
                        : null
                }
                {
                    (operationSuccess)
                        ? <MessageBox title="Flor d' Lis" description="La información ha sido guardada." closeButton={true} />
                        : null
                }
            </section>
        </>
    )
}
