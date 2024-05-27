// import { Rating } from './Rating';
import { Link } from 'react-router-dom';
import { Product } from '../../../../../backend/types';
import { getImageURL } from '../../helpers/getImageURL';


export const ProductCard = ({ product, showbodyCard, showAddCartButton }: { product: Product, showbodyCard: boolean, showAddCartButton: boolean }) => {

    const formatter = new Intl.NumberFormat('es-CO', {
        style: 'currency',
        currency: 'COP',
    });

    return (
        <>
            <Link className="card__product" to={`/shop/${product.linkName}`}>
                <div className="product__information">
                    <img className="product__top" src={getImageURL("ecoflordlis", `${product.linkName}`, `${product.linkName}_01`)} alt={product.name} />
                    <div className="product__bottom">
                        <div className="bottom__details">
                            <div className="details__nameAndprice">
                                <h1 className='details__name'>{product.name}</h1>
                                <p>{formatter.format(product.price)} COP</p>
                            </div>
                            <div className='details__cart'><i className='fa-solid fa-basket-shopping details__cart-icon'></i></div>
                        </div>
                    </div>
                </div>
                <div className="product__description">
                    <div className="description__icon"><i className="fa fa-info-circle"></i></div>
                    <div className="description__container">
                        <p>
                            {product.description}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    )
}
