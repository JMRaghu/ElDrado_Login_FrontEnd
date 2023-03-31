import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8100" }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: "users/authenticate",
          method: "post",
          body,
        };
      },
      transformResponse: (response) => {
        const { response: resp, state, user } = response;
        return { response: resp, state: state, user: user };
      },
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
