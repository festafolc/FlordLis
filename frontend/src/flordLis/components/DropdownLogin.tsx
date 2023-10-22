import { Button, Container, Form } from 'react-bootstrap';
import { useFlordLisDispatch, useFlordLisSelector } from '../../hooks/useFlordLis';
import { actionLogin } from '../../redux/slices/flordLisSlice';

export const DropdownLogin = () => {

    const flordLisDispatch = useFlordLisDispatch();
    const {isLogged} = useFlordLisSelector((state) => state.flordLis)



    const onLogin = () => {
        
        flordLisDispatch(actionLogin(isLogged));
    }

    return (
        <>
            <Container style={{ width: "300px" }}>
                <Form>
                    {/* Email */}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" />
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={onLogin}>
                        Inicia sesión
                    </Button>
                </Form>
            </Container>
        </>
    )
}
