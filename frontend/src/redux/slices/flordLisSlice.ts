import { Slice, createSlice } from '@reduxjs/toolkit';

interface FlordLisState {

    isLogged: boolean
}

const initialState: FlordLisState = {

    isLogged: false
}

export const flordLisSlice: Slice = createSlice({

    name: 'flordLis',
    initialState,
    reducers: {
        
        actionLogin: ( state ) => {

            state.isLogged = true;
        },

        actionLogout: ( state ) => {

            state.isLogged = false;
        },
    }
});

export const { actionLogin, actionLogout } = flordLisSlice.actions;