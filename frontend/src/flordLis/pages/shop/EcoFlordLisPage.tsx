import ecoFlordLis from '../../../assets/images/ecoflordlis.jpg';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { OrderProductsBy } from '../../components/OrderProductsBy';
import './shopPagesStyle.css';
import flordLisApi from '../../../apis/flordLisApi';
import { useEffect, useState } from 'react';
import { Product } from '../../../../../backend/types';


export const EcoFlordLisPage = () => {

  // CATEGORIAS DE ECOFLOR DE LIS POR ID
  // 1 HOGAR
  // 2 CUIDADO PERSONAL
  // 3 JABONES

  let allEcoFlordLisProducts: { [id: string]: Product } = {};

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [ecoFlordLisProducts, setEcoFlordLisProducts] = useState<{ [id: string]: Product }>({})

  useEffect(() => {

    allEcoFlordLisProducts = {};
    setEcoFlordLisProducts({});
    setIsLoaded(false);

    getEcoFlordLisProductsById("1");
    getEcoFlordLisProductsById("2");
    getEcoFlordLisProductsById("3");
  }, [])

  const getEcoFlordLisProductsById = async (categoryId: string) => {

    try {

      const { data } = await flordLisApi.get('/shop/' + categoryId);

      if (data.ok) {

        (data.productsByCategoryId as Array<Product>).forEach((product) => {

          if (!Object.keys(allEcoFlordLisProducts).includes(product.id.toString())) {

            allEcoFlordLisProducts[product.id.toString()] = product;
          }
        });

        // FIXME: buscar forma de mostrar todo dinámicamente
        if (Object.keys(allEcoFlordLisProducts).length == 41) {
          console.log(Object.keys(allEcoFlordLisProducts).length);
          
          setEcoFlordLisProducts(allEcoFlordLisProducts);
          setIsLoaded(true);
        }
      }
    } catch (error) {

      // TODO
      setIsLoaded(false);
    }
  }

  return !isLoaded ? null : (
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
            {
              (ecoFlordLisProducts)
                ?
                Object.values(ecoFlordLisProducts).map((product: Product, index) => (
                  <ProductCard key={index} product={product} showbodyCard={false} showAddCartButton={false} />
                ))
                :
                null
            }
          </div>
        </main>
      </section>
    </>
  )
}
