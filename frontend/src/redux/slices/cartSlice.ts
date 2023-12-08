import { createSlice } from '@reduxjs/toolkit';

export interface Cart {

    productsToBuy: {}[];
}

const initialState: Cart = {

    productsToBuy: [{}]
}

export const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {

        onAddProductToCart: (state, action) => {

            const product = action.payload;

            const existProduct = state.productsToBuy.find((p: any) => p.id === product.id);

            if (!existProduct) {

                if (JSON.stringify(state.productsToBuy[0]) === '{}') {

                    state.productsToBuy = [product];
                }
                else {
                    
                    state.productsToBuy = [...state.productsToBuy, product];
                }


                localStorage.setItem('cart', JSON.stringify(state.productsToBuy));
            }

        },

        onRemoveProductFromCart: (state) => {

            state.productsToBuy = [{}];
            localStorage.setItem('cart', JSON.stringify(state.productsToBuy));
        },

        onRemoveAllProductFromCart: (state) => {

            state.productsToBuy = [{}];
            localStorage.setItem('cart', JSON.stringify(state.productsToBuy));
        },

        onRefreshAllProductsInCart: (state) => {

            const productsInCart = localStorage.getItem('cart');
            
            if (productsInCart != null) {
                
                state.productsToBuy = JSON.parse(productsInCart);
            }
        }
    }
});

export const { onAddProductToCart, onRemoveProductFromCart, onRemoveAllProductFromCart, onRefreshAllProductsInCart } = cartSlice.actions;