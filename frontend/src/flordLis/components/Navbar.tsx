import { Container, Dropdown, DropdownButton, Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Calendar2EventFill, CartDashFill, Flower3, PersonFillCheck, ShopWindow } from 'react-bootstrap-icons';
import { DropdownLogin } from './DropdownLogin';
import logo from '../../assets/images/logo.png';
import { useFlordLisDispatch, useFlordLisSelector } from '../../hooks/useFlordLis';
import { AuthState } from '../../redux/slices/authSlice';
import { logoutThunk } from '../../redux/thunks/authThunks';

export const NavBar = () => {

    const navDropdownTitle = (<ShopWindow />);

    const { status } = useFlordLisSelector<AuthState>((state) => state.auth);

    const dispatch = useFlordLisDispatch();

    const logout = () => {

        dispatch(logoutThunk(''));
    }

    return (
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img src={logo} alt="Flor d' Lis" />
                        Flor d' Lis
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <LinkContainer to="/events">
                            <Nav.Link><Calendar2EventFill /> Eventos</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/advices">
                            <Nav.Link><Flower3 /> Consejos</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title={<span><ShopWindow /> Tienda</span>} id="basic-nav-dropdown">
                            <LinkContainer to="/shop">
                                <NavDropdown.Item>Todos los productos</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/shop/ecoflordlis">
                                <NavDropdown.Item>Eco Flor d' Lis</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/shop/flordlishome">
                                <NavDropdown.Item>Flor d' Lis Home</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                        <LinkContainer to="/cart">
                            <Nav.Link><CartDashFill /> Carrito</Nav.Link>
                        </LinkContainer>
                        {(status === 'authenticated')
                            ?
                            <Nav>
                                <LinkContainer to="/profile/information">
                                    <Nav.Link><PersonFillCheck /> Perfil</Nav.Link>
                                </LinkContainer>
                                <Button onClick={logout}>Log out</Button>
                            </Nav>

                            :
                            <DropdownButton id="dropdown-login-button" title="Iniciar sesión" autoClose="outside">
                                <Dropdown.Item><DropdownLogin /></Dropdown.Item>
                            </DropdownButton>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
