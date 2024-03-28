import flordLisApi from "../../apis/flordLisApi";
import { onChecking, onClearErrorMessage, onLogin, onLogout } from "../slices/authSlice";
import { onRemoveAllProductsFromCart } from "../slices/cartSlice";
import { onAdminLogout } from "../slices/flordLisSlice";
import { FlordLisDispatch } from '../store';
import { adminLoginThunk } from "./flordLisThunks";

export const loginThunk = (userId: number) => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onChecking());
        dispatch(onLogin(userId));
    }
}

export const logoutThunk = (errorMessage: string) => {

    return (dispatch: FlordLisDispatch) => {

        sessionStorage.clear();
        dispatch(onLogout(errorMessage));
        setTimeout(() => {
            dispatch(onClearErrorMessage());
        }, 10);
        dispatch(onRemoveAllProductsFromCart());
    }
}

export const checkAuthTokenThunk = () => {

    return async (dispatch: FlordLisDispatch) => {

        const token = sessionStorage.getItem('token');

        if (token != null) {

            try {

                const {data} = await flordLisApi.get('/renew');
                
                if (data.ok) {

                    const admin = sessionStorage.getItem('admin');

                    if (admin != null) {

                        if (admin === 'CRUD') {

                            dispatch(adminLoginThunk('carlos@carlos.com'));
                        }
                        else {
                            // TODO:
                        }
                    }

                    sessionStorage.setItem('token', data.token);
                    sessionStorage.setItem('token-init-date', new Date().getTime().toString());

                    dispatch(loginThunk(data.id))
                }
                
            } catch (error) {

                sessionStorage.clear();
                dispatch(onAdminLogout(''));
                dispatch(onLogout(''));
            }
        }
        else {

            dispatch(onLogout(''));
        }
    }
}