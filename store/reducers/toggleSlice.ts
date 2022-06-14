import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openedFilters: false,
}

export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducers: {
        toggleFilters: (state, action) => {
            state.openedFilters = action.payload
        }
    }
})

export const {
    toggleFilters
} = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;