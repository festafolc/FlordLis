import { Button, Form, Modal } from 'react-bootstrap';
import { useFlordLisDispatch, useFlordLisSelector } from '../../hooks/useFlordLis';
import { CustomerState, onChangingPasswordWasUpdated, onChangingPasswordWasUpdatedOrFailed } from '../../redux/slices/customerSlice';
import { changePasswordFinishedThunk } from '../../redux/thunks/customerThunks';
import { useForm } from '../../hooks/useForm';
import flordLisApi from '../../apis/flordLisApi';
import { AuthState } from '../../redux/slices/authSlice';


const changePasswordFormFields: {} = {

    password: '',
    newPassword: '',
    newPassword2: '',
}

export const ChangePassword = () => {

    const dispatch = useFlordLisDispatch();
    const { checkingPassword, changingPassword} = useFlordLisSelector<CustomerState>((state) => state.customer);
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
            <Modal show={checkingPassword} onHide={handlePasswordClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Cambio de contraseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        {
                            (!changingPassword)
                                ?
                                <>
                                    <Form.Group className="mb-3" controlId="formBasicCurrentPassword">
                                        <Form.Label>Comprobar la contraseña actual</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña actual" autoFocus name="password" value={password || ''} onChange={onInputChange} />
                                    </Form.Group>
                                </>
                                :
                                <>
                                    <Form.Group className="mb-3" controlId="formBasicNewPassword1">
                                        <Form.Label>Escribe la contraseña nueva</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña nueva" name="newPassword" value={newPassword || ''} onChange={onInputChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicNewPassword2">
                                        <Form.Label>Repite la contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Repite contraseña" name="newPassword2" value={newPassword2 || ''} onChange={onInputChange} />
                                    </Form.Group>
                                </>
                        }
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    {
                        (!changingPassword)
                            ?
                            <Button variant="primary" onClick={checkCurrentPassword}>
                                Comprobar
                            </Button>
                            :
                            <Button variant="primary" onClick={updatePassword}>
                                Cambiar
                            </Button>
                    }

                    <Button variant="secondary" onClick={handlePasswordClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
