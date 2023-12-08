import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../../helpers/getProductById";
import { Button, Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import { useMemo } from "react";
import { Rating } from "../../components/Rating";
import { useFlordLisDispatch } from "../../../hooks/useFlordLis";
import { addProductsToCartThunk } from "../../../redux/thunks/cartThunk";

export const ProductPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useFlordLisDispatch();

  // Se supone que esto permite no renderizar otra vez si se vuelve a recargar la página con el mismo id
  const product = useMemo(() => getProductById(id), [id]);
  const productImageUrl = `../../../assets/products/${id}.jpg`;

  const goBack = () => {
    navigate(-1);
  }

  if (!product) {
    return <Navigate to="/" />
  }

  const addToCart = (event: React.MouseEvent<HTMLElement>) => {

    event.preventDefault();

    try {

      // TODO: Consulta SQL
      dispatch(addProductsToCartThunk(product));

    } catch (error) {

    }

  }

  return (
    <>
      {
        (product)
          ?
          <Container>
            {/* <Link className="btn btn-light my-3" to={'..'}>Volver</Link> */}
            <Button className="btn btn-light my-3" type="button" onClick={goBack}>Volver</Button>
            <Row>
              <Col md={5}>
                <Image src={productImageUrl} alt={product.superhero} fluid />
              </Col>
              <Col md={4}>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h3>{product.superhero}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Rating value={product.rating} text={`${product.numReviews} valoraciones`} />
                  </ListGroup.Item>
                  <ListGroup.Item>Descripción: {product.alter_ego}</ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Precio:</Col>
                        <Col><strong>{product.price} $COP</strong></Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Disponiblidad:</Col>
                        <Col><strong>{product.countInStock > '0' ? "Disponible" : "No disponible"}</strong></Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Button className="btn-block" type="button" disabled={product.countInStock < '1'} onClick={addToCart}>
                        Añadir a carrito
                      </Button>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
          :
          null
      }

    </>
  )
}
