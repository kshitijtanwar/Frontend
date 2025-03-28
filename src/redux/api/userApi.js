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
        editUser: builder.mutation({
            query: (user) => ({
                url: `/users/${user.id}`,
                method: "PUT",
                body: user,
            }),
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const { useGetUsersQuery, useEditUserMutation, useDeleteUserMutation } =
    userApi;
