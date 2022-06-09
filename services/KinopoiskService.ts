import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_KEY, API_URL} from '@/constants/api'
import {IData} from '@/types/IData';
import {IFilm} from '@/types/IFilm';
import {IFilterArgs} from '@/types/IFilterArgs';
import {ISearchArgs} from '@/types/ISearchArgs';

export const kinopoiskAPI = createApi({
  reducerPath: 'kinopoiskAPI',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getFilmById: build.query<IFilm, string | string[] | undefined>({
      query: id =>
        `/movie?search=${id}&field=id&token=${API_KEY}`
    }),
    getNewFilms: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=5-10&field=year&search=2022&field=typeNumber&search=1&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`
    }),
    getNewSeries: build.query<IData, number>({
      query: limit =>
        `/movie?field=rating.kp&search=5-10&field=year&search=2022&field=typeNumber&search=2&limit=${limit}&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_KEY}`,
    }),
    getFilmByName: build.query<IData, ISearchArgs>({
      query: args =>
        `/movie?search=${args.search}&field=name&limit=${args.limit}isStrict=false&token=${API_KEY}`
    }),
    getBestFilms: build.query<IData, IFilterArgs>({
      query: args =>
        `/movie?field=rating.kp&search=${args.minRating}-${args.maxRating}&field=year&search=${args.minYear}-${args.maxYear}&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.kp&sortType=-1&limit=50&page=${args.page}&token=${API_KEY}`
    }),
    getBestWarFilms: build.query<IData, number>({
      query: page =>
        `/movie?search[]=movie&search[]=фантастика&search[]=1990-2021&search[]=2-10&search=!null&search=!null&field[]=type&field[]=genres.name&field[]=year&field=rating.kp&field=name&field=votes.kp&page=${page}&token=${API_KEY}`
    })
  }),
});

export const {
  useGetNewFilmsQuery,
  useGetNewSeriesQuery,
  useGetFilmByIdQuery,
  useGetFilmByNameQuery,
  useGetBestWarFilmsQuery,
  useGetBestFilmsQuery
} = kinopoiskAPI;

export const {
  getNewFilms,
  getNewSeries,
  getFilmById,
  getFilmByName,
  getBestFilms,
  getBestWarFilms
} = kinopoiskAPI.endpoints;