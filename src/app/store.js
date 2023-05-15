import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appSlice from "./reducer/appSlice";
import filterSlice from "./reducer/filterSlice";
import { movieApi } from "./server/movieApi";
import { movieDetailsApi } from "./server/movieDetailsApi";
import { forYouApi } from "./server/forYouMoviesApi";
import { searchApi } from "./server/searchApi";

export const store = configureStore({
  reducer: {
    app: appSlice,
    filter: filterSlice,
    movieApi: movieApi.reducer,
    movieDetailsApi: movieDetailsApi.reducer,
    forYouApi: forYouApi.reducer,
    searchApi: searchApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      movieApi.middleware,
      movieDetailsApi.middleware,
      forYouApi.middleware,
      searchApi.middleware
    ),
});
