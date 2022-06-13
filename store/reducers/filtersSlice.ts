import { getCurrentYear } from "@/helpers/getCurrentYear/getCurrentYear";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        year: {minValue: 1990, maxValue: getCurrentYear()},
        rating: {minValue: 8, maxValue: 10},
        sortByRelease: '-1'
    }
}

export const filtersSlice = createSlice({
    name: 'year',
    initialState,
    reducers: {
        setFiterYears: (state, action) => {
            state.filters.year = action.payload
        },
        setFilterRatings: (state, action) => {
            state.filters.rating = action.payload
        },
        setSortByRelease: (state, action) => {
            state.filters.sortByRelease = action.payload
        }
    }
})

export const {
    setFiterYears,
    setFilterRatings,
    setSortByRelease
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;