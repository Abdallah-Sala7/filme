import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = `https://movie-recommender-mostaql-production.up.railway.app`;

export const forYouApi = createApi({
  reducerPath: "forYouApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["ForYou"],
  endpoints: (builder) => ({
    getForYouMovies: builder.query({
      query: (movie_title_capitalize) => `/content_recommendations/${movie_title_capitalize}`,
      providesTags: ["ForYou"],
    }),

    getHomeForYouMovies: builder.query({
      query: (name) => `/hybrid_recommendations/1/${name}`,
      providesTags: ["ForYou"],
    }),
  }),
});

export const { useGetForYouMoviesQuery, useGetHomeForYouMoviesQuery } = forYouApi;
