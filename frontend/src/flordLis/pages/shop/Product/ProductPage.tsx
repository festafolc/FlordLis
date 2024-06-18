import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../../../helpers/getProductById";
import { useEffect, useMemo, useState } from "react";
import { Rating } from "../../../components/Rating";
import { useFlordLisDispatch } from "../../../../hooks/useFlordLis";
import { addProductsToCartThunk } from "../../../../redux/thunks/cartThunk";

import captain from '../../../../assets/images/products/marvel-captain.jpg';
import './productStyle.css';
import { CounterUnits } from "../../../components/CounterUnits/CounterUnits";
import { ShopCards } from "../../../components/ShopCards/ShopCards";
import { RequestPersonalProduct } from "../../../components/RequestPersonalProduct/RequestPersonalProduct";
import { ProductCardHome } from "../../../components/ProductCardHome/ProductCardHome";
import flordLisApi from "../../../../apis/flordLisApi";
import { Product } from "../../../../../../backend/types";
import { getImageURL } from "../../../helpers/getImageURL";

export const ProductPage = () => {

  const { linkName } = useParams();
  const navigate = useNavigate();
  const dispatch = useFlordLisDispatch();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  const formatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
  });

  // const productImageUrl = `../../../assets/products/${id}.jpg`;

  useEffect(() => {

    setIsLoaded(false);
    if (linkName != null) {

      getAllProductsByLinkName(linkName);
    }
  }, []);


  const getAllProductsByLinkName = async (linkName: string) => {

    try {

      const { data } = await flordLisApi.get('/shop/allProductsByLinkName/' + linkName);

      if (data.ok && data.productsByLinkName?.length > 0) {
        setProducts(data.productsByLinkName);
        setIsLoaded(true);
      }
    } catch (error) {
      setIsLoaded(false);
    }
  }

  const goBack = () => {

    navigate(-1);
  }

  // if (!product) {
  //   return <Navigate to="/" />
  // }

  // const addToCart = (event: React.MouseEvent<HTMLElement>) => {

  //   event.preventDefault();

  //   try {

  //     // TODO: Consulta SQL
  //     dispatch(addProductsToCartThunk(product));

  //   } catch (error) {

  //   }
  // }

  return (
    <>
      {
        (isLoaded)
          ?
          <section className="productBuy__container">
            <div className="productBuy__nav">
              <span className="productBuy__nav__back" onClick={goBack} ><i className='fa-solid fa-chevron-left'>Volver</i></span>
            </div>
            <div className="productBuy__information">
              <div className="productBuy__left">
                <img src={getImageURL("ecoflordlis", `${products[0].linkName}`, `${products[0].linkName}_01`)} alt={products[0].name} />
              </div>
              <div className="productBuy__right">
                <h2 className="productBuy__title">{products[0].name}</h2>
                {/* <h4 className="productBuy__category">{products[0].}</h4> */}
                <h1 className="productBuy__price">{formatter.format(products[0].price)}</h1>
                <p className="productBuy__description">{products[0].description}</p>
                <div className="productBuy__AddToCartAndUnits">
                  <button className="productBuy__AddToCart">Añadir a la cesta</button>
                  <CounterUnits />
                </div>
              </div>
            </div>
          </section>
          :
          null
      }
    </>
  )
}
