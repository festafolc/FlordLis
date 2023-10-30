import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import dbConnection from '../database/config';
import { Customer } from '../interfaces/Customer';
import { createJWT } from '../helpers/jwt';
import { ResultSetHeader } from 'mysql2';

export const createCustomer = async (req: Request, res: Response): Promise<Response> => {

    const { email, password } = req.body;

    try {

        const connection = await dbConnection();
        const result = await connection.query<Customer[]>(`SELECT * FROM Customers WHERE email = "${email}";`);
        const customer: Customer = result[0][0];

        if (customer == null) {

            const salt = bcrypt.genSaltSync(15);
            const encrypted = bcrypt.hashSync(password, salt);

            const newCustomer = await connection.query<ResultSetHeader>(`INSERT INTO Customers (email, password, isDeleted)
                                                                         VALUES ("${email}", "${encrypted}", ${false});`);

            const id = newCustomer[0].insertId;

            if (id) {

                const token = await createJWT(id.toString());

                return res.status(201).json({
                    ok: true,
                    msg: 'register',
                    email,
                    encrypted,
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
        const result = await connection.query<Customer[]>(`SELECT * FROM Customers WHERE email = "${email}";`);

        const customer: Customer = result[0][0];

        if (customer != null) {

            const validPassword: boolean = await bcrypt.compare(password, customer.password);

            if (validPassword) {

                const now = new Date(Date.now() + 1 * (60 * 60 * 1000)).toISOString().slice(0, 19).replace('T', ' ');
                await connection.query(`UPDATE Customers SET lastLogin="${now}" WHERE email = "${email}";`);

                const token = await createJWT(customer.id.toString());

                return res.status(200).json({
                    ok: true,
                    msg: 'login',
                    customer,
                    token
                });
            }
            else {

                return res.status(400).json({
                    ok: false,
                    msg: 'Please, provide a valid email and password',
                });
            }

        }
        else {

            return res.status(400).json({
                ok: false,
                msg: 'Please, provide a valid email and password',
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

    const {id}: {id: string} = req.body;

    const token = await createJWT(id);

    res.json({
        ok: true,
        msg: 'renew',
        token,
        id
    })
}
