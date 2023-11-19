import { onChangePassword, onChangePasswordWasUpdated, onCustomerInformationWasUpdatedOrNot, onUpdateCustomerInformation } from "../slices/customerSlice";
import { FlordLisDispatch } from '../store';


export const updateCustomerThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onUpdateCustomerInformation());
    }
}

export const updateCustomerFinishedThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onCustomerInformationWasUpdatedOrNot());
    }
}

export const changePasswordThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onChangePassword());
    }
}

export const changePasswordFinishedThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onChangePasswordWasUpdated());
    }
}