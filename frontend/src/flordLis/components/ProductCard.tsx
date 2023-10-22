import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Rating } from './Rating';
import { CartDashFill } from 'react-bootstrap-icons';

export const ProductCard = ({ product, showbodyCard, showAddCartButton }: { product: any, showbodyCard: boolean, showAddCartButton: boolean }) => {

    const productImageUrl = `../../../assets/products/${product.id}.jpg`;

    return (
        <>
            <Card className="my-3 p-3 rounded">
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

            </Card>
        </>
    )
}
