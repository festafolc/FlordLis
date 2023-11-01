import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {

    status: string;
    userId?: number;
    errorMessage: string
}

const initialState: AuthState = {
    status: 'checking',
    userId: undefined,
    errorMessage: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        onChecking: (state) => {
            state.status = 'checking';
            state.userId = undefined;
            state.errorMessage = '';
        },
        onLogin: (state, action: PayloadAction<AuthState["userId"]>) => {
            state.status = 'authenticated';
            state.userId = action.payload;
            state.errorMessage = '';
        },
        onLogout: (state, action: PayloadAction<AuthState["errorMessage"]>) => {
            state.status = 'not-authenticated';
            state.userId = undefined,
            state.errorMessage = action.payload;
        },
        onClearErrorMessage: (state) => {
            state.errorMessage = '';
        }

    }
});

export const { onChecking, onLogin, onLogout, onClearErrorMessage } = authSlice.actions;