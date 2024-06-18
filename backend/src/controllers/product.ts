import { Request, Response } from "express";
import dbConnection from "../database/config";
import { Product } from "../../types";


export const getAllProducts = async (_req: Request, res: Response) => {

    try {

        const connection = await dbConnection()

        const result = await connection?.query<any>('SELECT * FROM Products;')

        if (result != null) {

            return res.status(200).json({
                ok: true,
                msg: 'getAllProducts',
                result
            });
        }
        else {

            return res.status(400).json({
                ok: false,
                msg: 'Could not retrieve products information.',
            });
        }
        
    } catch (error) {
        
        return res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.',
            error
        });
    }
}

export const getAllProductsByCategoryId = async (req: Request, res: Response) => {

    const { categoryId } = req.params;

    try {
        
        const connection = await dbConnection()

        const result = await connection?.query<Product[]>(`SELECT * FROM Products WHERE category_id = ${categoryId};`)

        if (result != null) {

            const productsByCategoryId: Product[] = result[0];
            
            if (productsByCategoryId != null) {
                
                return res.status(200).json({
                    ok: true,
                    msg: 'getAllProductsByCategory',
                    productsByCategoryId
                })
            }
            else {

                return res.status(400).json({
                    ok: false,
                    msg: 'Could not get products by category id.',
                });
            }
        }
        else {

            return res.status(400).json({
                ok: false,
                msg: 'Could not get products by category id.',
            });
        }

    } catch (error) {
        
        return res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.',
            error
        });
    }
}

export const getAllProductsByMultipleCategoryId = async (req: Request, res: Response) => {

    const categoryIds = req.params.categoryIds.split(', ');

    try {
        
        const connection = await dbConnection()

        const result = await connection?.query<Product[]>(`SELECT * FROM Products WHERE category_id IN (${categoryIds});`);

        if (result != null) {

            const productsByMultipleCategoryIds: Product[] = result[0];
            
            if (productsByMultipleCategoryIds != null) {
                
                return res.status(200).json({
                    ok: true,
                    msg: 'getAllProductsByMultipleCategoryIds',
                    productsByMultipleCategoryIds
                })
            }
            else {

                return res.status(400).json({
                    ok: false,
                    msg: 'Could not get products by multiple category ids.',
                });
            }
        }
        else {

            return res.status(400).json({
                ok: false,
                msg: 'ould not get products by multiple category ids.',
            });
        }

    } catch (error) {
        
        return res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.',
            error
        });
    }
}

export const getProductById = async (req: Request, res: Response) => {

    const { id } = req.params

    try {
        
        const connection = await dbConnection()

        const result = await connection?.query<Product[]>(`SELECT * FROM Products WHERE id = ${id};`)

        if (result != null) {

            const product: Product = result[0][0];

            if (product != null) {
                
                return res.status(200).json({
                    ok: true,
                    msg: 'getProductById',
                    product
                });
            }
            else {

                return res.status(400).json({
                    ok: false,
                    msg: 'Could not get product by id.',
                });
            }
        }
        else {

            return res.status(400).json({
                ok: false,
                msg: 'Could not get product by id.',
            });
        }

    } catch (error) {
        
        return res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.',
            error
        });
    }
}

export const getAllProductsByLinkName = async (req: Request, res: Response) => {

    const { linkName } = req.params

    try {
        
        const connection = await dbConnection()

        const result = await connection?.query<Product[]>(`SELECT * FROM Products WHERE linkName = "${linkName}";`)

        if (result != null) {

            const productsByLinkName: Product[] = result[0];
            
            if (productsByLinkName != null) {
                
                return res.status(200).json({
                    ok: true,
                    msg: 'getAllProductByLinkName',
                    productsByLinkName
                })
            }
            else {

                return res.status(400).json({
                    ok: false,
                    msg: 'Could not get products by link name.',
                });
            }
        }
        else {

            return res.status(400).json({
                ok: false,
                msg: 'Could not get products by link name.',
            });
        }

    } catch (error) {
        
        return res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.',
            error
        });
    }
}