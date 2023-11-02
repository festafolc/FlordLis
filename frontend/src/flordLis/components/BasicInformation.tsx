import { Alert, Button, Col, Container, Form, Row, Modal } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import flordLisApi from '../../apis/flordLisApi';
import { useFlordLisSelector } from '../../hooks/useFlordLis';
import { AuthState } from '../../redux/slices/authSlice';
import { useState } from 'react';



export const BasicInformation = ({ customerFullInfo }: any) => {

    const { userId } = useFlordLisSelector<AuthState>((state) => state.auth);
    const [showModal, setShowModal] = useState<boolean>(false);

    const profileInfo = {

        name: customerFullInfo.name,
        surname: customerFullInfo.surname,
        phone: customerFullInfo.phone,
        email: 'alejandro@macedonia.com',
        country: customerFullInfo.country,
        city: customerFullInfo.city,
        postalCode: customerFullInfo.postal_code,
        address: customerFullInfo.address,
        onInputChange: customerFullInfo.address
    }

    const { name, surname, phone, email, country, city, postalCode, address, onInputChange } = useForm(profileInfo);


    // TODO: Crear un boolean para saber si se ha cambiado algo y así guardar de momento lo hago todo a saco

    const saveSubmit: any = async (event: React.MouseEvent<HTMLElement>) => {

        event.preventDefault();

        try {

            const { data } = await flordLisApi.put(`customer/${userId}`, { name, surname, phone, country, city, postalCode, address });

            if (data.ok) {

                setShowModal(true);
            }
        } catch (error) {

            console.log(error);
        }
    }

    const onCloseModal = () => {

        setShowModal(false);
    }

    return (
        <>

            {showModal &&
                <div className="modal position-absolute justify-content-center align-items-center" style={{ display: 'block' }}>
                    <Modal.Dialog>
                        <Modal.Body>
                            <p>Actualizado</p>
                            <Button variant="secondary" onClick={onCloseModal}>Cerrar</Button>
                        </Modal.Body>
                    </Modal.Dialog>
                </div>
            }
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
                                    <Form.Control className='form-control-plaintext' readOnly type="email" name="email" value={email || ''} onChange={onInputChange} />
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
                            <Col>
                                <Button>Cambiar Contraseña</Button>
                            </Col>
                            <Col>
                                <Button className='bg-secondary' type='submit'>
                                    Guardar información
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}
