import { Router } from 'express';
import { check } from 'express-validator'
import { formValidator } from '../middlewares/formValidator';
import { checkPassword, createCustomer, loginCustomer, renewToken } from '../controllers/auth';
import { jwtValidator } from '../middlewares/jwtValidator';

/*
    Auth routes
    host + /flordlis/auth
*/

const authRouter = Router();

// Login
authRouter.post(
    '/login',
    [
        check('email', "Please, provide a valid email").isEmail(),
        check('password', "Password is incorrect").isLength({ min: 8 }),

        formValidator
    ], loginCustomer);

// Register
authRouter.post(
    '/register',
    [
        check('name', "Please, provide your name").not().isEmpty(),
        check('surname', "Please, your surname").not().isEmpty(),
        check('fullPhoneNumber', "Please, provide your phone").not().isEmpty(),
        check('email', "Please, provide a valid email").isEmail(),
        check('password', "Please, provide a password with minimum 8 characteres").isLength({ min: 8 }),
        formValidator
    ]
    , createCustomer);

// Check password
authRouter.post(
    '/check-password/:id',
    [
        check('password', "Please, provide the password").notEmpty(),
        formValidator
    ]
    , checkPassword);

// Renew token
authRouter.get(
    '/renew',
    [
        jwtValidator
    ],
    renewToken);


export default authRouter;