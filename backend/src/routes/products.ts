import {Router} from 'express';
import { getAllProducts, getAllProductsByCategoryId, getProductById } from '../controllers/product';

/*
    Products routes
    host + /flordlis/shop/
*/

const productRouter = Router();

productRouter.get('/', getAllProducts);

productRouter.get('/:categoryId', getAllProductsByCategoryId);

productRouter.get('/product/:id', getProductById);

export default productRouter;