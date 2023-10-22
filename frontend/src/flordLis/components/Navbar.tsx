import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Calendar2EventFill, CartDashFill, Flower3, PersonFillCheck, ShopWindow } from 'react-bootstrap-icons';
import { DropdownLogin } from './DropdownLogin';
import logo from '../../assets/images/logo.png';
import { useFlordLisSelector } from '../../hooks/useFlordLis';

export const NavBar = () => {

    const {isLogged} = useFlordLisSelector((state) => state.flordLis);

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
                        <LinkContainer to="/shop">
                            <Nav.Link><ShopWindow /> Tienda</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cart">
                            <Nav.Link><CartDashFill /> Carrito</Nav.Link>
                        </LinkContainer>
                        {   (isLogged)
                            ?
                            <LinkContainer to="/profile/information">
                                <Nav.Link><PersonFillCheck /> Perfil</Nav.Link>
                            </LinkContainer>
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
