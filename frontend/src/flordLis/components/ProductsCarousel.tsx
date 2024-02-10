import { getProductByCategory } from '../helpers/getProductByCategory';
// import { Link } from 'react-router-dom';

export const ProductsCarousel = () => {

    const allProducts = getProductByCategory('Marvel Comics');
    const bestProducts = allProducts.slice(0, 5);

    return (
        <>
        <div>ProductsCarousel</div>
            {/* <Carousel className="w-75">
                {
                    bestProducts.map((product: any) => (
                        <Carousel.Item key={product.id} style={{ height: '500px' }}>
                            <Link to={`/product/${product.id}`}>
                                <Image className="w-100" src={`../../../assets/products/${product.id}.jpg`} style={{ height: '500px' }} alt={product.superhero} />
                                <Carousel.Caption>
                                    <h3>{product.alter_ego}</h3>
                                    <p>{product.characters}</p>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))
                }
            </Carousel> */}
        </>
    )
}
