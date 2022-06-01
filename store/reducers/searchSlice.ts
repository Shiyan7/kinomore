import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search: '',
    value: ''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setValue: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {
    setSearch,
    setValue
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;