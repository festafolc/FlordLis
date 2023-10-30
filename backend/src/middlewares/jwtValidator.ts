import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const jwtValidator = (req: Request, res: Response, next: NextFunction) => {

    const token = req.header('x-token');

    if (token && process.env.SECRET_JWT_SEED != undefined) {

        try {

            const {id} = jwt.verify(token, process.env.SECRET_JWT_SEED) as {id: string, iat: number, exp: number};

            req.body = {id};

            return next();

        } catch (error) {

            return res.status(401).json({
                ok: false,
                msg: 'Token is not valid.'
            });
        }

    }
    else {

        return res.status(401).json({
            ok: false,
            msg: 'There is not token.'
        });
    }
}