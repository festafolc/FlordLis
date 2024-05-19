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
        });
    }
}

// TODO getProductByName