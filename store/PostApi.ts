import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Створення API
export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }), // базовий URL
  endpoints: (builder) => ({
    fetchAllPosts: builder.query<any[], void>({
      query: () => "/posts",
    }),
    fetchPostsBySearch: builder.query<any[], string>({
      query: (search) => `/posts?search=${search}`,
    }),
  }),
});

export const { useFetchAllPostsQuery, useFetchPostsBySearchQuery } = postsApi;
