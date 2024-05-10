import { createSlice } from '@reduxjs/toolkit';

export interface CustomerState {

    askingToUpdateCustomer: boolean;
    updateCustomer: boolean;
    operationSuccess: boolean;
    checkingPassword: boolean;
    changingPassword: boolean;
    updateCustomerPhone: boolean;
}

const initialState: CustomerState = {

    askingToUpdateCustomer: false,
    updateCustomer: false,
    operationSuccess: false,
    checkingPassword: false,
    changingPassword: false,
    updateCustomerPhone: false
}

export const customerSlice = createSlice({

    name: 'customer',
    initialState,
    reducers: {

        onAskingToUpdateCustomer: (state) => {
            
            state.askingToUpdateCustomer = true;
        },

        onUpdateCustomer: (state) => {

            state.updateCustomer = true;
        },

        onOperationSuccessCustomer: (state) => {

            state.operationSuccess = true;
            state.askingToUpdateCustomer = false;
            state.updateCustomer = false;
        },

        onResetAllButOperationSuccess: (state) => {

            state.askingToUpdateCustomer = false;
            state.updateCustomer = false;
            state.operationSuccess = true;
            state.checkingPassword = false;
            state.changingPassword = false;
            state.updateCustomerPhone = false;
        },




        onUpdatePhoneError: (state) => {

            state.updateCustomerPhone = true;
        },

        onCustomerInformationWasUpdatedOrNot: (state) => {

            state.askingToUpdateCustomer = false;
            state.updateCustomerPhone = false;
        },

        onChangePassword: (state) => {

            state.checkingPassword = true;
        },

        onChangingPasswordWasUpdated: (state) => {

            state.changingPassword = true;
        },

        onChangePasswordWasUpdated: (state) => {

            state.checkingPassword = false;
        },

        onChangingPasswordWasUpdatedOrFailed: (state) => {

            state.checkingPassword = false;
            state.changingPassword = false;
        },

        onResetCustomerSlice: (state) => {

            state.askingToUpdateCustomer = false;
            state.updateCustomer = false;
            state.operationSuccess = false;
            state.checkingPassword = false;
            state.changingPassword = false;
            state.updateCustomerPhone = false;
        }
    }
});

export const { onAskingToUpdateCustomer,
               onUpdateCustomer,
               onResetAllButOperationSuccess,
               onOperationSuccessCustomer,
               onUpdatePhoneError,
               onCustomerInformationWasUpdatedOrNot,
               onChangingPasswordWasUpdated,
               onChangingPasswordWasUpdatedOrFailed,
               onChangePassword,
               onChangePasswordWasUpdated,
               onResetCustomerSlice } = customerSlice.actions;