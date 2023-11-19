import { Col, Container, Row } from "react-bootstrap"
import { ProductCard } from "../../components/ProductCard"
import { getProductByCategory } from "../../helpers/getProductByCategory";

export const ShopPage = () => {

  const comicsList1 = getProductByCategory('DC Comics');
  const comicsList2 = getProductByCategory('DC Comics');
  const comicsList3 = getProductByCategory('DC Comics');

  const comicsList = comicsList1.concat(comicsList2.concat(comicsList3));


  return (
    <>
      <Container>
        <Row>
          {comicsList.map((product: any) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} showbodyCard={true} showAddCartButton={true} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
