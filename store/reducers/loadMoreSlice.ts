import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filmsLimit: 10,
    seriesLimit: 10,
}

export const loadSlice = createSlice({
    name: 'loadMore',
    initialState,
    reducers: {
        loadMoreFilms: (state, action) => {
            state.filmsLimit += action.payload
        },
        loadMoreSeries: (state, action) => {
            state.seriesLimit += action.payload
        },
    }
})

export const {
    loadMoreFilms,
    loadMoreSeries
} = loadSlice.actions;

export const loadReducer = loadSlice.reducer;