import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ selectedGenre, page, searchTerm }) => {
        //Get Movies by Search Term
        if (searchTerm) {
          return `/search/movie?query=${searchTerm}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get Movies by Category
        if (selectedGenre && typeof selectedGenre === 'string') {
          return `/movie/${selectedGenre}?page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get Movies by Genre
        if (selectedGenre && typeof selectedGenre === 'number') {
          return `discover/movie?with_genres=${selectedGenre}&page=${page}&api_key=${tmdbApiKey}`;
        }

        //Get popular movies by default
        return `/movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    getMovie: builder.query({
      query: ({ id }) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  useGetGenresQuery,
  useGetRecommendationsQuery,
} = tmdbApi;
