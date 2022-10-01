import { loadMoreFilms, loadMoreSeries, loadMoreImages } from '@/store/reducers/loadMoreSlice';
import {
	setFilterRatings,
	setFiterYears,
	setSortByRelease,
	setFilterGenre,
	resetFilters,
} from '@/store/reducers/filtersSlice';
import { toggleFilters, toggleMenu } from '@/store/reducers/toggleSlice';
import { setPage } from '@/store/reducers/paginationSlice';
import { setSearch, setVisible } from '@/store/reducers/searchSlice';

export {
	toggleMenu,
	setSearch,
	loadMoreFilms,
	loadMoreSeries,
	setFilterRatings,
	setFiterYears,
	setSortByRelease,
	setFilterGenre,
	setPage,
	resetFilters,
	toggleFilters,
	setVisible,
	loadMoreImages,
};
