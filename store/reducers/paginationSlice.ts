import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bestFilmsPage: 1
}

export const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        setBestFilmsPage: (state, action) => {
            state.bestFilmsPage = action.payload
        }
    }
})

export const {
    setBestFilmsPage
} = paginationSlice.actions;

export const paginationReducer = paginationSlice.reducer