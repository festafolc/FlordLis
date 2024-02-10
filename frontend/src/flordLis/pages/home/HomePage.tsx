import { getProductByCategory } from '../../helpers/getProductByCategory';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { ProductsCarousel } from '../../components/ProductsCarousel';
import { CategoriesCard } from '../../components/CategoriesCard';
import { flordLisCategories } from '../../data/categories';
import { NavBar } from '../../components/Navbar/Navbar';
import { Footer } from '../../components/Footer/Footer';

import './homePageStyle.css';
import banner from '../../../assets/images/banner.jpg';
import ecoflordlis from '../../../assets/images/ecoflordlis.jpg';
import flordlisHome from '../../../assets/images/flordlis_home.jpg';
import productImg from '../../../assets/images/products/dc-arrow.jpg';
import { Carousel } from '../../components/Carousel/Carousel';
import { RequestPersonalProduct } from '../../components/RequestPersonalProduct/RequestPersonalProduct';
import { ProductCardHome } from '../../components/ProductCardHome/ProductCardHome';
import { Link } from 'react-router-dom';

export const HomePage = () => {

  const comicsList = getProductByCategory('DC Comics');

  return (
    <>
      <main className='layout__homePage'>

        {/* BANNER */}
        <section className='container__banner'>
          <div className='banner__content'>
            <img className='banner__img' src={banner} />
            <h1 className='banner__title'>Bienvenido</h1>
            <h4 className='banner__subtitle'>Algo bonito para decir</h4>
          </div>
        </section>

        {/* SHOP CARDS */}
        <section className='container__cards'>
          <div className='cards__content'>
            <Link className='cards__shop' to="/shop/ecoflordlis">
              <h2 className='shop__title'>Eco FlordLis</h2>
              <img className='shop__img' src={ecoflordlis} />
            </Link>
            <Link className='cards__shop' to="/shop/flordlishome">
              <h2 className='shop__title'>FlordLis Home</h2>
              <img className='shop__img' src={flordlisHome} />
            </Link>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className='container__products'>
          <h2 className='products__main-title'>Te puede interesar...</h2>
          <div className='products__container'>
            <ProductCardHome />
            <ProductCardHome />
            <ProductCardHome />
            <ProductCardHome />
            <ProductCardHome />
          </div>
          <div className='products__container'>
            <ProductCardHome />
            <ProductCardHome />
            <ProductCardHome />
            <ProductCardHome />
            <ProductCardHome />
          </div>
        </section>

        {/* REQUEST */}
        <RequestPersonalProduct />

        <Footer />
      </main>
      {/* <Container>

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
              <h3 className='text-center' >{category.name[0].toUpperCase() + category.name.slice(1).replace('-', ' ')}</h3>
              <CategoriesCard category={category} bigCard={true}/>
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  )
}
