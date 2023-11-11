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

    id: number;
    categoryName: ECategories;
    name: string;
    description: string;
    image: string;
    price: string;
    numberReviews: number;
    stock: number;
    createdAt: string;
    updatedAt?: string;
}