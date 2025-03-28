import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/AuthApi";
import userReducer from "./features/userSlice";
import { userApi } from "./api/userApi";

export const store = configureStore({
    reducer: {
        auth: userReducer,
        [authApi.reducerPath]: authApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([authApi.middleware, userApi.middleware]),
});
