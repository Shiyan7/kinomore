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
        submitForm: (state, action) => {
            state.search = action.payload
            state.value = ''
        }
    }
})

export const {
    setSearch,
    setValue,
    submitForm
} = searchSlice.actions;

export const searchReducer = searchSlice.reducer;