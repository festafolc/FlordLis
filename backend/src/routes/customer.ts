import { Router } from 'express';
import { updateCustomerInfoById, getCustomerFullInfoById, updatePasswordByUser } from '../controllers/customer';
import { formValidator } from '../middlewares/formValidator';
import { check } from 'express-validator';

const customerRouter = Router();

customerRouter.get('/:id', getCustomerFullInfoById);

customerRouter.put('/:id', updateCustomerInfoById);

customerRouter.post('/update-password/:id',
    [
        check('newPassword', "Password is must contains at least 8 characters").isLength({ min: 8 }),
        formValidator
    ]
    , updatePasswordByUser);

export default customerRouter;