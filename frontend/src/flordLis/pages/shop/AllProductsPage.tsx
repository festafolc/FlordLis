import { ProductCard } from "../../components/ProductCard/ProductCard"
import { getProductByCategory } from "../../helpers/getProductByCategory";
import { CategoriesCard } from "../../components/CategoriesCard";
import { flordLisCategories } from "../../data/categories";
import { useFlordLisDispatch, useFlordLisSelector } from "../../../hooks/useFlordLis";
import { FilterProducts } from "../../../redux/slices/filterProductsSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { clearProductsThunk, getAllProductsThunk } from "../../../redux/thunks/filterProducts";
import { ShopCards } from "../../components/ShopCards/ShopCards";
import { OrderProductsBy } from "../../components/OrderProductsBy";

import './shopPagesStyle.css';

export const AllProductsPage = () => {

  const dispatch = useFlordLisDispatch();
  const { all_products, filters } = useFlordLisSelector<FilterProducts>((state) => state.filterProducts);

  const comicsList1 = getProductByCategory('DC Comics');
  const comicsList2 = getProductByCategory('Marvel Comics');
  const comicsList = comicsList1.concat(comicsList2);

  useEffect(() => {

    dispatch(getAllProductsThunk(comicsList));
  }, []);

  const [priceFilter, setPriceFilter] = useState<number>(filters.maxPrice);
  const [dcComics, setDcComics] = useState<boolean>(true);
  const [marvelComics, setMarvelComics] = useState<boolean>(true);

  const onPriceFilterChange = (event: ChangeEvent<HTMLInputElement>) => {

    event.preventDefault();
    setPriceFilter(parseInt(event.target.value));
  }

  const applyFilters = (event: FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    let productsFiltered: {}[] = [{}];

    if (dcComics && marvelComics) {

      productsFiltered = comicsList.filter(o => parseInt(o.price) <= priceFilter);
    }
    else if (dcComics) {

      productsFiltered = comicsList.filter(o => parseInt(o.price) <= priceFilter && o.category === 'DC Comics');
    }
    else if (marvelComics) {
      productsFiltered = comicsList.filter(o => parseInt(o.price) <= priceFilter && o.category === 'Marvel Comics');
    }

    if (productsFiltered.length > 0) {

      dispatch(getAllProductsThunk(productsFiltered));
    }
    else {

      dispatch(clearProductsThunk());
    }
  }

  const onDcComicsChange = () => {

    setDcComics(!dcComics);
  }

  const onMarvelComicsChange = () => {

    setMarvelComics(!marvelComics);
  }

  return (
    <>
      <section className='shop__container shop__container-allproducts'>

        {/* Shop cards */}
        <div className='APP-shopCards__container'>
          <ShopCards />
        </div>

        <main className='APP-shop__products'>

          {/* Ordenar por */}
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
