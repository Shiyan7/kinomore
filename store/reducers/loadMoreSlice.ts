import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filmsLimit: 10,
    seriesLimit: 10,
    resultsLimit: 15,
}

export const loadSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        loadMoreFilms: (state, action) => {
            state.filmsLimit += action.payload
        },
        loadMoreSeries: (state, action) => {
            state.seriesLimit += action.payload
        },
        loadMoreResults: (state, action) => {
            state.resultsLimit += action.payload
        },
    }
})

export const {
    loadMoreFilms,
    loadMoreSeries,
    loadMoreResults
} = loadSlice.actions;

export const loadReducer = loadSlice.reducer;