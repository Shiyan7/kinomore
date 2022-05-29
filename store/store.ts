import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { kinopoiskAPI } from "../services/KinopoiskService";

export const makeStore = () =>
    configureStore({
        reducer: {
            [kinopoiskAPI.reducerPath]: kinopoiskAPI.reducer
        },
        middleware: getDefaultMiddleware => getDefaultMiddleware().concat(kinopoiskAPI.middleware) 
    });

export type AppStore = ReturnType<typeof makeStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>

export const wrapper = createWrapper<AppStore>(makeStore, {debug: false})