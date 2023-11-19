import { createSlice } from '@reduxjs/toolkit';

export interface CustomerState {

    updateCustomer: boolean;
    checkingPassword: boolean;
    changingPassword: boolean;
    updateCustomerPhone: boolean;
}

const initialState: CustomerState = {

    updateCustomer: false,
    checkingPassword: false,
    changingPassword: false,
    updateCustomerPhone: false
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        onUpdateCustomerInformation: (state) => {

            state.updateCustomer = true;
        },

        onUpdatePhoneError: (state) => {

            state.updateCustomerPhone = true;
        },

        onCustomerInformationWasUpdatedOrNot: (state) => {

            state.updateCustomer = false;
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
    }
});

export const { onUpdateCustomerInformation,
               onUpdatePhoneError,
               onCustomerInformationWasUpdatedOrNot,
               onChangingPasswordWasUpdated,
               onChangingPasswordWasUpdatedOrFailed,
               onChangePassword,
               onChangePasswordWasUpdated } = customerSlice.actions;