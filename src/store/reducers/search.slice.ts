import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	search: '',
	visible: false,
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearch: (state, action) => {
			state.search = action.payload;
		},
		setVisible: (state, action) => {
			state.visible = action.payload;
		},
	},
});

export const { setSearch, setVisible } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
