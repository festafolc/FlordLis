import ecoFlordLis from '../../../assets/images/ecoflordlis.jpg';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { OrderProductsBy } from '../../components/OrderProductsBy';
import './shopPagesStyle.css';


export const EcoFlordLisPage = () => {
  return (
    <>
      <section className='shop__container'>
        <div className='shop__header__container'>
          <div className='shop__header__content'>
            <h2 className='shop__header__content-title '>Eco FlordLis</h2>
            <img className='shop__header__content-img' src={ecoFlordLis} alt="Eco Flor d Lis" />
          </div>
        </div>

        <main className='APP-shop__products'>

          {/* Ordernar por */}
          <OrderProductsBy />

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
