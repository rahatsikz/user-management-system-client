import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://user-management-system-server-psi.vercel.app/api/v1",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    singleUser: builder.query({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const { useGetUsersQuery, useSingleUserQuery } = api;
