import {Router} from 'express';


/*
    Auth routes
    host + /flordlis/auth
*/

const authRouter = Router();

authRouter.get('/', (_req, res) => {

    res.json({
        ok: true
    })
})


export default authRouter;