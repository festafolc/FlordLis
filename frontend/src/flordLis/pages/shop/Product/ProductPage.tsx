import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../../../helpers/getProductById";
import { useMemo } from "react";
import { Rating } from "../../../components/Rating";
import { useFlordLisDispatch } from "../../../../hooks/useFlordLis";
import { addProductsToCartThunk } from "../../../../redux/thunks/cartThunk";

import captain from '../../../../assets/images/products/marvel-captain.jpg';
import './productStyle.css';
import { CounterUnits } from "../../../components/CounterUnits/CounterUnits";
import { ShopCards } from "../../../components/ShopCards/ShopCards";
import { RequestPersonalProduct } from "../../../components/RequestPersonalProduct/RequestPersonalProduct";
import { ProductCardHome } from "../../../components/ProductCardHome/ProductCardHome";

export const ProductPage = () => {

  // const { id } = useParams();
  const navigate = useNavigate();

  // const dispatch = useFlordLisDispatch();

  // Se supone que esto permite no renderizar otra vez si se vuelve a recargar la página con el mismo id
  // const product = useMemo(() => getProductById(id), [id]);
  // const productImageUrl = `../../../assets/products/${id}.jpg`;

  const goBack = () => {
    navigate(-1);
  }

  // if (!product) {
  //   return <Navigate to="/" />
  // }

  // const addToCart = (event: React.MouseEvent<HTMLElement>) => {

  //   event.preventDefault();

  //   try {

  //     // TODO: Consulta SQL
  //     dispatch(addProductsToCartThunk(product));

  //   } catch (error) {

  //   }
  // }

  return (
    <>
      {
        // (product)
        (true)
          ?
          <section className="PP-container__product">
            <div className="PP-product__top">
              <div className="PP-top__carousel">
                <img className="PP-top__image" src={captain} alt="Imagen producto" />
              </div>
              <div className="PP-top__information">
                <h2 className="PP-information__title">Título del producto en venta</h2>
                {/* <h3 className="PP-information__availability">Disponible</h3> */}
                <h3 className="PP-top__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est earum veniam qui corrupti animi facere omnis sit dolorem quisquam commodi, tempore, aliquam eius harum? Sapiente vitae ad voluptate recusandae.
                </h3>
                <div className="PP-information__quantity">
                  <h3 className="PP-information__quantity-title">Unidades:</h3>
                  <CounterUnits />
                </div>
                <div className="PP-information__price">
                  <h3 className="PP-information__price-title">Precio:</h3>
                  <h3 className="PP-information__price-value">$300 COP</h3>
                </div>
                <button className="PP-information__AddToCart">Añadir a la cesta</button>
              </div>
            </div>
            <hr className="PP-line__separator" />
            <div className="PP-moreProducts__container">
              <h2 className="PP-moreProducts__title">Productos similares</h2>
              <div className="PP-moreProducts__list">
                <ProductCardHome />
                <ProductCardHome />
                <ProductCardHome />
                <ProductCardHome />
                <ProductCardHome />
              </div>
            </div>
            <hr className="PP-line__separator" />
            <div className="PP-shopCards__container">
              <ShopCards />
            </div>
            <div className="PP-requestPersonalProduct__container">
              <RequestPersonalProduct />
            </div>
          </section>
          // <Container>
          //   {/* <Link className="btn btn-light my-3" to={'..'}>Volver</Link> */}
          //   <Button className="btn btn-light my-3" type="button" onClick={goBack}>Volver</Button>
          //   <Row>
          //     <Col md={5}>
          //       <Image src={productImageUrl} alt={product.superhero} fluid />
          //     </Col>
          //     <Col md={4}>
          //       <ListGroup variant="flush">
          //         <ListGroup.Item>
          //           <h3>{product.superhero}</h3>
          //         </ListGroup.Item>
          //         <ListGroup.Item>
          //           <Rating value={product.rating} text={`${product.numReviews} valoraciones`} />
          //         </ListGroup.Item>
          //         <ListGroup.Item>Descripción: {product.alter_ego}</ListGroup.Item>
          //       </ListGroup>
          //     </Col>
          //     <Col md={3}>
          //       <Card>
          //         <ListGroup variant="flush">
          //           <ListGroup.Item>
          //             <Row>
          //               <Col>Precio:</Col>
          //               <Col><strong>{product.price} $COP</strong></Col>
          //             </Row>
          //           </ListGroup.Item>
          //           <ListGroup.Item>
          //             <Row>
          //               <Col>Disponiblidad:</Col>
          //               <Col><strong>{product.countInStock > '0' ? "Disponible" : "No disponible"}</strong></Col>
          //             </Row>
          //           </ListGroup.Item>
          //           <ListGroup.Item>
          //             <Button className="btn-block" type="button" disabled={product.countInStock < '1'} onClick={addToCart}>
          //               Añadir a carrito
          //             </Button>
          //           </ListGroup.Item>
          //         </ListGroup>
          //       </Card>
          //     </Col>
          //   </Row>
          // </Container>
          :
          null
      }

    </>
  )
}
