import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAside: false,
  searchValue:""
}

export const appSlice = createSlice({
  name :'app',
  initialState,
  reducers:{
    setOpenAside:(state, action) => {
      state.openAside = action.payload;
    },

    setSearchValue:(state, action) => {
      state.searchValue = action.payload
    }
  }
})

export const {setOpenAside, setSearchValue} = appSlice.actions;
export default appSlice.reducer;