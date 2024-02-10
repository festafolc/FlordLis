import { ProductInCart } from "../../components/ProductInCart";
import { Cart } from "../../../redux/slices/cartSlice";
import { useFlordLisSelector } from "../../../hooks/useFlordLis";
import { CartProduct } from "../../components/CartProduct/CartProduct";

import './cartPageStyle.css';

export const CartPage = () => {

  // const { productsToBuy, totalPrice } = useFlordLisSelector<Cart>((state) => state.cart);

  return (
    <>
      <section className="CARTPAGE__container">
        <div className="CARTPAGE__leftContainer">
          <h1 className="CARTPAGE__products__title">Cesta</h1>
          <hr className="CARTPAGE__products__separator"/>
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </div>
        <div className="CARTPAGE__rightContainer">
          <h2>Total productos: {3}</h2>
          <h2>Subtotal: {4704.00}</h2>
          <h4>IVA: 21%</h4>
          <h2>Total: {6000.44}</h2>
          <hr />
          <button className="CARTPAGE__payButton">Pagar</button>
        </div>
      </section>
      {/* { */}
      {/* // (productsToBuy?.length === 0)
        //   ?
        //   <div>CartPage</div>
        //   : <div>Sin productos. Vete a comprar cojones</div>
          // <Container>
          //   <Row>
          //     <h1>Sin productos. Vete a comprar cojones</h1>
          //   </Row>
          // </Container>
          // :
          // <Container>
          //   <Row>
          //     <Row><h1>Cesta</h1></Row>
          //     <Col xs={13} md={8}>
          //       <Row><h5>{productsToBuy.length} productos en la cesta</h5></Row>
          //       {productsToBuy.map((product: any) => ( */}
      {/* //         <Row xs={13} md={8} key={product.id}>
          //           <hr style={{ marginTop: '10px', marginBottom: '10px' }} />
          //           <ProductInCart product={product} />
          //         </Row>
          //       ))}
          //     </Col> */}
      {/* //     <Col xs={1} md={1}></Col>
          //     <Col xs={4} md={3}>
          //       <Row><h5>Total:</h5></Row>
          //       <Row><h2>{totalPrice} $COP</h2></Row>
          //       <Row>
          //         <Button>Comprar</Button>
          //       </Row>
          //       <hr />
          //     </Col>
          //   </Row> */}
      {/* // </Container> */}
      {/* //} */}
    </>
  )
}
