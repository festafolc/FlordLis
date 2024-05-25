import { RowDataPacket } from "mysql2/promise";
import { ECategories } from "./src/enums/ECategory";

export interface Customer extends RowDataPacket {

    id: number;
    name: string;
    surname: string;
    phone: string;
    email: string;
    password: string;
    country: string;
    city: string;
    address: string
    postal_code: string;
    activeNotifications: boolean;
    isDeleted: boolean;
    lastLogin: string;
    createdAt: string;
    updatedAt?: string;
}

export interface Product extends RowDataPacket {

    id: number
    category_id: number
    name: string
    description: string
    linkName: string
    color: string
    price: number
    stock: number
    numberReviews: number
    createdAt: string
    updatedAt: any
}

export interface Admin extends RowDataPacket {

    id: number;
    adminType: number;
    phone?: string;
    email: string;
    password: string;
    lastLogin: string;
    createdAt: string;
    updatedAt?: string;
}