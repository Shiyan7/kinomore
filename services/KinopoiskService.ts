import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_TOKEN, API_URL} from '../constants/api'
import { IData } from '../types/IData';
import { IFilm } from '../types/IFilm';

export const kinopoiskAPI = createApi({
  reducerPath: 'kinopoiskAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getNewFilms: build.query<IData, ''>({
      query: () =>
        `/movie?field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_TOKEN}`,
    }),
    getPopularFilm: build.query<IFilm, ''>({
      query: () =>
        `/movie?field=id&search=409424&token=${API_TOKEN}`,
    }),
    getNewSeries: build.query<IData, ''>({
      query: () =>
        `/movie?field=year&search=2022&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_TOKEN}`,
    }),
  }),
});

export const {useGetNewFilmsQuery, useGetPopularFilmQuery} = kinopoiskAPI
export const {getNewFilms, getPopularFilm, getNewSeries} = kinopoiskAPI.endpoints