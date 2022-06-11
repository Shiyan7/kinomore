import { getCurrentYear } from "@/helpers/getCurrentYear/getCurrentYear";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    year: {minYear: 1990, maxYear: getCurrentYear()},
    rating: {minRating: 8, maxRating: 10},
    sortByNew: '-1'
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
        setSortByNew: (state, action) => {
            state.sortByNew = action.payload
        }
    }
})

export const {
    setYearMin,
    setYearMax,
    setRatingMin,
    setRatingMax,
    setSortByNew
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;