import { Request, Response } from "express";
import dbConnection from "../database/config";
import { Customer } from "../../types";
import bcrypt from 'bcryptjs';


export const getCustomerFullInfoById = async (req: Request, res: Response) => {

    const { id } = req.params;

    try {

        const connection = await dbConnection();

        const result = await connection?.query<Customer[]>(`SELECT * FROM Customers WHERE id = ${id};`);

        if (result != null) {

            const customer: Customer = result[0][0];

            if (customer != null) {

                const { name, surname, phone, email, country, city, address, postal_code } = customer;

                res.status(200).json({

                    ok: true,
                    msg: 'Get Customer by Id',
                    name,
                    surname,
                    phone,
                    email,
                    country,
                    city,
                    address,
                    postal_code
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

        const result = await connection?.query(`UPDATE Customers
                                                SET name="${name}", surname="${surname}", phone="${phone}",
                                                    country="${country}", city="${city}", postal_code="${postalCode}",
                                                    address="${address}", updatedAt="${updatedAt}"
                                                WHERE id = "${id}";`);

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

export const updatePasswordByUser = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { newPassword } = req.body;

    try {

        const salt = bcrypt.genSaltSync(15);
        const encrypted = bcrypt.hashSync(newPassword, salt);

        const connection = await dbConnection();

        const updatedAt = new Date(Date.now() + 1 * (60 * 60 * 1000)).toISOString().slice(0, 19).replace('T', ' ');

        const result = await connection?.query(`UPDATE Customers
                                                SET password="${encrypted}", updatedAt="${updatedAt}"
                                                WHERE id = "${id}";`);

        if (result != null) {

            res.status(200).json({

                ok: true,
                msg: 'The password has been updated.',
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