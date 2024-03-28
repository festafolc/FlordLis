import { Slice, createSlice } from '@reduxjs/toolkit';

export interface FlordLisState {

    CRUD: boolean;
    Read: boolean;
}

const initialState: FlordLisState = {

    CRUD: false,
    Read: false,
}

export const flordLisSlice: Slice = createSlice({

    name: 'flordLis',
    initialState,
    reducers: {
        
        onAdminLogin: ( state, action ) => {

            const email = action.payload;

            if (email === 'carlos@carlos.com') {

                state.CRUD = true;
            }
            else {

                state.Read = true;
            }

        },

        onAdminLogout: ( state ) => {

            state.CRUD = false;
            state.Read = false;
        },
    }
});

export const { onAdminLogin, onAdminLogout } = flordLisSlice.actions;