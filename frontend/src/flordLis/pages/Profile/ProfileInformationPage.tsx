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
import { FlordLisState } from "../../../redux/slices/flordLisSlice";
import { Link } from "react-router-dom";

export const ProfileInformationPage = () => {

  const dispatch = useFlordLisDispatch();
  const { checkingPassword } = useFlordLisSelector<CustomerState>((state) => state.customer);

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [showCustomerInfo, setShowCustomerInfo] = useState<boolean>(true);
  const [customerFullInfo, setCustomerFullInfo] = useState({});

  const { userId } = useFlordLisSelector<AuthState>((state) => state.auth);
  const { CRUD, Read } = useFlordLisSelector<FlordLisState>((state) => state.flordLis);

  useEffect(() => {

    if (userId != undefined) {

      if (CRUD || Read) {
        // TODO: Petición a la table Admin
      }
      else {

        getCustomerFullInfo(userId);
      }
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
    </>
  )
}
