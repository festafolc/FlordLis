import { CounterUnits } from '../CounterUnits/CounterUnits';

import './cartProductStyle.css'
import hulk from '../../../assets/images/products/marvel-hulk.jpg';
import { Link } from 'react-router-dom';


export const CartProduct = () => {
    return (
        <>
            <section className="CP__container">
                <div className="CP__product">
                    <div className="CP__image-container" >
                        <Link className="CP__image-container-2" to="/shop/88792">
                            <img className='CP__image' src={hulk} alt="Imagen producto" />
                        </Link>
                    </div>
                    <div className="CP__information">
                        <div className="CP__information-details">
                            <h2 className="CP__title">Título del producto</h2>
                            <div className="CP__quantity">
                                <h3 className="CP__quantity-text">Unidades: </h3>
                                <CounterUnits />
                            </div>
                        </div>
                        <button className="CP__deleteProduct">Eliminar</button>
                    </div>
                    <h3 className="CP__price">$3000</h3>
                </div>
            </section>
            <hr className="CP__separator" />
        </>
    )
}
