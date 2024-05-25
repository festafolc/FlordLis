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
            <h1 className='banner__title'>Somos flores, somos vida</h1>
            <h4 className='banner__subtitle'>Flor d' Lis</h4>
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

        {/* PRODUCTS ECO FLOR D' LIS */}
        <section className='container__products'>
          <h2 className='products__main-title'>No tires, ¡reutiliza! Productos con los que harás la diferencia con la tierra</h2>
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

        {/* PRODUCTS FLOR D' LIS HOME*/}
        <section className='container__products'>
          <h2 className='products__main-title'>Flores que hacen de tu casa un lugar especial. ESTA PARTE DEBE SER MÁS CREATIVA</h2>
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

        {/* PEEDIDO PERSONAL */}
        <RequestPersonalProduct />

        <Footer />
      </main>
    </>
  )
}
