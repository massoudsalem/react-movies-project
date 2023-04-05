import { createSlice } from '@reduxjs/toolkit';

export const genreSlice = createSlice({
  name: 'genre',
  initialState: {
    selectedGenre: '',
    page: 1,
    searchTerm: '',
  },
  reducers: {
    selectGenre: (state, action) => {
      state.selectedGenre = action.payload;
      state.searchTerm = '';
    },
    searchMovie: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { selectGenre, searchMovie } = genreSlice.actions;

export default genreSlice.reducer;
