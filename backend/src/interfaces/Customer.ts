import { RowDataPacket } from "mysql2/promise";

export interface Customer extends RowDataPacket {
    id: number;
    email: string;
    password: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt?: string;
    lastLogin: string;
}