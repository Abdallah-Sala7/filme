import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openAside: false,
}

export const appSlice = createSlice({
  name :'app',
  initialState,
  reducers:{
    setOpenAside:(state) => {
      state.openAside = !state.openAside;
    }
  }
})

export const {setOpenAside} = appSlice.actions;
export default appSlice.reducer;