import { onChangePassword, onChangePasswordWasUpdated, onResetCustomerSlice, onAskingToUpdateCustomer, onUpdateCustomer, onOperationSuccessCustomer, onResetAllButOperationSuccess } from "../slices/customerSlice";
import { FlordLisDispatch } from '../store';


export const askingToUpdateCustomerThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onAskingToUpdateCustomer());
    }
}

export const updateCustomerThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onUpdateCustomer());
    }
}

export const operationSuccessCustomerThunk = () => {

    return (dispatch: FlordLisDispatch) => {
        
        dispatch(onOperationSuccessCustomer());
    }
}

export const resetAllButOperationSuccessThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onResetAllButOperationSuccess());
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

export const resetCustomerSliceThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onResetCustomerSlice());
    }
}