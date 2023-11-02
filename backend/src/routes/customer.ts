import {Router} from 'express';
import { updateCustomerInfoById, getCustomerFullInfoById } from '../controllers/customer';

const customerRouter = Router();

customerRouter.get('/:id', getCustomerFullInfoById);

customerRouter.put('/:id', updateCustomerInfoById);

export default customerRouter;