import { Router } from 'express';
import { check } from 'express-validator'
import { formValidator } from '../middlewares/formValidator';
import { createCustomer, loginCustomer, renewToken } from '../controllers/auth';
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
        check('email', "Please, provide a valid email").isEmail(),
        check('password', "Password is incorrect").isLength({ min: 8 }),
        formValidator
    ]
    , createCustomer);

// Renew token
authRouter.get(
    '/renew',
    [
        jwtValidator
    ],
    renewToken);


export default authRouter;