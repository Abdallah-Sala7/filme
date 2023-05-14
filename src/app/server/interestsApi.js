import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = "0561cf548ca91eafbf170ffa2911a740";
const list_id = 8252780;

const baseUrl = `https://api.themoviedb.org/4/list`;

const interestsGenre = localStorage.getItem("interestsGenre");

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTYxY2Y1NDhjYTkxZWFmYmYxNzBmZmEyOTExYTc0MCIsInN1YiI6IjY0NWJmYjI4M2ZlMTYwMDE3MjI1ZTljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kt90ZIHZClzUWQ4_R3eFO6PQHoncu1qckxWrLctsID0"}`,
};

export const interestsApi = createApi({
  reducerPath: "interestsApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["Interests"],
  endpoints: (builder) => ({
    getAllInterests: builder.query({
      query: () =>
        `/${list_id}?page=1&api_key=${api_key}`,
      providesTags: ["Interests"],
    }),
  }),
});

export const { useGetAllInterestsQuery } = interestsApi;
