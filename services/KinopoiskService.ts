import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, API_URL} from '@/constants/api'
import {IData} from '@/types/IData';
import {IMovie} from '@/types/IMovie';
import {IFilterArgs} from '@/types/IFilterArgs';
import {ISearchArgs} from '@/types/ISearchArgs';
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
        `/movie?field=rating.kp&search=5-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
    }),
    getNewSeries: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=5-10&field=year&search=${getCurrentYear()}&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
    }),
    getFilmByName: build.query<IData, IFilterArgs>({
      query: ({filters, page, search}) =>
        `/movie?search=${search}&field=name&search=${filters.rating}&field=typeNumber&search=${filters.year}&field=year&sortField=year&sortType=${filters.sortByRelease}&page=${page}&isStrict=false&token=${API_KEY}`
    }),
    getAllFilms: build.query<IData, IFilterArgs>({
      query: ({filters, page}) =>
        `/movie?field=rating.kp&search=${filters.rating}&field=year&search=${filters.year}&field=typeNumber&search=1&sortField=year&sortType=${filters.sortByRelease}&limit=10&page=${page}&token=${API_KEY}`
    }),
    getComedyFilms: build.query<IData, IFilterArgs>({
      query: ({filters, page}) =>
        `/movie?search[]=movie&search[]=комедия&search[]=${filters.year}&search[]=${filters.rating}&search=!null&search=!null&field[]=type&field[]=genres.name&field[]=year&field=rating.kp&field=name&sortField=year&sortType=${filters.sortByRelease}&field=votes.kp&limit=10&page=${page}&token=${API_KEY}`
    }),
    getWarFilms: build.query<IData, IFilterArgs>({
      query: ({filters, page}) =>
        `/movie?search[]=movie&search[]=военный&search[]=${filters.year}&search[]=${filters.rating}&search=!null&search=!null&field[]=type&field[]=genres.name&field[]=year&field=rating.kp&field=name&sortField=year&sortType=${filters.sortByRelease}&field=votes.kp&limit=10&page=${page}&token=${API_KEY}`
    }),
    getHorrorFilms: build.query<IData, IFilterArgs>({
      query: ({filters, page}) =>
        `/movie?search[]=movie&search[]=ужасы&search[]=${filters.year}&search[]=${filters.rating}&search=!null&search=!null&field[]=type&field[]=genres.name&field[]=year&field=rating.kp&field=name&sortField=year&sortType=${filters.sortByRelease}&field=votes.kp&limit=10&page=${page}&token=${API_KEY}`
    }),
  }),
});

export const {
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
  useGetFilmByIdQuery,
  useGetFilmByNameQuery,
  useGetAllFilmsQuery,
  useGetComedyFilmsQuery,
  useGetWarFilmsQuery,
  useGetHorrorFilmsQuery
} = kinopoiskAPI;

export const {
  getNewFilms,
  getNewSeries,
  getFilmById,
  getFilmByName,
  getAllFilms,
  getComedyFilms,
  getWarFilms,
  getHorrorFilms
} = kinopoiskAPI.endpoints;