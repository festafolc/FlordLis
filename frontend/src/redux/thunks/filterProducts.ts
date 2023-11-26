import { onClearProductList, onGetAllProductList } from '../slices/filterProductsSlice';
import { FlordLisDispatch } from '../store';

export const getAllProductsThunk = (allProducts: {}[]) => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onGetAllProductList(allProducts));
    }
}

export const clearProductsThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onClearProductList());
    }
}