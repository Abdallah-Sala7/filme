import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./reducer/appSlice";
import filterSlice from "./reducer/filterSlice";

export const store = configureStore({
  reducer: {
    app: appSlice,
    filter : filterSlice
  },
});
