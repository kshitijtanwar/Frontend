import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: (params) => ({
                url: "/users",
                params: {
                    page: params?.page,
                },
            }),
        }),
    }),
});

export const { useGetUsersQuery } = userApi;
