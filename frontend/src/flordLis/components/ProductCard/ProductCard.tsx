// import { Link } from 'react-router-dom';
// import { Rating } from './Rating';
import { Link } from 'react-router-dom';
import ecoFlordLis from '../../../assets/images/ecoflordlis.jpg';

export const ProductCard = ({ product, showbodyCard, showAddCartButton }: { product: any, showbodyCard: boolean, showAddCartButton: boolean }) => {

    // const productImageUrl = `../../../assets/products/${product.id}.jpg`;
    console.log(product, showbodyCard, showAddCartButton);

    return (
        <>
            <Link className="APP-card__product" to={`/shop/88792`}>
                <div className="APP-product__image">
                    <img className="product__image-img" src={ecoFlordLis} alt="Eco Flor d Lis" />
                </div>
                <div className="APP-product__info">
                    <h3 className="APP-product__name">Nombre del producto!!</h3>
                    <h4 className="APP-prodcut__price">400.00</h4>
                </div>
            </Link>
        </>
    )
}
