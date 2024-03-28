import { onAdminLogin, onAdminLogout } from '../slices/flordLisSlice';
import { FlordLisDispatch } from '../store';

export const adminLoginThunk = (email: string) => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onAdminLogin(email));
    }
}

export const adminLogoutThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onAdminLogout(''));
    }
}