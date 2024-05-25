// import { Rating } from './Rating';
import { Link } from 'react-router-dom';
import { Product } from '../../../../../backend/types';
import { getImageURL } from '../../helpers/getImageURL';

export const ProductCard = ({ product, showbodyCard, showAddCartButton }: { product: Product, showbodyCard: boolean, showAddCartButton: boolean }) => {

    return (
        <>
            <Link className="APP-card__product" to={`/shop/${product.linkName}`}>
                <div className="APP-product__image">
                    <img className="product__image-img" src={getImageURL("ecoflordlis", `${product.linkName}`, `${product.linkName}_01`)} alt={product.name} />
                </div>
                <div className="APP-product__info">
                    <h3 className="APP-product__name">{product.name}</h3>
                    <h4 className="APP-prodcut__price">{product.price}</h4>
                </div>
            </Link>
        </>
    )
}
