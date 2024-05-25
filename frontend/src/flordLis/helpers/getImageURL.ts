export const getImageURL = (category: string, product: string, imageName: string) => {

    return new URL(`../../assets/images/${category}/${product}/${imageName}.jpeg`, import.meta.url).href

}