import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
    }
})

export const {
    setSearch,
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;