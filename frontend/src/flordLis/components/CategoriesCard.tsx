import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CategoriesCard = ({ category, bigCard }: { category: any, bigCard: boolean }) => {

    const categoryImageUrl = `../../../assets/categories/${category.id}.jpg`;

    return (
        <>
            {(bigCard)
                ?
                <Card className="my-3 p-3 rounded">
                    <Link to={`/shop/categories/${category.name}`}>
                        <Card.Img src={categoryImageUrl} variant="top" alt={category.name} />
                    </Link>
                </Card>
                :
                <Card className="rounded" style={{height: '70px'}} >
                    <Link to={`/shop/categories/${category.name}`}>
                        <Row>
                            <Col>
                                <Card.Img style={{height: '70px'}} src={categoryImageUrl} alt={category.name} />
                            </Col>
                            <Col>
                                <Card.Title className='text-center'>{category.name[0].toUpperCase() + category.name.slice(1).replace('-', ' ')}</Card.Title>
                            </Col>
                        </Row>
                    </Link>
                </Card>
            }
        </>
    )
}
