import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  filter: 'all',
  sortBy: 'rating',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    }
  },
});

export const { setFilter, setSortBy } = filterSlice.actions;
export default filterSlice.reducer;