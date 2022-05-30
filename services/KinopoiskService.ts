import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_TOKEN, API_URL} from '../constants/api'
import { IFilms } from '../types/IFilms';

export const kinopoiskAPI = createApi({
  reducerPath: 'kinopoiskAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getNewFilms: build.query<IFilms, ''>({
      query: () =>
        `/movie?field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_TOKEN}`,
    }),
    getPopularFilm: build.query({
      query: () => `/movie`
    })
  }),
});


export const {getNewFilms} = kinopoiskAPI.endpoints