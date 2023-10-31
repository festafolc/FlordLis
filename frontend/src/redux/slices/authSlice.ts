import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {

    status: string;
    user: {};
    errorMessage: undefined
}

const initialState: AuthState = {
    status: 'checking',
    user: {},
    errorMessage: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined;
        },
        onLogin: (state, action: PayloadAction<AuthState["user"]>) => {
            state.status = 'authenticated';
            state.user = action.payload;
            state.errorMessage = undefined;
        }
    }
});

export const { onChecking, onLogin } = authSlice.actions;