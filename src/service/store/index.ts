import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

export const createStore = () =>
  configureStore({
    reducer: {
      // validReducer
    },
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export function useAppSelector<T>(fn: (state: RootState) => T): T {
  return useSelector<RootState, T>(fn);
}
