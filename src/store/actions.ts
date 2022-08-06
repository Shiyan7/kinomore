import {loadMoreFilms, loadMoreSeries} from "@/store/reducers/loadMore.slice";
import {setFilterRatings, setFilterYears, setSortByRelease, setFilterGenre, resetFilters} from "@/store/reducers/filters.slice";
import {toggleFilters, toggleMenu} from "@/store/reducers/toggle.slice";
import {setPage} from "@/store/reducers/pagination.slice";
import {setSearch, setVisible} from "@/store/reducers/search.slice";

export {
    toggleMenu,
    setSearch,
    loadMoreFilms,
    loadMoreSeries,
    setFilterRatings,
    setFilterYears,
    setSortByRelease,
    setFilterGenre,
    setPage,
    resetFilters,
    toggleFilters,
    setVisible
}