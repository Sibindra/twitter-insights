import { useDispatch, useSelector } from "react-redux";
(" react-redux");
import type { TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "../store";
("…/store");

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;