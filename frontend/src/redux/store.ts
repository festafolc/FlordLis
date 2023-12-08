import { configureStore } from '@reduxjs/toolkit';
import { flordLisSlice } from './slices/flordLisSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { authSlice } from './slices/authSlice';
import { Dispatch } from 'react';
import { customerSlice } from './slices/customerSlice';
import { filterProductsSlice } from './slices/filterProductsSlice';
import { cartSlice } from './slices/cartSlice';

export const store: ToolkitStore = configureStore({
    reducer: {
        auth: authSlice.reducer,
        customer: customerSlice.reducer,
        flordLis: flordLisSlice.reducer,
        filterProducts: filterProductsSlice.reducer,
        cart: cartSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type FlordLisDispatch = typeof store.dispatch | Dispatch<any>;