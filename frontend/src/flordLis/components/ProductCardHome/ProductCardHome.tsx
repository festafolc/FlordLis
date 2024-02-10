import { Link } from 'react-router-dom';
import productImg from '../../../assets/images/categories/3.jpg';

export const ProductCardHome = () => {
    return (
        <>
            <Link className='product__card' to={`/shop/88792`}>
                <img className='product__img' src={productImg} alt='imagen producto' />
                <h4 className='product__text'>Texto del producto</h4>
            </Link>
        </>
    )
}
