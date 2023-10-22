import { flordLisCategories } from '../data/categories';

export const getCategoryByName = (name: string | undefined) => {

    return flordLisCategories.find(category => category.name === name);
}