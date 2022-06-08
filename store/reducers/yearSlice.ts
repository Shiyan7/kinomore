import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bestFilmsYear: {minYear: 1990, maxYear: 2022},
}

export const yearSlice = createSlice({
    name: 'year',
    initialState,
    reducers: {
        setBestFilmsYearMin: (state, action) => {
            state.bestFilmsYear.minYear = action.payload
        },
        setBestFilmsYearMax: (state, action) => {
            state.bestFilmsYear.maxYear = action.payload
        }
    }
})

export const {
    setBestFilmsYearMin,
    setBestFilmsYearMax
} = yearSlice.actions;

export const yearReducer = yearSlice.reducer;