import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FilterProducts {

    all_products: {}[];
    filters: {
        category: string[];
        maxPrice: number;
        minPrice: number;
        price: number;
    };
}

const initialState: FilterProducts = {

    all_products: [{}],
    filters: {
        category: ['all'],
        maxPrice: 1000000,
        minPrice: 0,
        price: 0
    }
}

export const filterProductsSlice = createSlice({
    name: 'filterProducts',
    initialState,
    reducers: {
        onGetAllProductList: (state, action: PayloadAction<FilterProducts["all_products"]>) => {

            state.all_products = action.payload;
        },
        onClearProductList: (state) => {

            state.all_products = [{}];
        },
    }
});

export const { onGetAllProductList,
               onClearProductList } = filterProductsSlice.actions;