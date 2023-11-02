import { Request, Response } from "express";
import dbConnection from "../database/config";
import { CustomerFullInfo } from "../../types";


export const getCustomerFullInfoById = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const connection = await dbConnection();

        const result = await connection?.query<CustomerFullInfo[]>(`SELECT * FROM Customers_Information WHERE user_id = ${id};`);

        if (result != null) {

            const customer: CustomerFullInfo = result[0][0];

            if (customer != null) {

                const {name, surname, phone, country, city, postal_code, address} = customer;
                
                res.status(200).json({

                    ok: true,
                    msg: 'Get Customer by Id',
                    name,
                    surname,
                    phone,
                    country,
                    city,
                    postal_code,
                    address
                });
            }
        }
        else {

            res.status(400).json({

                ok: false,
                msg: 'Could not retrieve user information.',
            });   
        }
    } catch (error) {

        res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.',
        });
    }

}

export const updateCustomerInfoById = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { name, surname, phone, country, city, postalCode, address } = req.body;

    try {

        const connection = await dbConnection();

        const updatedAt = new Date(Date.now() + 1 * (60 * 60 * 1000)).toISOString().slice(0, 19).replace('T', ' ');

        const result = await connection?.query(`UPDATE Customers_Information
                                                SET name="${name}", surname="${surname}", phone="${phone}",
                                                    country="${country}", city="${city}", postal_code="${postalCode}",
                                                    address="${address}", updatedAt="${updatedAt}"
                                                WHERE user_id = "${id}";`);

        if (result != null) {

            res.status(200).json({

                ok: true,
                msg: 'Customer information has been updated.',
                updatedAt
            });
        }

    } catch (error) {

        res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.'
        });
    }
}