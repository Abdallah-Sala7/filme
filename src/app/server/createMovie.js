import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api_key = '0561cf548ca91eafbf170ffa2911a740'
const list_id = '8252780'

const baseUrl = ` https://api.themoviedb.org/3/list`

export const createMovieApi = createApi({
  reducerPath: 'createMovieApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Movie'],
  endpoints: (builder) => ({
    createMovie: builder.mutation({
      query: (body) => ({
        url: `/${list_id}/add_item?api_key=${api_key}`,
        method: 'POST',
        body,
        headers: {
          "content-type" : "application/json;charset=utf-8",
          "authorization" : "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTYxY2Y1NDhjYTkxZWFmYmYxNzBmZmEyOTExYTc0MCIsInN1YiI6IjY0NWJmYjI4M2ZlMTYwMDE3MjI1ZTljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Kt90ZIHZClzUWQ4_R3eFO6PQHoncu1qckxWrLctsID0"
        }
      }),
      invalidatesTags: ['Movie'],
    }),
  }),
})

export const { useCreateMovieMutation } = createMovieApi