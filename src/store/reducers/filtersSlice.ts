import { getCurrentYear } from '@/helpers/getCurrentYear/getCurrentYear';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	filters: {
		year: `1960-${getCurrentYear()}`,
		rating: '1-10',
		sortByRelease: '-1',
		genre: '',
	},
};

export const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFiterYears: (state, action) => {
			state.filters.year = action.payload;
		},
		setFilterRatings: (state, action) => {
			state.filters.rating = action.payload;
		},
		setSortByRelease: (state, action) => {
			state.filters.sortByRelease = action.payload;
		},
		setFilterGenre: (state, action) => {
			state.filters.genre = action.payload;
		},
		resetFilters: (state) => {
			state.filters = initialState.filters;
		},
	},
});

export const { setFiterYears, setFilterRatings, setSortByRelease, setFilterGenre, resetFilters } =
	filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
