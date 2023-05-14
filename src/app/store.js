import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./reducer/appSlice";
import filterSlice from "./reducer/filterSlice";
import { movieApi } from "./server/movieApi";
import { createMovieApi } from "./server/createMovie";
import { movieDetailsApi } from "./server/movieDetailsApi";
import { interestsApi } from "./server/interestsApi";

export const store = configureStore({
  reducer: {
    app: appSlice,
    filter: filterSlice,
    movieApi: movieApi.reducer,
    createMovieApi: createMovieApi.reducer,
    movieDetailsApi: movieDetailsApi.reducer,
    interestsApi: interestsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      createMovieApi.middleware,
      movieDetailsApi.middleware,
      interestsApi.middleware
    ),
});
