import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bestFilmsRating: {minRating: 8, maxRating: 10},
}

export const ratingSlice = createSlice({
    name: 'rating',
    initialState,
    reducers: {
        setBestFilmsRatingMin: (state, action) => {
            state.bestFilmsRating.minRating = action.payload
        },
        setBestFilmsRatingMax: (state, action) => {
            state.bestFilmsRating.maxRating = action.payload
        }
    }
})

export const {
    setBestFilmsRatingMin,
    setBestFilmsRatingMax
} = ratingSlice.actions;

export const ratingReducer = ratingSlice.reducer;