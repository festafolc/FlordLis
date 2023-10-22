import { products } from "../data/products"

export const getProductById = (id: string | undefined) => {


    return products.find(product => product.id === id);
}