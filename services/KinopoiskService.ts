import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiEnum} from '@/constants/api'
import {IData} from '@/types/IData';
import {IMovie} from '@/types/IMovie';
import {IQuery} from '@/types/IQuery';
import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';

export const kinopoiskAPI = createApi({
  reducerPath: 'kinopoiskAPI',
  baseQuery: fetchBaseQuery({baseUrl: ApiEnum.Url}),
  endpoints: (build) => ({
    getFilmById: build.query<IMovie, string | string[] | undefined>({
      query: id =>
        `/movie?search=${id}&field=id&token=${ApiEnum.Key}`
    }),
    getNewFilms: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${ApiEnum.Key}`
    }),
    getNewSeries: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${ApiEnum.Key}`,
    }),
    getFilmByName: build.query<IData, IQuery>({
      query: ({filters, page, search}) =>
        `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search=${search}&field=name&search=${filters.rating}&field=rating.kp&search=${filters.year}&field=year&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${ApiEnum.Key}`
    }),
    getFilms: build.query<IData, IQuery>({
      query: ({filters, page}) =>
      `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${ApiEnum.Key}`
    }),
    getSeries: build.query<IData, IQuery>({
      query: ({filters, page}) =>
        `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${ApiEnum.Key}`
    }),
    getCartoons: build.query<IData, IQuery>({
      query: ({filters, page}) =>
      `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${ApiEnum.Key}`
    }),
    getPerson: build.query({
      query: name => `/person?name=${name}&token=${ApiEnum.Key}`
    }),
    getFavourites: build.query<IData, IQuery>({
      query: ({query, filters, page}) => `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&${query}&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${ApiEnum.Key}`
    })
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
  useGetPersonQuery,
  useGetFavouritesQuery
} = kinopoiskAPI;

export const {
  getNewFilms,
  getNewSeries,
  getFilmById,
  getFilmByName,
  getFilms,
  getSeries,
  getCartoons,
  getPerson,
} = kinopoiskAPI.endpoints;