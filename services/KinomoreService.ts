import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_URL, API_KEY} from '@/constants/api'
import {IData} from '@/types/IData';
import {IMovie} from '@/types/IMovie';
import {IBaseQuery, IQuery} from '@/types/IQuery';
import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';
import { IPerson } from '@/types/IPerson';

export const kinomoreAPI = createApi({
  reducerPath: 'kinomoreAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getFilmById: build.query<IMovie, string | string[] | undefined>({
      query: id => `/movie?search=${id}&field=id&token=${API_KEY}`
    }),
    getFilmsById: build.query<IData, IBaseQuery>({
      query: ({query, limit}) =>
        `/movie?${query}&limit=${limit}&token=${API_KEY}`
    }),
    getNewFilms: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
    }),
    getNewSeries: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
    }),
    getFilmByName: build.query<IData, IQuery>({
      query: ({filters, page, id}) =>
        `/movie?${filters.genre}&search=${id}&field=name&search=${filters.rating}&field=rating.kp&search=${filters.year}&field=year&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${API_KEY}`
    }),
    getFilms: build.query<IData, IQuery>({
      query: ({filters, page}) =>
      `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getSeries: build.query<IData, IQuery>({
      query: ({filters, page}) =>
        `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getCartoons: build.query<IData, IQuery>({
      query: ({filters, page}) =>
        `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getPersonById: build.query<IPerson, string | string[] | undefined>({
      query: id => 
        `/person?search=${id}&field=id&token=${API_KEY}`
    }),
    getFavourites: build.query<IData, IQuery>({
      query: ({query, filters, page}) =>
        `/movie?${filters.genre}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&${query}&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getFilmsBySearch: build.query<IData, IBaseQuery>({
      query: ({query, type, limit}) =>
        `/movie?search=${query}&field=name&limit=${limit}&sortField=year&sortType=-1&field=typeNumber&search=${type}&isStrict=false&token=${API_KEY}`
    }),
  }),
});

export const {
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
  useGetFilmByIdQuery,
  useGetFilmByNameQuery,
  useGetFilmsQuery,
  useGetSeriesQuery,
  useGetCartoonsQuery,
  useGetPersonByIdQuery,
  useGetFavouritesQuery,
  useGetFilmsByIdQuery,
  useGetFilmsBySearchQuery
} = kinomoreAPI;

export const {
  getNewFilms,
  getNewSeries,
  getFilmById,
  getFilmByName,
  getFilms,
  getSeries,
  getCartoons,
  getPersonById,
} = kinomoreAPI.endpoints;