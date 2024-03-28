import { Link } from 'react-router-dom';
// import { DropdownLogin } from './DropdownLogin';
import { useFlordLisDispatch, useFlordLisSelector } from '../../../hooks/useFlordLis';
import { AuthState } from '../../../redux/slices/authSlice';
import { logoutThunk } from '../../../redux/thunks/authThunks';
import { Cart } from '../../../redux/slices/cartSlice';
import './navbarStyle.css';

import logo from '../../../assets/images/logo.png';
import { adminLogoutThunk } from '../../../redux/thunks/flordLisThunks';

export const NavBar = () => {

    // const navDropdownTitle = (<ShopWindow />);

    const { status } = useFlordLisSelector<AuthState>((state) => state.auth);
    const { productsToBuy } = useFlordLisSelector<Cart>((state) => state.cart);

    const dispatch = useFlordLisDispatch();

    const logout = () => {
        
        dispatch(adminLogoutThunk());
        dispatch(logoutThunk(''));
    }

    return (
        <>
            <section className='container__menu'>
                <div className='menu__navbar'>
                    <div className='navbar__logo'>
                        <Link className='navbar__link-logo' to='/'>
                            <img className='navbar__logo-img' src={logo} alt="Flor d' Lis" />
                            <span className='navbar__logo-name' >Flor d' Lis</span>
                        </Link>
                    </div>
                    <nav className='navbar__nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <a className='nav__link'>Tienda
                                    <i className='fa-solid fa-chevron-down nav__icon'></i>
                                </a>
                                <ul className='nav__submenu'>
                                    <li className='submenu__item'>
                                        <Link className='submenu__link' to='/shop'>Todos los productos</Link>
                                    </li>
                                    <li className='submenu__item'>
                                        <Link className='submenu__link' to='/shop/ecoflordlis'>Eco FlordLis</Link>
                                    </li>
                                    <li className='submenu__item'>
                                        <Link className='submenu__link submenu__link-lastChild' to='/shop/flordlishome'>FlordLis Home</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='nav__item'>
                                <Link className='nav__link' to='cart'>Cesta
                                    <i className='fa-solid fa-basket-shopping nav__icon nav__icon-basket-shop'></i>
                                </Link>
                            </li>
                            {
                                (status === 'authenticated')
                                    ?
                                    <ul className='nav__list'>
                                        <li className='nav__item'>
                                            <Link className='nav__link' to='/profile/information'>Perfil
                                                <i className='nav__icon fa-solid fa-user'></i>
                                            </Link>
                                        </li>
                                        <li className='nav__item'>
                                            <button className='nav__link nav__link-button' onClick={logout}>Cerrar sesión
                                                <i className='nav__icon fa-solid fa-right-from-bracket'></i>
                                            </button>
                                        </li>
                                    </ul>

                                    :
                                    <li className='nav__item'>
                                        <Link className='nav__link' to='/auth/login'>Iniciar sessión</Link>
                                    </li>
                            }
                        </ul>
                    </nav>
                </div>
            </section>
        </>
        // <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        //     <Container>
        //         <LinkContainer to="/">
        //             <Navbar.Brand>
        //                 <img src={logo} alt="Flor d' Lis" />
        //                 Flor d' Lis
        //             </Navbar.Brand>
        //         </LinkContainer>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className='ms-auto'>
        //                 <LinkContainer to="/events">
        //                     <Nav.Link><Calendar2EventFill /> Eventos</Nav.Link>
        //                 </LinkContainer>
        //                 <LinkContainer to="/advices">
        //                     <Nav.Link><Flower3 /> Consejos</Nav.Link>
        //                 </LinkContainer>
        //                 <NavDropdown title={<span><ShopWindow /> Tienda</span>} id="basic-nav-dropdown">
        //                     <LinkContainer to="/shop">
        //                         <NavDropdown.Item>Todos los productos</NavDropdown.Item>
        //                     </LinkContainer>
        //                     <LinkContainer to="/shop/ecoflordlis">
        //                         <NavDropdown.Item>Eco Flor d' Lis</NavDropdown.Item>
        //                     </LinkContainer>
        //                     <LinkContainer to="/shop/flordlishome">
        //                         <NavDropdown.Item>Flor d' Lis Home</NavDropdown.Item>
        //                     </LinkContainer>
        //                 </NavDropdown>
        //                 <LinkContainer to="/cart">
        //                     <Nav.Link>
        //                         <CartDashFill /> Cesta
        //                         {
        //                             (productsToBuy?.length > 0)
        //                                 ?
        //                                 <Badge pill bg='success' style={{ marginLeft: '5px' }}>
        //                                     {productsToBuy.length}
        //                                 </Badge>
        //                                 :
        //                                 null
        //                         }
        //                     </Nav.Link>
        //                 </LinkContainer>
        //                 {(status === 'authenticated')
        //                     ?
        //                     <Nav>
        //                         <LinkContainer to="/profile/information">
        //                             <Nav.Link><PersonFillCheck /> Perfil</Nav.Link>
        //                         </LinkContainer>
        //                         <Button onClick={logout}>Log out</Button>
        //                     </Nav>

        //                     :
        //                     <DropdownButton id="dropdown-login-button" title="Iniciar sesión" autoClose="outside">
        //                         <Dropdown.Item><DropdownLogin /></Dropdown.Item>
        //                     </DropdownButton>
        //                 }
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}
