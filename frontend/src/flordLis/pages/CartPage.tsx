import { Button, Col, Container, Row } from "react-bootstrap"
import { getProductByCategory } from "../helpers/getProductByCategory";
import { ProductInCart } from "../components/ProductInCart";

export const CartPage = () => {

  const productsInCart = getProductByCategory('DC Comics');

  return (
    <>
      <Container>
        <Row>
          <Row><h1>Cesta</h1></Row>
          <Col xs={13} md={8}>
            <Row><h5>{productsInCart.length} productos en la cesta</h5></Row>
            {productsInCart.map((product: any) => (
                <ProductInCart product={product}/>
            ))}
          </Col>
          <Col xs={1} md={1}></Col>
          <Col xs={4} md={3}>
            <Row><h5>Total:</h5></Row>
            <Row><h2>500.000 $COP</h2></Row>
            <Row>
              <Button>Pagar</Button>
            </Row>
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  )
}
