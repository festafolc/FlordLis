import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CategoriesCard = ({category}: any) => {

    const categoryImageUrl = `../../../assets/categories/${category.id}.jpg`;

    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/shop/categories/${category.name}`}>
                    <Card.Img src={categoryImageUrl} variant="top" alt={category.name} />
                </Link>
            </Card>
        </>
    )
}
