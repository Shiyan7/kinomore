import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {API_TOKEN, API_URL} from '../constants/api'

export const kinopoiskAPI = createApi({
  reducerPath: 'queryReducer',
  baseQuery: fetchBaseQuery({baseUrl: API_URL}),
  endpoints: (build) => ({
    getFilms: build.query({
      query: () =>
        `/movie?field=year&search=2022&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=${API_TOKEN}`,
    }),
  }),
});


export const {getFilms} = kinopoiskAPI.endpoints