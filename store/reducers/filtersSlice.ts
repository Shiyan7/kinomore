import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        year: '1990-2022',
        rating: '1-10',
        sortByRelease: '1'
    }
}

export const filtersSlice = createSlice({
    name: 'filters',
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
    setSortByRelease,
} = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;