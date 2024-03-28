import { createSlice } from '@reduxjs/toolkit';

export interface Cart {

    productsToBuy: any[];
    totalPrice: number
}

const initialState: Cart = {

    productsToBuy: [],
    totalPrice: 0
}

export const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {

        onAddProductToCart: (state, action) => {

            const product = action.payload;

            const existProduct = state.productsToBuy.find((p: any) => p.id === product.id);

            if (!existProduct) {

                state.productsToBuy = [...state.productsToBuy, product];

                sessionStorage.setItem('cart', JSON.stringify(state.productsToBuy));

                state.totalPrice = state.productsToBuy.reduce((accumulator, product) => Number(accumulator) + Number(product.price), 0);
            }
        },

        onRemoveProductFromCart: (state, action) => {

            state.productsToBuy = state.productsToBuy.filter(product => action.payload.id !== product.id);
            sessionStorage.setItem('cart', JSON.stringify(state.productsToBuy));

            state.totalPrice = state.productsToBuy.reduce((accumulator, product) => Number(accumulator) + Number(product.price), 0);
        },

        onRemoveAllProductsFromCart: (state) => {

            state.productsToBuy = [];
            sessionStorage.setItem('cart', JSON.stringify(state.productsToBuy));

            state.totalPrice = 0;
        },

        onRefreshAllProductsInCart: (state) => {

            const productsInCart = sessionStorage.getItem('cart');

            if (productsInCart != null) {

                state.productsToBuy = JSON.parse(productsInCart);
                state.totalPrice = state.productsToBuy.reduce((accumulator, product) => Number(accumulator) + Number(product.price), 0);
            }
        }
    }
});

export const { onAddProductToCart, onRemoveProductFromCart, onRemoveAllProductsFromCart, onRefreshAllProductsInCart } = cartSlice.actions;