import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    year: {minYear: 1990, maxYear: 2022},
    rating: {minRating: 8, maxRating: 10},
}

export const filtersSlice = createSlice({
    name: 'year',
    initialState,
    reducers: {
        setYearMin: (state, action) => {
            state.year.minYear = action.payload
        },
        setYearMax: (state, action) => {
            state.year.maxYear = action.payload
        },
        setRatingMin: (state, action) => {
            state.rating.minRating = action.payload
        },
        setRatingMax: (state, action) => {
            state.rating.maxRating = action.payload
        },
    }
})

export const {
    setYearMin,
    setYearMax,
    setRatingMin,
    setRatingMax
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;