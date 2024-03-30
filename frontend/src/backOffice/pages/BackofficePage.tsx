import { Link } from "react-router-dom";
import { AdminLogin } from "../components/AdminAccess/AdminLogin";
import { useFlordLisSelector } from "../../hooks/useFlordLis";
import { FlordLisState } from "../../redux/slices/flordLisSlice";

import ecoflordlis from '../../assets/images/ecoflordlis.jpg';
import flordlisHome from '../../assets/images/flordlis_home.jpg';
import dcBlack from '../../assets/images/products/dc-black.jpg';
import "./backofficePageStyle.css";

export const BackofficePage = () => {

  const { AdminAccess } = useFlordLisSelector<FlordLisState>((state) => state.flordLis);

  return (
    <>
      {
        (AdminAccess)
          ?
          <main className="layout__backOffice">
            <section className="backOffice__leftSide">
              <button className="leftSide__year">Global</button>
              <button className="leftSide__year">2024</button>
              <button className="leftSide__year">2023</button>
              <button className="leftSide__year">2022</button>
              <button className="leftSide__year">2021</button>
              <button className="leftSide__year">2020</button>
            </section>
            <section className="backOffice__rightSide">
              <div className='rightSide__top'>
                <Link className='cards__option' to="/backoffice/customers">
                  <h2 className='card__title'>Clientes</h2>
                  <img className='card__img' src={ecoflordlis} />
                </Link>
                <Link className='cards__option' to="/backoffice/products">
                  <h2 className='card__title'>Productos</h2>
                  <img className='card__img' src={flordlisHome} />
                </Link>
                <Link className='cards__option' to="/backoffice/orders">
                  <h2 className='card__title'>Pedidos</h2>
                  <img className='card__img' src={dcBlack} />
                </Link>
              </div>
              <hr className="separator" />
              <div className='rightSide__bottom'>
                <div className="buttons__months">
                  <button className="buttons__months-month">Total</button>
                  <button className="buttons__months-month">Enero</button>
                  <button className="buttons__months-month">Febrero</button>
                  <button className="buttons__months-month">Marzo</button>
                  <button className="buttons__months-month">Abril</button>
                  <button className="buttons__months-month">Mayo</button>
                  <button className="buttons__months-month">Junio</button>
                  <button className="buttons__months-month">Julio</button>
                  <button className="buttons__months-month">Agosto</button>
                  <button className="buttons__months-month">Septiembre</button>
                  <button className="buttons__months-month">Octubre</button>
                  <button className="buttons__months-month">Noviembre</button>
                  <button className="buttons__months-month">Diciembre</button>
                </div>
                <div className="graphic">
                  Gráficos
                </div>
              </div>
            </section>
          </main>
          :
          <AdminLogin />
      }
    </>
  )
}
