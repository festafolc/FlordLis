import { Request, Response } from "express";


export const getAllProducts = (_req: Request, res: Response) => {

    return res.status(200).json({
        ok: true,
        msg: 'getAllProducts'
    });
}

