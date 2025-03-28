import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setIsAuthenticated, setToken } from "../features/userSlice";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in/api" }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "/login",
                method: "POST",
                body,
            }),
            async onQueryStarted(args, { queryFulfilled, dispatch }) {
                try {
                    const user = await queryFulfilled;
                    dispatch(setToken(user.data.token));
                    dispatch(setIsAuthenticated(true));
                } catch (error) {
                    console.log(error);
                }
            },
        }),
    }),
});

export const { useLoginMutation } = authApi;
