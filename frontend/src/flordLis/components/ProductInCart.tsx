import { Button, Col, Image, Row } from "react-bootstrap"
import { Rating } from "./Rating";


export const ProductInCart = ({ product }: { product: any}) => {

    const productImageUrl = `../../../assets/products/${product.id}.jpg`;

    return (
        <>
            <hr />
            <Row xs={13} md={8}>
                <Col style={{ backgroundColor: 'blue' }}>
                    <Image src={productImageUrl} rounded height={150} width={200} />
                </Col>
                <Col xs={9} md={5} style={{ backgroundColor: 'red' }}>
                    <Row style={{ backgroundColor: 'green' }}><h3>{product.superhero}</h3></Row>
                    <Row style={{ backgroundColor: 'pink' }}><Rating value={product.rating} text={`${product.numReviews} valoraciones`} /></Row>
                </Col>
                <Col>
                    <Row>
                        <Button><span>Eliminar</span></Button>
                    </Row>
                </Col>
                <Col>
                    <Row>100.000 $COP</Row>
                </Col>
            </Row>
        </>
    )
}
