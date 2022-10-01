import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	openedFilters: false,
	openedMenu: false,
};

export const toggleSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		toggleFilters: (state, action) => {
			state.openedFilters = action.payload;
		},
		toggleMenu: (state, action) => {
			state.openedMenu = action.payload;
		},
	},
});

export const { toggleFilters, toggleMenu } = toggleSlice.actions;

export const toggleReducer = toggleSlice.reducer;
