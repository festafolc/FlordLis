import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { FlordLisDispatch, RootState } from '../redux/store';

// export const useFlordLisStore = () => {
//     const { isLogged} = useSelector<RootState, JSON>((state) => state.flordLis);
// }

export const useFlordLisDispatch: () => FlordLisDispatch = useDispatch;
export const useFlordLisSelector: TypedUseSelectorHook<RootState> = useSelector;