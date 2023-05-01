import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songSlice = createSlice({
  name: "songs",
  initialState: [],
  reducers: {
    addSongs(state, action) {
      state.push(action.payload);
    },
    removeSongs(state, action) {
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

export const { addSongs, removeSongs } = songSlice.actions;
export const songReducer = songSlice.reducer;
