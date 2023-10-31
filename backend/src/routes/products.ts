import {Router} from 'express';
import { getAllProducts } from '../controllers/product';

/*
    Products routes
    host + /flordlis/shop/
*/

const productRouter = Router();

productRouter.get('/', getAllProducts);

export default productRouter;