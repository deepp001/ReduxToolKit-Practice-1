import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer, addMovies, removeMovies } from "./slices/movieSlice";
import { songReducer, addSongs, removeSongs } from "./slices/songSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    song: songReducer,
    movie: moviesReducer,
  },
});

export { store, addSongs, removeSongs, addMovies, removeMovies, reset };
