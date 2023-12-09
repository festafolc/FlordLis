import { onAddProductToCart, onRefreshAllProductsInCart, onRemoveAllProductFromCart, onRemoveProductFromCart } from '../slices/cartSlice';
import { FlordLisDispatch } from '../store';

export const addProductsToCartThunk = (product: {}) => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onAddProductToCart(product));
    }
}

export const removeProductFromCartThunk = (product: {}) => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onRemoveProductFromCart(product));
    }
}

export const removeAllProductsFromCartThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onRemoveAllProductFromCart());
    }
}

export const refreshAllProductsInCartThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onRefreshAllProductsInCart());
    }
}