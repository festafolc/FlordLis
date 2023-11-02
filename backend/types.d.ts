import { RowDataPacket } from "mysql2/promise";
import { ECategories } from "./src/enums/ECategory";

export interface CustomerBasicInfo extends RowDataPacket {

    id: number;
    isDeleted: boolean;
    createdAt: string;
    updatedAt?: string;
    lastLogin: string;
}

export interface CustomerFullInfo extends RowDataPacket {

    basicInfo: CustomerBasicInfo;
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    country: string;
    city: string;
    postal_code: string;
    address: string
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