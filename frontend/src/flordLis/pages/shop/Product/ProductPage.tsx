import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getProductById } from "../../../helpers/getProductById";
import { useMemo } from "react";
import { Rating } from "../../../components/Rating";
import { useFlordLisDispatch } from "../../../../hooks/useFlordLis";
import { addProductsToCartThunk } from "../../../../redux/thunks/cartThunk";

import captain from '../../../../assets/images/products/marvel-captain.jpg';
import './productStyle.css';
import { CounterUnits } from "../../../components/CounterUnits/CounterUnits";
import { ShopCards } from "../../../components/ShopCards/ShopCards";
import { RequestPersonalProduct } from "../../../components/RequestPersonalProduct/RequestPersonalProduct";
import { ProductCardHome } from "../../../components/ProductCardHome/ProductCardHome";

export const ProductPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useFlordLisDispatch();
console.log(id);

  // Se supone que esto permite no renderizar otra vez si se vuelve a recargar la página con el mismo id
  // const product = useMemo(() => getProductById(id), [id]);
  // const productImageUrl = `../../../assets/products/${id}.jpg`;

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
        // (product)
        (true)
          ?
          <section className="productBuy__container">
            <div className="productBuy__nav">
              <span className="productBuy__nav__back"><i className='fa-solid fa-chevron-left'> Volver</i></span>
            </div>
            <div className="productBuy__information">
              <div className="productBuy__left">
                <img src="https://s-media-cache-ak0.pinimg.com/236x/3b/36/ca/3b36ca3afe0fa0fd4984b9eee2e154bb.jpg" />
              </div>
              <div className="productBuy__right">
                <h2 className="productBuy__title">Classic Peace Lily</h2>
                <h4 className="productBuy__category">Popular House Plant</h4>
                <h1 className="productBuy__price">$18</h1>
                <p className="productBuy__description">Classic Peace Lily is a spathiphyllum floor plant arranged in a bamboo planter with a blue & red ribbom and butterfly pick.</p>
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
