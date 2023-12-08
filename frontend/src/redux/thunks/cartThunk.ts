import { onAddProductToCart, onRefreshAllProductsInCart, onRemoveAllProductFromCart, onRemoveProductFromCart } from '../slices/cartSlice';
import { FlordLisDispatch } from '../store';

export const addProductsToCartThunk = (product: {}) => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onAddProductToCart(product));
    }
}

export const removeProductFromCartThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onRemoveProductFromCart());
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