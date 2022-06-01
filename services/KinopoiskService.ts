import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_TOKEN, API_URL} from '../constants/api'
import { IData } from '../types/IData';
import { IFilm } from '../types/IFilm';

export const kinopoiskAPI = createApi({
  reducerPath: 'kinopoiskAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getFilmById: build.query<IFilm, any>({
      query: (id) => `/movie?search=${id}&field=id&token=${API_TOKEN}`
    }),
    getNewFilms: build.query<IData, ''>({
      query: () =>
        `/movie?field=rating.kp&search=5-10&field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_TOKEN}`
    }),
    getNewSeries: build.query<IData, ''>({
      query: () =>
        `/movie?field=rating.kp&search=5-10&field=year&search=2022&field=typeNumber&search=2&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_TOKEN}`,
    }),
    getFilmByName: build.query<IData, any>({
      query: (name) => `/movie?search=${name}&field=name&limit=15isStrict=false&token=${API_TOKEN}`
    })
  }),
});

export const {
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
  useGetFilmByIdQuery,
  useGetFilmByNameQuery,
} = kinopoiskAPI;

export const {
  getNewFilms,
  getNewSeries,
  getFilmById,
  getFilmByName
} = kinopoiskAPI.endpoints;