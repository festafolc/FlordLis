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

  let allEcoFlordLisProducts: { [name: string]: Product } = {};

  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [ecoFlordLisProducts, setEcoFlordLisProducts] = useState<{ [name: string]: Product }>({})

  useEffect(() => {

    allEcoFlordLisProducts = {};
    setEcoFlordLisProducts({});
    setIsLoaded(false);

    getAllProductsByMultipleCategoryIds("1,2,3");
  }, []);

  const getAllProductsByMultipleCategoryIds = async (categoriesIds: string) => {

    try {
      
      const { data } = await flordLisApi.get('/shop/categories/' + categoriesIds);
      
      if (data.ok) {

        (data.productsByMultipleCategoryIds as Array<Product>).forEach((product) => {

          if (!Object.keys(allEcoFlordLisProducts).includes(product.name)) {

            allEcoFlordLisProducts[product.name] = product;
          }
        });

        if (Object.keys(allEcoFlordLisProducts).length > 0) {

          setEcoFlordLisProducts(allEcoFlordLisProducts);
          setIsLoaded(true);
        }
      }
    } catch (error) {

      // TODO: HACER UN GUI SIN PRODUCTOS
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

          <div className='shop__cards'>
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
