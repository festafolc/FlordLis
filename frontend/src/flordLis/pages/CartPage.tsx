import { Button, Col, Container, Row } from "react-bootstrap"
import { ProductInCart } from "../components/ProductInCart";
import { Cart } from "../../redux/slices/cartSlice";
import { useFlordLisSelector } from "../../hooks/useFlordLis";

export const CartPage = () => {

  const { productsToBuy, totalPrice } = useFlordLisSelector<Cart>((state) => state.cart);

  return (
    <>
      {
        (productsToBuy?.length === 0)
          ?
          <Container>
            <Row>
              <h1>Sin productos. Vete a comprar cojones</h1>
            </Row>
          </Container>
          :
          <Container>
            <Row>
              <Row><h1>Cesta</h1></Row>
              <Col xs={13} md={8}>
                <Row><h5>{productsToBuy.length} productos en la cesta</h5></Row>
                {productsToBuy.map((product: any) => (
                  <Row xs={13} md={8} key={product.id}>
                    <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
                    <ProductInCart product={product} />
                  </Row>
                ))}
              </Col>
              <Col xs={1} md={1}></Col>
              <Col xs={4} md={3}>
                <Row><h5>Total:</h5></Row>
                <Row><h2>{totalPrice} $COP</h2></Row>
                <Row>
                  <Button>Comprar</Button>
                </Row>
                <hr />
              </Col>
            </Row>
          </Container>
      }
    </>
  )
}
