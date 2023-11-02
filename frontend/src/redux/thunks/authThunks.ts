import flordLisApi from "../../apis/flordLisApi";
import { onChecking, onClearErrorMessage, onLogin, onLogout } from "../slices/authSlice";
import { FlordLisDispatch } from '../store';

export const loginThunk = (userId: number) => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onChecking());
        dispatch(onLogin(userId));
    }
}

export const logoutThunk = (errorMessage: string) => {

    return (dispatch: FlordLisDispatch) => {

        localStorage.clear();
        dispatch(onLogout(errorMessage));
        setTimeout(() => {
            dispatch(onClearErrorMessage());
        }, 10);
    }
}

export const checkAuthTokenThunk = () => {

    return async (dispatch: FlordLisDispatch) => {

        const token = localStorage.getItem('token');

        if (token != null) {

            try {

                const {data} = await flordLisApi.get('/renew');

                if (data.ok) {

                    localStorage.setItem('token', data.token);
                    localStorage.setItem('token-init-date', new Date().getTime().toString());

                    dispatch(onLogin(data.id))
                }
                
            } catch (error) {

                localStorage.clear();
                dispatch(onLogout(''));
            }
        }
        else {

            dispatch(onLogout(''));
        }
    }
}