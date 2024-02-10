import "./invoicePageStyle.css";
import logo from '../../../../assets/images/logo.png';

export const InvoicePage = () => {
  return (
    <section className="container__invoice">
      <article className="invoice__top">
        <div className="top__flordlis">
          <h3 className="flordlis__name">Flor d' Lis SL.</h3>
          <h4 className="flordlis__address">Camino a Valledupar</h4>
          <h4 className="flordlis__address">1200-332, Valledupar, Colombia</h4>
        </div>
        <img className="top__logo" src={logo} alt="Flor d' Lis" />
      </article>

      <article className="invoice__customer">
        <div className="customer__info customer__info-column">
          <h2 className="info__title">FACTURADO A</h2>
          <h4 className="info__text">Leónidas, Rey de Esparta</h4>
          <h4 className="info__text">Camino a Esparta</h4>
          <h4 className="info__text">Centro del Peloponeso</h4>
        </div>
        <div className="customer__info customer__info-column">
          <h2 className="info__title">ENVIADO A</h2>
          <h4 className="info__text">Puerto del Pireo</h4>
          <h4 className="info__text">En la costa de Atenas</h4>
          <h4 className="info__text">Ática, Grecia</h4>
        </div>
        <div className="customer__info">
          <h2 className="info__title">Nº DE FACTURA</h2>
          <h4 className="info__text">1</h4>
          <h2 className="info__title">FECHA</h2>
          <h4 className="info__text">21/01/2024</h4>
        </div>
      </article>

      <table className="invoice__table">
        <thead className="table__head">
          <tr className="head__columns">
            <th className="column__title column__title-Products">Productos</th>
            <th className="column__title">Unidades</th>
            <th className="column__title">Precio Unidad</th>
            <th className="column__title">Importe</th>
          </tr>
        </thead>
        <tbody className="table__body">
          <tr className="body__row">
            <td className="row__value">Cacahuetes</td>
            <td className="row__value">2</td>
            <td className="row__value">100</td>
            <td className="row__value">200</td>
          </tr>
          <tr className="body__row">
            <td className="row__value">Almendras</td>
            <td className="row__value">5</td>
            <td className="row__value">200</td>
            <td className="row__value">1000</td>
          </tr>
          <tr className="body__row">
            <td className="row__value">Pistachos</td>
            <td className="row__value">3</td>
            <td className="row__value">150</td>
            <td className="row__value">450</td>
          </tr>
          <tr className="body__row">
            <td className="row__value">Nueces</td>
            <td className="row__value">12</td>
            <td className="row__value">50</td>
            <td className="row__value">600</td>
          </tr>
        </tbody>
      </table>

      <article className="footer__invoice">
        <div className="footer__right">
          <div className="right__info">
            <h3 className="footer__title">Subtotal</h3>
            <h4 className="info__text">2250</h4>
          </div>
          <div className="right__info">
            <h3 className="footer__title">IVA 21%</h3>
            <h4 className="info__text">500</h4>
          </div>
          <div className="right__info">
            <h3 className="footer__title">Gastos de envío</h3>
            <h4 className="info__text">1000</h4>
          </div>
        </div>
      </article>
      <article className="footer__totalPrice">
        <div className="totalPrice__column">
          <h3 className="footer__title">Método de pago</h3>
          <h4 className="info__text">Tarjeta bancaria: ****6839</h4>
        </div>
        <div className="totalPrice__column">
          <h3 className="totalPrice__title">Total</h3>
          <h4 className="totalPrice__text">3750</h4>
        </div>
      </article>
    </section>
  )
}
