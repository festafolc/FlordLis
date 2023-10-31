import { configureStore } from '@reduxjs/toolkit';
import { flordLisSlice } from './slices/flordLisSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { authSlice } from './slices/authSlice';
import { Dispatch } from 'react';

export const store: ToolkitStore = configureStore({

    reducer: {
        auth: authSlice.reducer,
        flordLis: flordLisSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type FlordLisDispatch = typeof store.dispatch | Dispatch<any>;