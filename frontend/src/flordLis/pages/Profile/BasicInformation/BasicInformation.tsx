import { useState } from 'react';
import { useForm } from '../../../../hooks/useForm';
import flordLisApi from '../../../../apis/flordLisApi';
import { useFlordLisDispatch, useFlordLisSelector } from '../../../../hooks/useFlordLis';
import { AuthState } from '../../../../redux/slices/authSlice';
// import { ChangePassword } from './ChangePassword';
import { CustomerState, onUpdatePhoneError, onCustomerInformationWasUpdatedOrNot, onUpdateCustomerInformation } from '../../../../redux/slices/customerSlice';
import { changePasswordThunk } from '../../../../redux/thunks/customerThunks';

import './basicInformationStyle.css';


export const BasicInformation = ({ customerFullInfo }: any) => {

    const profileInfo = {

        name: customerFullInfo.name,
        surname: customerFullInfo.surname,
        phone: customerFullInfo.phone,
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
    // const { checkingPassword, updateCustomer, updateCustomerPhone } = useFlordLisSelector<CustomerState>((state) => state.customer);

    const [activeNotifications, setActiveNotifications] = useState<boolean>(customerFullInfo.activeNotifications);

    const { name, surname, phone, email, country, city, postalCode, address, onInputChange } = useForm(profileInfo);

    // TODO: Crear un boolean para saber si se ha cambiado algo y así guardar de momento lo hago todo a saco

    const saveSubmit: any = async (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault();

        try {

            const { data } = await flordLisApi.put(`customer/${userId}`, { name, surname, phone, country, city, postalCode, address, activeNotifications });

            if (data.ok) {

                dispatch(onUpdateCustomerInformation());
            }
        } catch (error: any) {

            if (error.response.data.error.code === 'ER_DUP_ENTRY') {

                dispatch(onUpdatePhoneError());
            }
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
                <form className='customer__form'>
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
                            <input className="element__right" type="text" placeholder="Teléfono" name="phone" value={phone || ''} onChange={onInputChange} />
                        </li>
                        <li className='form__element'>
                            <div className='element__left'>Correo electrónico</div>
                            <input className="element__right" type="text" placeholder="Correo electrónico" name="email" value={email || ''} onChange={onInputChange} />
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
            </section>

            {/* <Modal show={updateCustomer} onHide={onCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Perfil actualizado </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>La información ha sido guardado con éxito.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCloseModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={updateCustomerPhone} onHide={onCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Error en el guardado de la información </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>EL número de teléfono no es válido.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onCloseModal}>Cerrar</Button>
                </Modal.Footer>
            </Modal>

            <Container className='mx-5' >
                <Container className='mx-5' style={{ width: '55rem' }}>
                    <Form onSubmit={saveSubmit}>

                        <Row>
                            <Col className='mt-2'><strong>Nombre</strong></Col>
                            <Col>
                                <Form.Group controlId="formName">
                                    <Form.Control className='form-control-plaintext' type="text" name="name" value={name || ''} onChange={onInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>Apellidos</strong></Col>
                            <Col>
                                <Form.Group controlId="formSurname">
                                    <Form.Control className='form-control-plaintext' type="text" name="surname" value={surname || ''} onChange={onInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>Teléfono</strong></Col>
                            <Col>
                                <Form.Group controlId="formPhone">
                                    <Form.Control className='form-control-plaintext' type="text" name="phone" value={phone || ''} onChange={onInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>Correo electrónico</strong></Col>
                            <Col>
                                <Form.Group controlId="formEmail">
                                    <Form.Control className='form-control-plaintext' readOnly type="email" name="email" value={email || ''} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>País</strong></Col>
                            <Col>
                                <Form.Group controlId="formCountry">
                                    <Form.Control className='form-control-plaintext' type="text" name="country" value={country || ''} onChange={onInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>Ciudad</strong></Col>
                            <Col>
                                <Form.Group controlId="formCity">
                                    <Form.Control className='form-control-plaintext' type="text" name="city" value={city || ''} onChange={onInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>Código postal</strong></Col>
                            <Col>
                                <Form.Group controlId="formPostalCode">
                                    <Form.Control className='form-control-plaintext' type="text" name="postalCode" value={postalCode || ''} onChange={onInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>Dirección</strong></Col>
                            <Col>
                                <Form.Group controlId="formAddress">
                                    <Form.Control className='form-control-plaintext' type="text" name="address" value={address || ''} onChange={onInputChange} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col className='mt-2'><strong>Notificaciones activas</strong></Col>
                            <Col className='mt-2'>
                                <Form.Group controlId="formNotifications">
                                    <Form.Check type="checkbox" name="activeNotifications" checked={activeNotifications} onChange={onActiveNotificationsChange} label="Deseo recibir emails con novedades" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />

                        <Row>
                            <Col>
                                <Button onClick={handlePasswordOpen}>Cambiar Contraseña</Button>
                            </Col>
                            <Col>
                                <Button className='bg-secondary' type='submit'>
                                    Guardar información
                                </Button>
                            </Col>
                        </Row>
                    </Form>

                    {
                        (checkingPassword)
                            ? <ChangePassword />
                            : null
                    }


                </Container>
            </Container> */}
        </>
    )
}
