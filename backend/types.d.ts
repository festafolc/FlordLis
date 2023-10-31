import { RowDataPacket } from "mysql2/promise";
import { ECategories } from "./src/enums/ECategory";

export interface Customer extends RowDataPacket {

    id: number;
    email: string;
    password: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt?: string;
    lastLogin: string;
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