import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FlordLisDispatch, RootState } from '../redux/store';

type DispatchFunc = () => FlordLisDispatch
export const useFlordLisDispatch: DispatchFunc = useDispatch;
export const useFlordLisSelector: TypedUseSelectorHook<RootState> = useSelector;