import flordLisHome from '../../../../assets/images/flordlis_home.jpg'
import { ProductCard } from '../../../components/ProductCard/ProductCard'


export const FlordlisHomePage = () => {
  return (
    <>
    <section className="EFP-shop__container">
      <div className='EFP-cards__content'>
        <div className='EFP-cards__shop'>
          <h2 className='EFP-shop__title'>Flor d' Lis Home</h2>
          <img className="EFP-shop__img" src={flordLisHome} alt="Eco Flor d Lis" />
        </div>
      </div>

      <main className="APP-shop__products">
        <div className="APP-products__orderAndfilter">
          <div className="APP-order__select">
            <select className="APP-order__selector">
              <option value="1">Mejores resultados</option>
              <option value="2">De más caro a más barato</option>
              <option value="3">De más barato a más caro</option>
              <option value="4">Los más vendidos</option>
            </select>
          </div>
          {/* <button>Filtrar</button> */}
        </div>

        <div className="APP-products__container">

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