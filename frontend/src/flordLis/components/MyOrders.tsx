import { ProductCard } from './ProductCard/ProductCard';
import { getProductByCategory } from '../helpers/getProductByCategory';

export const MyOrders = () => {

    const comicsList = getProductByCategory('DC Comics');
    const myOrders = comicsList.slice(3, 6);


    return (
        <>
        <div>MyOrders</div>
            {/* <Container className='mx-5' >
                <Container className='mx-5' style={{ width: '55rem' }}>
                    <Stack gap={5}>
                        {
                            myOrders.map((product: any) => (
                                <Row className='justify-content-md-center bg-primary-subtle align-items-center'>
                                    <Col key={product.id}>
                                        <ProductCard product={product} showbodyCard={false} showAddCartButton={false}/>
                                    </Col>
                                    <Col key={product.id}>
                                        {product.superhero}
                                        <br />
                                        {product.characters}
                                    </Col>
                                    <Col key={product.id} className='text-center'>
                                        <Button>Ver factura</Button>
                                    </Col>
                                </Row>
                            ))
                        }
                    </Stack>
                </Container>
            </Container> */}
        </>
    )
}
