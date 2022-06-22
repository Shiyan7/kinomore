import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, API_URL} from '@/constants/api'
import {IData} from '@/types/IData';
import {IMovie} from '@/types/IMovie';
import {IFilterArgs} from '@/types/IFilterArgs';
import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';

export const kinopoiskAPI = createApi({
  reducerPath: 'kinopoiskAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getFilmById: build.query<IMovie, string | string[] | undefined>({
      query: id =>
        `/movie?search=${id}&field=id&token=${API_KEY}`
    }),
    getNewFilms: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
    }),
    getNewSeries: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=1-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
    }),
    getFilmByName: build.query<IData, IFilterArgs>({
      query: ({filters, page, search}) =>
        `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search=${search}&field=name&search=${filters.rating}&field=rating.kp&search=${filters.year}&field=year&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${API_KEY}`
    }),
    getFilms: build.query<IData, IFilterArgs>({
      query: ({filters, page}) =>
      `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=1&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getSeries: build.query<IData, IFilterArgs>({
      query: ({filters, page}) =>
        `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=2&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getCartoons: build.query<IData, IFilterArgs>({
      query: ({filters, page}) =>
      `/movie?${filters.genre !== '' && `search[]=${filters.genre}&field[]=genres.name`}&search[]=${filters.year}&field[]=year&search[]=${filters.rating}&field=rating.kp&search=!null&field=name&search=3&field=typeNumber&search=!null&field=votes.kp&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getPerson: build.query({
      query: () => `/person?name=&token=${API_KEY}`
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
  useGetPersonQuery
} = kinopoiskAPI;

export const {
  getNewFilms,
  getNewSeries,
  getFilmById,
  getFilmByName,
  getFilms,
  getSeries,
  getCartoons,
  getPerson
} = kinopoiskAPI.endpoints;