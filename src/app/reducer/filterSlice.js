import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: {title : "All", id : "all"},
  sortBy: "primary_release_date.desc",
  page: 1,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setGenre: (state, action) => {
      state.genre = action.payload;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },

    incrementPage: (state) => {
      if (state.page < 41) {
        state.page += 1;
      }
    },

    decrementPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
      }
    },
    resetePage: (state) => {
      state.page = 1;
    },
  },
});

export const {
  setGenre,
  setSortBy,
  incrementPage,
  decrementPage,
  resetePage,
} = filterSlice.actions;
export default filterSlice.reducer;
