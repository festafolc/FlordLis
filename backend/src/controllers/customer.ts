import { Request, Response } from "express";
import dbConnection from "../database/config";
import { Customer } from "../../types";
import bcrypt from 'bcryptjs';
import { ResultSetHeader } from 'mysql2';


export const getCustomerFullInfoById = async (req: Request, res: Response) => {
    
    const { id } = req.params;

    try {

        const connection = await dbConnection();

        const result = await connection?.query<Customer[]>(`SELECT * FROM Customers WHERE id = ${id};`);

        if (result != null) {

            const customer: Customer = result[0][0];

            if (customer != null) {

                const { name, surname, phone, email, country, city, address, postal_code, activeNotifications } = customer;
                
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
                    postal_code,
                    activeNotifications
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
    const { name, surname, fullPhoneNumber, country, city, address, postalCode, activeNotifications } = req.body;

    
    console.log(req.body);
    
    try {

        const connection = await dbConnection();

        const updatedAt = new Date(Date.now() + 1 * (60 * 60 * 1000)).toISOString().slice(0, 19).replace('T', ' ');

        const result = await connection?.query<ResultSetHeader>(`UPDATE Customers
                                                                 SET name="${name}", surname="${surname}", phone="${fullPhoneNumber}",
                                                                     country="${country}", city="${city}", 
                                                                     address="${address}", postal_code="${postalCode}",
                                                                     activeNotifications=${activeNotifications},
                                                                     updatedAt="${updatedAt}"
                                                                 WHERE id = "${id}";`);

        if (result != null) {

            if (result[0].affectedRows > 0) {

                res.status(200).json({

                    ok: true,
                    msg: 'Customer information has been updated.',
                    updatedAt
                });
            }
            else {

                res.status(400).json({

                    ok: false,
                    msg: 'Customer information has not been updated.',
                    updatedAt
                });
            }
        }

    } catch (error) {

        res.status(500).json({

            ok: false,
            msg: 'An expected error occurred.',
            error
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