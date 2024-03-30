import { Slice, createSlice } from '@reduxjs/toolkit';

export interface FlordLisState {

    AdminAccess: boolean;
    CRUD: boolean;
    Read: boolean;
}

const initialState: FlordLisState = {

    AdminAccess: false,
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

        onAdminAccess: ( state, action ) => {

            if (action.payload === "admin@admin.com") {

                state.AdminAccess = true;
            }
            else {
                state.AdminAccess = false;
            }
        },

        onAdminLogout: ( state ) => {

            state.AdminAccess = false;
            state.CRUD = false;
            state.Read = false;
        },
    }
});

export const { onAdminLogin, onAdminAccess, onAdminLogout } = flordLisSlice.actions;