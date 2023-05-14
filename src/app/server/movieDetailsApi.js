import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = "0561cf548ca91eafbf170ffa2911a740";

const baseUrl = ` https://api.themoviedb.org/3`;

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTYxY2Y1NDhjYTkxZWFmYmYxNzBmZmEyOTExYTc0MCIsInN1YiI6IjY0NWJmYjI4M2ZlMTYwMDE3MjI1ZTljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kt90ZIHZClzUWQ4_R3eFO6PQHoncu1qckxWrLctsID0"}`,
};

export const movieDetailsApi = createApi({
  reducerPath: "movieDetailsApi",
  baseQuery: fetchBaseQuery({ baseUrl, headers }),
  tagTypes: ["MovieDetails"],
  endpoints: (builder) => ({
    getMovieDetails: builder.query({
      query: (id) => `movie/${id}?api_key=${api_key}&language=en-US&append_to_response=videos,images,credits,reviews`,
      providesTags: ["MovieDetails"],
    }),

    getUpcoming: builder.query({
      query: () => `movie/upcoming?api_key=${api_key}&language=en-US&page=1`,
      providesTags: ["MovieDetails"],
    })
  }),
});

export const {
  useGetMovieDetailsQuery,
  useGetUpcomingQuery
} = movieDetailsApi;
