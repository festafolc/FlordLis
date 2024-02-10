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


            {/* <Card className="my-3 p-3 rounded">
                <Link to={`/shop/categories/product/${product.id}`}>
                    <Card.Img src={productImageUrl} style={(showbodyCard) ? {} : { height: '200px' }} variant="top" alt={product.superhero} />
                </Link>
                {(showbodyCard)
                    ?
                    <Card.Body>
                        <Link to={`/product/${product.id}`}>
                            <Card.Title as="div" className="product-title">
                                <strong>{product.superhero}</strong>
                            </Card.Title>
                        </Link>
                        {(showAddCartButton)
                            ? <button title='Añadir al carrito' className="btn btn-primary" style={{borderRadius: '100%', position: 'absolute', padding: '25px', bottom: '110px', right: '10px'}}><CartDashFill /></button>
                            : null
                        }
                        <Card.Text as="div"><Rating value={product.rating} text={`${product.numReviews} valoraciones`} /></Card.Text>
                        <Card.Text as="h3">{product.price} $COP</Card.Text>
                    </Card.Body>
                    :
                    <></>
                }

            </Card> */}
        </>
    )
}
