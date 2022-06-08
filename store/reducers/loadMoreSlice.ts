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
            state.filmsLimit += 5
        },
        loadMoreSeries: (state, action) => {
            state.seriesLimit += 5
        },
        loadMoreResults: (state, action) => {
            state.resultsLimit += 5
        },
    }
})

export const {
    loadMoreFilms,
    loadMoreSeries,
    loadMoreResults
} = loadSlice.actions;

export const loadReducer = loadSlice.reducer;