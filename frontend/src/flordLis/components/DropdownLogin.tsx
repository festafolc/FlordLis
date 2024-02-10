import { useNavigate } from 'react-router-dom';

export const DropdownLogin = () => {

    const navigate = useNavigate();

    const onLogin = () => {
        
        navigate('/auth/login');
    }

    return (
        <>
            {/* <Container style={{ width: "300px" }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="Correo electrónico" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>

                    <Button variant="primary" type="submit" onClick={onLogin}>
                        Inicia sesión
                    </Button>
                </Form>
            </Container> */}
        </>
    )
}
