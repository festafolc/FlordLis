import { createSlice } from '@reduxjs/toolkit';

export interface MessageBoxState {

    ok: boolean;
    cancel: boolean;
    close: boolean;
}

const initialState: MessageBoxState = {

    ok: false,
    cancel: false,
    close: false,
}

export const messageBoxSlice = createSlice({

    name: 'messageBox',
    initialState,
    reducers: {

        onOkMessageBox: (state) => {

            state.ok = true;
            state.cancel = false;
        },

        onCancelMessageBox: (state) => {

            state.ok = false;
            state.cancel = true;
        },

        onCloseMessageBox: (state) => {

            state.ok = false;
            state.cancel = false;
            state.close = true;
        },

        onResetMessageBoxSlice: (state) => {

            state.ok = false;
            state.cancel = false;
            state.close = false;
        }
    }
});

export const { onOkMessageBox,
               onCancelMessageBox,
               onCloseMessageBox,
               onResetMessageBoxSlice } = messageBoxSlice.actions;