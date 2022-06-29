import { loadMoreFilms, loadMoreSeries } from "@/store/reducers/loadMore.slice";
import { setFilterRatings, setFiterYears, setSortByRelease, setFilterGenre, resetFilters, setSwipedValue } from "@/store/reducers/filters.slice";
import { toggleFilters, toggleMenu } from "@/store/reducers/toggle.slice";
import { setPage } from "@/store/reducers/pagination.slice";
import { setSearch } from "@/store/reducers/search.slice";

export {
    toggleMenu,
    setSearch,
    loadMoreFilms,
    loadMoreSeries,
    setFilterRatings,
    setFiterYears,
    setSortByRelease,
    setSwipedValue,
    setFilterGenre,
    setPage,
    resetFilters,
    toggleFilters,
}