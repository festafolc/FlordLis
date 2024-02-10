import { Link } from 'react-router-dom';
import './myOrdersStyle.css';

export const MyOrders = () => {
  return (
    <section className='container__orders'>
      <h2 className='orders__title'>Mis compras</h2>
      <article className='orders__info'>
        <div className='orders__order'>
          <ul className='order__information'>
            <li className='order__column'>
              <h3 className='column__title'>Total productos</h3>
              <h4 className='column__info'>4</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Precio total</h3>
              <h4 className='column__info'>$COP 600.000,00</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Fecha</h3>
              <h4 className='column__info'>12/12/2023</h4>
            </li>
            <li className='order__column order__column-button'>
            <Link className='column__invoice' to="/profile/orders/invoice/1">Ver detalle</Link>
            </li>
          </ul>
          <ul className='order__information'>
            <li className='order__column'>
              <h3 className='column__title'>Total productos</h3>
              <h4 className='column__info'>2</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Precio total</h3>
              <h4 className='column__info'>$COP 50.000,00</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Fecha</h3>
              <h4 className='column__info'>23/12/2023</h4>
            </li>
            <li className='order__column'>
              <Link className='column__invoice' to="/profile/orders/invoice/2">Ver detalle</Link>
            </li>
          </ul>
          <ul className='order__information'>
            <li className='order__column'>
              <h3 className='column__title'>Total productos</h3>
              <h4 className='column__info'>7</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Precio total</h3>
              <h4 className='column__info'>$COP 480.000,00</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Fecha</h3>
              <h4 className='column__info'>10/11/2023</h4>
            </li>
            <li className='order__column'>
            <Link className='column__invoice' to="/profile/orders/invoice/3">Ver detalle</Link>
            </li>
          </ul>
          <ul className='order__information'>
            <li className='order__column'>
              <h3 className='column__title'>Total productos</h3>
              <h4 className='column__info'>15</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Precio total</h3>
              <h4 className='column__info'>$COP 860.000,00</h4>
            </li>
            <li className='order__column'>
              <h3 className='column__title'>Fecha</h3>
              <h4 className='column__info'>1/1/2024</h4>
            </li>
            <li className='order__column'>
            <Link className='column__invoice' to="/profile/orders/invoice/4">Ver detalle</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
