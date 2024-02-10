import { useEffect, useState } from "react";
import flordLisApi from "../../../apis/flordLisApi";
import { useFlordLisDispatch, useFlordLisSelector } from "../../../hooks/useFlordLis";
import { BasicInformation } from "./BasicInformation/BasicInformation";
import { MyOrders } from "./MyOrders/MyOrders";
import { AuthState } from "../../../redux/slices/authSlice";
import { CustomerState } from "../../../redux/slices/customerSlice";
import { changePasswordThunk } from "../../../redux/thunks/customerThunks";
import './profileInformationPageStyle.css';
import { ChangePassword } from "./ChangePassword/ChangePassword";

export const ProfileInformationPage = () => {

  const dispatch = useFlordLisDispatch();
  const { checkingPassword } = useFlordLisSelector<CustomerState>((state) => state.customer);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showCustomerInfo, setShowCustomerInfo] = useState<boolean>(true);
  const [customerFullInfo, setCustomerFullInfo] = useState({});

  const { userId } = useFlordLisSelector<AuthState>((state) => state.auth);

  useEffect(() => {

    if (userId != undefined) {

      getCustomerFullInfo(userId);
    }
  }, []);

  const getCustomerFullInfo = async (id: number) => {

    try {

      const result = await flordLisApi.get('/customer/' + id);

      setCustomerFullInfo(result.data);
      setIsLoaded(true);

    } catch (error) {

      setIsLoaded(false);
      setCustomerFullInfo({});
    }
  }

  const changePassword = () => {
    dispatch(changePasswordThunk());
  }

  return !isLoaded ? null : (
    <>
      {
        (customerFullInfo)
          ?
          <section className="container__profile">

            {/* <ul className='nav__list'>
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
            </ul> */}
            <nav className="profile__nav">
              <ul className="nav__options">
                <li className="option__button" onClick={() => setShowCustomerInfo(true)}>
                  <h4 className="button__text">Información personal</h4>
                </li>
                <li className="option__button" onClick={() => setShowCustomerInfo(false)}>
                  <h4 className="button__text">Mis compras</h4>
                </li>
                <li className="option__button" onClick={changePassword}>
                  <h4 className="button__text">Cambiar contraseña</h4>
                </li>
              </ul>
            </nav>
            <article className="profile__information">
              {
                (showCustomerInfo)
                  ? <BasicInformation customerFullInfo={customerFullInfo} />
                  : <MyOrders />
              }
            </article>

            {
              (checkingPassword)
                ? <ChangePassword />
                : null
            }
          </section>
          :
          null
      }

      {/* <Container className="mt-5">
<BasicInformation customerFullInfo={customerFullInfo} />
        <Row>
          <Col xs={2} id="sidebar-wrapper">
            <SidebarProfile />
          </Col>
          <Col xs={10} id="page-content-wrapper">
            <br />
            {
              (customerFullInfo)
                ?
                <BasicInformation customerFullInfo={customerFullInfo} />
                :
                null
            }
          </Col>
        </Row>

      </Container> */}
    </>
  )
}
