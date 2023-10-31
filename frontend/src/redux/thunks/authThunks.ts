import { onChecking, onLogin } from "../slices/authSlice";
import { FlordLisDispatch } from '../store';

export const loginThunk = (customer: {}) => {

    console.log(customer);
    

    return (dispatch: FlordLisDispatch) => {

        dispatch(onChecking());
        dispatch(onLogin({customer}));
    }
}