import { createSlice } from '@reduxjs/toolkit';

export interface CustomerState {

    updateCustomer: boolean;
    checkingPassword: boolean;
    changingPassword: boolean;
}

const initialState: CustomerState = {

    updateCustomer: false,
    checkingPassword: false,
    changingPassword: false
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        onUpdateCustomerInformation: ( state ) => {

            state.updateCustomer = true;
        },

        onCustomerInformationWasUpdated: ( state ) => {

            state.updateCustomer = false;
        },

        onChangePassword: ( state ) => {

            state.checkingPassword = true;
        },

        onChangingPasswordWasUpdated: ( state ) => {

            state.changingPassword = true;
        },

        onChangePasswordWasUpdated: ( state ) => {

            state.checkingPassword = false;
        },

        onChangingPasswordWasUpdatedOrFailed: ( state ) => {

            state.checkingPassword = false;
            state.changingPassword = false;
        },
    }
});

export const { onUpdateCustomerInformation,
               onCustomerInformationWasUpdated,
               onChangingPasswordWasUpdated,
               onChangingPasswordWasUpdatedOrFailed,
               onChangePassword,
               onChangePasswordWasUpdated } = customerSlice.actions;