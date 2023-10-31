import { Col, Container, Row } from 'react-bootstrap';
import { getProductByCategory } from '../helpers/getProductByCategory';
import { ProductCard } from '../components/ProductCard';
import { ProductsCarousel } from '../components/ProductsCarousel';
import { CategoriesCard } from '../components/CategoriesCard';
import { flordLisCategories } from '../data/categories';

export const HomePage = () => {

  const comicsList = getProductByCategory('DC Comics');

  return (
    <>
      <Container>

        <h1>Productos mejor valorados</h1>
        <Row>
          <Col className='bg-primary'>
            <ProductsCarousel />
          </Col>
        </Row>

        <h1>Productos nuevos</h1>
        <Row>
          {comicsList.map((product: any) => (
            <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
              <ProductCard product={product} showbodyCard={true} showAddCartButton={false} />
            </Col>
          ))}
        </Row>

        <h1>Flor d' Lis categorías</h1>
        <Row>
          {flordLisCategories.map((category: any) => (
            <Col key={category.id} sm={12} md={6} lg={4} xl={3}>
              {/* <h3 className='text-center' >{category.name}</h3> */}
              <h3 className='text-center' >{category.name[0].toUpperCase() + category.name.slice(1).replace('-', ' ')}</h3>
              <CategoriesCard category={category} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  )
}
