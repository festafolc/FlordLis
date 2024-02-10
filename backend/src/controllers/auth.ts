import { Request, Response } from 'express';
import { ResultSetHeader } from 'mysql2';
import bcrypt from 'bcryptjs';
import dbConnection from '../database/config';
import { createJWT } from '../helpers/jwt';
import { Customer } from '../../types';

export const createCustomer = async (req: Request, res: Response): Promise<Response> => {

    const { name, surname, phone, email, password, activeNotifications } = req.body;

    try {

        const connection = await dbConnection();
        const result = await connection?.query<Customer[]>(`SELECT * FROM Customers WHERE email = "${email}";`);

        if (result != null) {

            const customer: Customer = result[0][0];

            if (customer == null) {

                const salt = bcrypt.genSaltSync(15);
                const encrypted = bcrypt.hashSync(password, salt);

                const newCustomer = await connection?.query<ResultSetHeader>(`INSERT INTO Customers (name, surname, phone, email, password, activeNotifications, isDeleted)
                                                                              VALUES ("${name}", "${surname}", "${phone}", "${email}", "${encrypted}", ${activeNotifications}, ${false});`);

                if (newCustomer != null) {

                    const id = newCustomer[0].insertId;

                    const token = await createJWT(id.toString());

                    return res.status(201).json({
                        ok: true,
                        msg: 'register',
                        id,
                        token
                    });
                }
                else {

                    return res.status(500).json({
                        ok: false,
                        msg: 'An expected error occurred.'
                    });
                }

            }
            else {

                return res.status(400).json({
                    ok: false,
                    msg: 'Try with another email'
                });
            }
        }
        else {

            return res.status(500).json({
                ok: false,
                msg: 'An expected error occurred.'
            });
        }
    }
    catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'An expected error occurred.'
        });
    }
}

export const loginCustomer = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;

    try {
        // `SELECT sub.id, sub.email, sub.password, sub.isDeleted, date_format(sub.createdAt, '%b %d %Y')
        // FROM (SELECT id, email, password, isDeleted, createdAt FROM Customers WHERE email = "${email}") as sub;`
        const connection = await dbConnection();
        const result = await connection?.query<Customer[]>(`SELECT * FROM Customers WHERE email = "${email}";`);

        if (result != null) {

            const customer: Customer = result[0][0];

            if (customer != null) {

                const validPassword: boolean = await bcrypt.compare(password, customer.password);

                if (validPassword) {

                    const now = new Date(Date.now() + 1 * (60 * 60 * 1000)).toISOString().slice(0, 19).replace('T', ' ');
                    await connection?.query(`UPDATE Customers SET lastLogin="${now}" WHERE email = "${email}";`);

                    const id = customer.id;

                    const token = await createJWT(id.toString());

                    return res.status(200).json({

                        ok: true,
                        msg: 'login',
                        id,
                        token
                    });
                }
                else {

                    return res.status(400).json({
                        ok: false,
                        msg: 'Credentials are not valid.',
                    });
                }

            }
            else {

                return res.status(400).json({
                    ok: false,
                    msg: 'Credentials are not valid.',
                });
            }
        }
        else {

            return res.status(500).json({
                ok: false,
                msg: 'An expected error occurred.'
            });
        }
    }
    catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'An expected error occurred.'
        });
    }

}


export const checkPassword = async (req: Request, res: Response): Promise<Response> => {

    const { id } = req.params;
    const { password } = req.body;

    try {
        
        const connection = await dbConnection();
        const result = await connection?.query<ResultSetHeader[]>(`SELECT password FROM Customers WHERE id = "${id}";`);
        
        if (result != null) {

            const currentPassword: string = Object.values(result[0][0])[0];

            const validPassword: boolean = await bcrypt.compare(password, currentPassword);

            if (validPassword) {

                return res.status(200).json({
                    ok: true,
                    msg: 'Right',
                    valid: validPassword
                });
            }
            else {

                return res.status(200).json({
                    ok: false,
                    msg: 'It is not valid',
                    valid: validPassword
                });
            }
        }
        else {

            return res.status(400).json({
                ok: false,
                msg: 'Bad request.'
            });
        }
    }
    catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'An expected error occurred.'
        });
    }

}

export const renewToken = async (req: Request, res: Response) => {

    const { id }: { id: string } = req.body;

    const token = await createJWT(id);

    res.json({
        ok: true,
        msg: 'renew',
        token,
        id
    })
}

