import { configureStore } from '@reduxjs/toolkit';
import { flordLisSlice } from './slices/flordLisSlice';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';

export const store: ToolkitStore = configureStore({

    reducer: {
        flordLis: flordLisSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type FlordLisDispatch = typeof store.dispatch;