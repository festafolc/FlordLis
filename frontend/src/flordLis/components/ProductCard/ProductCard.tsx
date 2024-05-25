// import { Rating } from './Rating';
import { Link } from 'react-router-dom';
import { Product } from '../../../../../backend/types';
import { getImageURL } from '../../helpers/getImageURL';
import cart from '../../../assets/images/cart.jpg';


export const ProductCard = ({ product, showbodyCard, showAddCartButton }: { product: Product, showbodyCard: boolean, showAddCartButton: boolean }) => {

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
      });

    return (
        <>
            <Link className="card__product" to={`/shop/${product.linkName}`}>
                <img className="card__product__image" src={getImageURL("ecoflordlis", `${product.linkName}`, `${product.linkName}_01`)} alt={product.name} />
                <div className="card__product__overlay">
                    <div className="card__product__header">
                        <div className="card__product__header-text">
                            <h2 className="card__product__title">{product.name}</h2>
                            <h3 className="card__product__price">{formatter.format(product.price)} COP</h3>
                        </div>
                        <img className="card__product__cart" title='Añadir a carrito' src={cart} alt="Carrito" />
                    </div>
                </div>
            </Link>
        </>
    )
}
