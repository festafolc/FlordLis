import {Router} from 'express';
import { getAllCategories, getCategoryByName, getProductByName } from '../controllers/categories';

/*
    Categories routes
    host + /flordlis/shop/categories
*/

const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);

categoryRouter.get('/:categoryName', getCategoryByName);

categoryRouter.get('/:categoryName/:productName', getProductByName);

export default categoryRouter;