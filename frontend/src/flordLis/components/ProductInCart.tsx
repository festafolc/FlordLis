import { Button, Col, Image, Row } from "react-bootstrap"
import { Rating } from "./Rating";
import { useFlordLisDispatch } from "../../hooks/useFlordLis";
import { removeProductFromCartThunk } from "../../redux/thunks/cartThunk";


export const ProductInCart = ({ product }: { product: any }) => {

    const dispatch = useFlordLisDispatch();

    const productImageUrl = `../../../assets/products/${product.id}.jpg`;

    const removeProductFromCart = () => {

        dispatch(removeProductFromCartThunk(product));
    }

    return (
        <>
            <Col style={{ backgroundColor: 'blue' }}>
                <Image src={productImageUrl} rounded height={150} width={200} />
            </Col>
            <Col xs={9} md={5} style={{ backgroundColor: 'red' }}>
                <Row style={{ backgroundColor: 'green' }}><h3>{product.superhero}</h3></Row>
                <Row>{product.alter_ego}</Row>
                <Row style={{ backgroundColor: 'pink' }}><Rating value={product.rating} text={`${product.numReviews} valoraciones`} /></Row>
            </Col>
            <Col>
                <Row>
                    <Button onClick={removeProductFromCart}><span>Eliminar</span></Button>
                </Row>
            </Col>
            <Col>
                <Row>{product.price} $COP</Row>
            </Col>
        </>
    )
}
