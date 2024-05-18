import flordLisHome from '../../../assets/images/flordlis_home.jpg'
import { OrderProductsBy } from '../../components/OrderProductsBy'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import './shopPagesStyle.css';


export const FlordlisHomePage = () => {
  return (
    <>
      <section className='shop__container'>
        <div className='shop__header__container'>
          <div className='shop__header__content'>
            <h2 className='shop__header__content-title '>Flor d' Lis Home</h2>
            <img className='shop__header__content-img' src={flordLisHome} alt="Eco Flor d Lis" />
          </div>
        </div>

        <main className='APP-shop__products'>

          {/* Ordernar por */}
          <OrderProductsBy />

          {/* Productos */}
          <div className='APP-products__container'>
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
            <ProductCard product={null} showbodyCard={false} showAddCartButton={false} />
          </div>
        </main>
      </section>
    </>
  )
}        