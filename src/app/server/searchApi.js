import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `https://api.themoviedb.org/3/search`;

const api_key = "0561cf548ca91eafbf170ffa2911a740";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTYxY2Y1NDhjYTkxZWFmYmYxNzBmZmEyOTExYTc0MCIsInN1YiI6IjY0NWJmYjI4M2ZlMTYwMDE3MjI1ZTljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kt90ZIHZClzUWQ4_R3eFO6PQHoncu1qckxWrLctsID0"}`,
};

export const searchApi = createApi({
  reducerPath: "searchApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["Search"],
  endpoints: (builder) => ({
    getSearch: builder.query({
      query: (movie_title) =>
        `/movie?api_key=${api_key}&language=en-US&query=${movie_title}`,
      providesTags: ["Search"],
    }),
  }),
});

export const { useGetSearchQuery } = searchApi;
