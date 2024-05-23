// import { Link } from 'react-router-dom';
// import { Rating } from './Rating';
import { Link } from 'react-router-dom';
import ecoFlordLis from '../../../assets/images/ecoflordlis.jpg';
import { Product } from '../../../../../backend/types';

export const ProductCard = ({ product, showbodyCard, showAddCartButton }: { product: Product, showbodyCard: boolean, showAddCartButton: boolean }) => {

    return (
        <>
            <Link className="APP-card__product" to={`/shop/88792`}>
                <div className="APP-product__image">
                    <img className="product__image-img" src={ecoFlordLis} alt="Eco Flor d Lis" />
                </div>
                <div className="APP-product__info">
                    <h3 className="APP-product__name">{product.name}</h3>
                    <h4 className="APP-prodcut__price">{product.price}</h4>
                </div>
            </Link>
        </>
    )
}
