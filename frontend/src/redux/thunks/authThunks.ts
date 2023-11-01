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

        dispatch(onLogout(errorMessage));
        setTimeout(() => {
            dispatch(onClearErrorMessage());
        }, 10);
    }
}