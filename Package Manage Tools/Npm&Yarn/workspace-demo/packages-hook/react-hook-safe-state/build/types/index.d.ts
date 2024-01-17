import { Dispatch, SetStateAction } from 'react';
export default function useSafeState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
