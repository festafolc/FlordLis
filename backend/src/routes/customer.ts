import { Router } from 'express';
import { updateCustomerInfoById, getCustomerFullInfoById, updatePasswordByUser } from '../controllers/customer';
import { formValidator } from '../middlewares/formValidator';
import { check } from 'express-validator';

/*
    Customer routes
    host + /flordlis/customer
*/

const customerRouter = Router();

customerRouter.get('/:id', getCustomerFullInfoById);

customerRouter.put('/:id',
    [
        check('name', "Please, provide your name").not().isEmpty(),
        check('surname', "Please, your surname").not().isEmpty(),
        check('fullPhoneNumber', "Please, provide your phone").not().isEmpty(),
        // check('email', "Please, provide a valid email").isEmail(), No permito cambiar email
        formValidator
    ],
    updateCustomerInfoById);

customerRouter.post('/update-password/:id',
    [
        check('newPassword', "Password is must contains at least 8 characters").isLength({ min: 8 }),
        formValidator
    ]
    , updatePasswordByUser);

export default customerRouter;