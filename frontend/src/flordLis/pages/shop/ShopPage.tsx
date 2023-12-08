import { Button, Col, Container, Form, Image, Row } from "react-bootstrap"
import { ProductCard } from "../../components/ProductCard"
import { getProductByCategory } from "../../helpers/getProductByCategory";
import { CategoriesCard } from "../../components/CategoriesCard";
import { flordLisCategories } from "../../data/categories";
import { useFlordLisDispatch, useFlordLisSelector } from "../../../hooks/useFlordLis";
import { FilterProducts } from "../../../redux/slices/filterProductsSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { clearProductsThunk, getAllProductsThunk } from "../../../redux/thunks/filterProducts";

export const ShopPage = () => {

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
      console.log('adios');
      
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
      <Row>
        <Image src="../../../assets/categories/1.jpg" style={{ height: '500px' }} fluid alt='image' />;
      </Row>
      <Container fluid style={{ width: '80%' }}>
        <Row>
          <Col xs={2} md={2}>
            <Form onSubmit={applyFilters}>
              <Row>
                <Col className='mt-2'><strong>Categorias</strong>
                  <Form.Group className="mt-3 mb-3" controlId="dc-comicsCheckbox">
                    <Form.Check type="checkbox" name="dc-comics" label='DC Comics' checked={dcComics} onChange={onDcComicsChange} />
                  </Form.Group>
                  <Form.Group className="mt-3 mb-3" controlId="marvel-comicsCheckbox">
                    <Form.Check type="checkbox" name="marvel-comics" label='Marvel Comics' checked={marvelComics} onChange={onMarvelComicsChange} />
                  </Form.Group>
                  <Form.Group className="mt-3 mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="activeNotifications" label={flordLisCategories[0].name[0].toUpperCase() + flordLisCategories[0].name.slice(1).replace('-', ' ')} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="activeNotifications" label={flordLisCategories[1].name[0].toUpperCase() + flordLisCategories[1].name.slice(1).replace('-', ' ')} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="activeNotifications" label={flordLisCategories[2].name[0].toUpperCase() + flordLisCategories[2].name.slice(1).replace('-', ' ')} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name="activeNotifications" label={flordLisCategories[3].name[0].toUpperCase() + flordLisCategories[3].name.slice(1).replace('-', ' ')} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className='mt-2'>
                  <strong>Precio</strong>
                  <Form.Range name='price-filter' min={filters.minPrice} max={filters.maxPrice} step={1000} value={priceFilter} onChange={onPriceFilterChange} />
                  <span>{priceFilter}</span>
                </Col>
              </Row>
              <Button variant="primary" type="submit">
                Aplicar filtros
              </Button>
            </Form>
          </Col>
          <Col xs={16} md={10}>
            <Row>
              {flordLisCategories.map((category: any) => (
                <Col key={category.id} sm={12} md={6} lg={4} xl={3}>
                  <CategoriesCard category={category} bigCard={false} />
                </Col>
              ))}
            </Row>
            {
              (Object.keys(all_products[0]).length)
                ?
                <Row>
                  {all_products.map((product: any) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                      <ProductCard product={product} showbodyCard={true} showAddCartButton={true} />
                    </Col>
                  ))}
                </Row>
                :
                <Row>
                  <span>No hay productos con los filtros seleccionados...</span>
                </Row>
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}
