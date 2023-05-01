import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const movieSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovies(state, action) {
      state.push(action.payload);
    },
    removeMovies(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addMovies, removeMovies } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;
