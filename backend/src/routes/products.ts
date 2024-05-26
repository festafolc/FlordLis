import {Router} from 'express';
import { getAllProducts, getAllProductsByCategoryId, getAllProductsByMultipleCategoryId, getProductById } from '../controllers/product';

/*
    Products routes
    host + /flordlis/shop/
*/

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/category/:categoryId', getAllProductsByCategoryId);

productRouter.get('/categories/:categoryIds', getAllProductsByMultipleCategoryId);

productRouter.get('/product/:id', getProductById);

export default productRouter;