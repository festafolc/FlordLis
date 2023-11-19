import { useState } from 'react';
import { Button, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import flordLisApi from '../../apis/flordLisApi';
import { useFlordLisDispatch, useFlordLisSelector } from '../../hooks/useFlordLis';
import { AuthState } from '../../redux/slices/authSlice';
import { ChangePassword } from './ChangePassword';
import { CustomerState, onUpdatePhoneError, onCustomerInformationWasUpdatedOrNot, onUpdateCustomerInformation } from '../../redux/slices/customerSlice';
import { changePasswordThunk } from '../../redux/thunks/customerThunks';


export const BasicInformation = ({ customerFullInfo }: any) => {

    const dispatch = useFlordLisDispatch();
    const { userId } = useFlordLisSelector<AuthState>((state) => state.auth);
    const { checkingPassword, updateCustomer, updateCustomerPhone } = useFlordLisSelector<CustomerState>((state) => state.customer);

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

            if ( error.response.data.error.code === 'ER_DUP_ENTRY') {
                
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
            <Modal show={updateCustomer} onHide={onCloseModal} centered>
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

                    {/* Change Password */}
                    {
                        (checkingPassword)
                            ? <ChangePassword />
                            : null
                    }


                </Container>
            </Container>
        </>
    )
}
