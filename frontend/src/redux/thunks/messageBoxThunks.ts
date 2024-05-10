import { onCancelMessageBox, onCloseMessageBox, onOkMessageBox, onResetMessageBoxSlice } from '../slices/messageBoxSlice';
import { FlordLisDispatch } from '../store';


export const okMessageBoxThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onOkMessageBox());
    }
}

export const cancelMessageBoxThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onCancelMessageBox());
    }
}

export const closeMessageBoxThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onCloseMessageBox());
    }
}

export const resetMessageBoxThunk = () => {

    return (dispatch: FlordLisDispatch) => {

        dispatch(onResetMessageBoxSlice());
    }
}