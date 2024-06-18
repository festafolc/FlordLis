import {Router} from 'express';
import { getAllProductsByLinkName, getAllProducts, getAllProductsByCategoryId, getAllProductsByMultipleCategoryId, getProductById } from '../controllers/product';

/*
    Products routes
    host + /flordlis/shop/
*/

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/category/:categoryId', getAllProductsByCategoryId);

productRouter.get('/categories/:categoryIds', getAllProductsByMultipleCategoryId);

productRouter.get('/product/:id', getProductById);

productRouter.get('/allProductsByLinkName/:linkName', getAllProductsByLinkName);

export default productRouter;