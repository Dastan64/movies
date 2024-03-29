import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import { rootReducer } from "../reducers/rootReducer";

export const store = configureStore({
    reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
