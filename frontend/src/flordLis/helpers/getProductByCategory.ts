import {products} from '../data/products';

export const getProductByCategory = (category: string) => {

    const validCategory: string[] = ['Marvel Comics', 'DC Comics'];

    if (validCategory.includes(category)){
        return products.filter(product => product.category === category);
    }
    else {
        throw new Error('No existe la categoría');
    }
}