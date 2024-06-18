import {Router} from 'express';
import { getAllProductByLinkName, getAllProducts, getAllProductsByCategoryId, getAllProductsByMultipleCategoryId, getProductById } from '../controllers/product';

/*
    Products routes
    host + /flordlis/shop/
*/

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/category/:categoryId', getAllProductsByCategoryId);

productRouter.get('/categories/:categoryIds', getAllProductsByMultipleCategoryId);

productRouter.get('/product/:id', getProductById);

productRouter.get('/allProductsByLinkName/:linkName', getAllProductByLinkName);

export default productRouter;