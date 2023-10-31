import { Request, Response } from "express";
import { ECategories } from "../enums/ECategory";

export const getAllCategories = (_req: Request, res: Response) => {

    return res.status(200).json({
        ok: true,
        msg: 'getAllCategories'
    });
}

export const getCategoryByName = (req: Request, res: Response) => {

    const {categoryName} = req.params;

    if (categoryName in ECategories) {

        return res.status(200).json({
            ok: true,
            msg: 'getCategoryByName',
            categoryName
        })
    }
    else {

        return res.status(400).json({
            ok: false,
            msg: 'Invalid category name',
        })
        
    }
}

export const getProductByName = (req: Request, res: Response) => {

    const {categoryName} = req.params;
    const {productName} = req.params;

    if (categoryName in ECategories) {

        return res.status(200).json({
            ok: true,
            msg: 'getProductByName',
            categoryName,
            productName
        })
    }
    else {

        return res.status(400).json({
            ok: false,
            msg: 'Invalid category name',
        })
        
    }
}